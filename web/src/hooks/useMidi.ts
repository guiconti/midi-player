import { useState } from 'react';

export default function useMidi() {
  const [midi, setMidi] = useState<WebMidi.MIDIAccess>();

  function onMidiAccessGranted(midiAccess: WebMidi.MIDIAccess) {
    console.log('Midi access granted');
    setMidi(midiAccess);
  }

  function onMidiAccessRefused() {
    console.error('Midi access refused.');
  }

  if (!midi) {
    if (!navigator.requestMIDIAccess) {
      console.error('Browser does not support MIDI access');
      return;
    }
    navigator
      .requestMIDIAccess()
      .then(onMidiAccessGranted, onMidiAccessRefused);
  }

  return midi;
}
