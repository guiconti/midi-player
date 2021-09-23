import React, { useState, useEffect, useCallback } from 'react';
import { PolySynth, now } from 'tone';

import { Button } from '../elements';
import { useBluetoothMidi } from '../../hooks';
import { keys } from '../../constants';

const KeyboardContainer: React.FC = () => {
  const [synth, setSynth] = useState<PolySynth>(new PolySynth().toDestination());
  const midi = useBluetoothMidi();

  const onKeyPressed = useCallback(
    (event: Event) => {
      if (!event || !event.target) {
        return;
      }
      // @ts-ignore
      const data = event.target.value;

      // The bluetooth buffer has values that we don't care in the first
      // 2 unint 8 spots. The spots 3, 4 and 5 contains the state (on/off)
      // note and velocity. After that if there is more notes we will have them
      // right after the previous note with one uint8 of not used information
      // in between.
      for (let i = 2; i + 2 < data.buffer.byteLength; i += 4) {
        const on = data.getUint8(i) === 144;
        const note = keys[data.getUint8(i + 1)];
        const velocity = data.getUint8(i + 2);
        if (on) {
          synth.triggerAttack(note, now(), velocity);
        } else {
          synth.triggerRelease(note, now());
        }
        console.log(on, note, velocity);
      }
    },
    [synth],
  );

  useEffect(() => {
    return () => {
      if (!midi) {
        return;
      }
      midi.removeEventListener('characteristicvaluechanged', onKeyPressed);
    };
  }, []);

  useEffect(() => {
    if (!midi) {
      return;
    }
    console.log('We have a midi');
    console.log(midi);
    midi.addEventListener('characteristicvaluechanged', onKeyPressed);
  }, [midi]);

  const onResetSynth = useCallback(() => {
    if (synth) {
      synth.releaseAll();
    }
  }, [synth]);

  return (
    <div>
      <Button onClick={onResetSynth}>Reset synth</Button>
    </div>
  );
};

export default KeyboardContainer;
