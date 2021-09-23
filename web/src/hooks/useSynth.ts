import { useState, useEffect } from 'react';
import { PolySynth } from 'tone';

export default function useSynth() {
  const [synth, _] = useState<PolySynth>(new PolySynth().toDestination());

  useEffect(() => {
    if (!synth) {
      return;
    }
  }, [synth]);

  return synth;
}
