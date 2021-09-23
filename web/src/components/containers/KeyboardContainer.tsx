import React, { useState, useEffect, useCallback } from 'react';
import { now } from 'tone';

import { Button, Slider } from '../elements';
import { useBluetoothMidi, useSynth } from '../../hooks';
import { keys } from '../../constants';

const KeyboardContainer: React.FC = () => {
  const midi = useBluetoothMidi();
  const synth = useSynth();
  const [volume, setVolume] = useState<number>(-50);

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
          synth.triggerAttack(note, now(), 1);
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

  useEffect(() => {
    if (!synth) {
      return;
    }
    const minValue = -100;
    const maxVolume = 0;
    const newValue = volume - (maxVolume - minValue);
    synth.volume.value = newValue;
  }, [synth, volume]);

  const onResetSynth = useCallback(() => {
    if (synth) {
      synth.releaseAll();
    }
  }, [synth]);

  const onVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!synth) {
        return;
      }
      setVolume(parseInt(event.target.value));
    },
    [synth],
  );

  return (
    <div>
      <Slider value={volume} onChange={onVolumeChange} />
      <Button onClick={onResetSynth}>Reset synth</Button>
    </div>
  );
};

export default KeyboardContainer;
