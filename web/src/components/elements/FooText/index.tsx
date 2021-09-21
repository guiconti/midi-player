import React, { useState, useCallback } from "react";
import { Midi } from "@tonejs/midi";
import { Synth, PolySynth, now } from "tone";

interface FooTextProps {
  somethingDynamic: string;
}

// The way we use the props here doesn't make any sense, it's just for demonstration
const FooText: React.FC<FooTextProps> = ({
  children,
  somethingDynamic,
}: React.PropsWithChildren<FooTextProps>) => {
  const [name, setName] = useState<string>("hey");
  const loadMidi = useCallback(async () => {
    const midi = await Midi.fromUrl(
      "https://www.ninsheetmusic.org/download/mid/3515"
    );
    // console.log(midi);
    setName(midi.name);
    const synth = new PolySynth().toDestination();
    // const synth = new PolySynth(10, Synth).toDestination();
    const audioContext = now() + 0.5;
    midi.tracks[1].notes.forEach((note) => {
      console.log(note);
      console.log(note.time + audioContext);
      console.log(now());
      synth.triggerAttackRelease(
        note.name,
        note.duration,
        note.time + now(),
        note.velocity
      );
    });
  }, []);
  return <button onClick={loadMidi}>Play midi</button>;
};

export default FooText;
