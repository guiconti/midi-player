import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { now } from 'tone';

import { Button, Slider, Keyboard } from '../elements';
import { KeyProps } from '../elements/Key';
import { useBluetoothMidi, useSynth } from '../../hooks';
import { keys } from '../../constants';

// This should come from somewhere else
const FIRST_KEY = 21;
// This should be a state
const KEYBOARD_SIZE = 88;

const generateKeyboard = (): Array<KeyProps> => {
  const keyboard: Array<KeyProps> = [];
  const allKeys = Object.keys(keys);
  for (let i = 0; i < allKeys.length; i++) {
    if (i >= KEYBOARD_SIZE) {
      return keyboard;
    }
    keyboard.push({
      // Object.keys is not very flexible and always assume that key is a string
      // @ts-ignore
      sharp: keys[allKeys[i]].includes('#'),
      active: false,
    });
  }
  return keyboard;
};

const KeyboardContainer: React.FC = () => {
  const midi = useBluetoothMidi();
  const synth = useSynth();
  const [volume, setVolume] = useState<number>(-50);
  const [keyboardKeys, setKeyboardKeys] = useState<Array<KeyProps>>([]);

  // Avoid flickering when mounting keyboard
  useLayoutEffect(() => {
    setKeyboardKeys(generateKeyboard());
  }, []);

  const onKeyPressed = useCallback(
    (key: number, active: boolean) => {
      const adjustedKey = key - FIRST_KEY;
      if (adjustedKey < 0 || adjustedKey >= keyboardKeys.length) {
        return;
      }
      setKeyboardKeys([
        ...keyboardKeys.slice(0, adjustedKey),
        {
          ...keyboardKeys[adjustedKey],
          active,
        },
        ...keyboardKeys.slice(adjustedKey + 1),
      ]);
    },
    [keyboardKeys, setKeyboardKeys],
  );

  const onBluetoothKeyPressed = useCallback(
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
        const noteNumber = data.getUint8(i + 1);
        const note = keys[data.getUint8(i + 1)];
        const velocity = data.getUint8(i + 2);
        // This is apparently the max velocity for my keyboard at least
        const maxVelocity = 127;
        // Synth's velocity must be between 0 and 1
        const adjustedVelocity = Math.min(velocity / maxVelocity, 1);
        if (on) {
          synth.triggerAttack(note, now(), adjustedVelocity);
        } else {
          synth.triggerRelease(note, now());
        }
        onKeyPressed(noteNumber, on);
      }
    },
    [synth, onKeyPressed],
  );

  useEffect(() => {
    return () => {
      if (!midi) {
        return;
      }
      midi.removeEventListener('characteristicvaluechanged', onBluetoothKeyPressed);
    };
  }, []);

  useEffect(() => {
    if (!midi) {
      return;
    }
    console.log('We have a midi');
    console.log(midi);
    midi.addEventListener('characteristicvaluechanged', onBluetoothKeyPressed);
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
      <Keyboard keys={keyboardKeys} />
    </div>
  );
};

export default KeyboardContainer;
