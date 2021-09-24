import { useState, useEffect } from 'react';

export default function useMidi(): [WebMidi.MIDIAccess | undefined, () => void] {
  const [midi, setMidi] = useState<WebMidi.MIDIAccess>();

  function onMidiAccessGranted(midiAccess: WebMidi.MIDIAccess) {
    console.log('Midi access granted');
    setMidi(midiAccess);
  }

  function onMidiAccessRefused() {
    console.error('Midi access refused.');
  }

  function getMidiAccess() {
    if (midi) {
      console.log('Midi already connected');
      return;
    }
    if (!navigator.requestMIDIAccess) {
      console.error('Browser does not support MIDI access');
      return;
    }
    navigator.requestMIDIAccess().then(onMidiAccessGranted, onMidiAccessRefused);
  }

  useEffect(() => {
    if (!midi) {
      getMidiAccess();
    }
  }, []);

  return [midi, getMidiAccess];
}
