import { useState } from 'react';

const MIDI_UUID = '03b80e5a-ede8-4b33-a751-6ce34ec4c700';
const MIDI_CHARACTERISTIC_UUID = '7772e5db-3868-4112-a1a9-f2669d106bf3';

export default function useBluetoothMidi() {
  const [midi, setMidi] = useState<BluetoothRemoteGATTCharacteristic>();

  async function getMidi() {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [
          { services: [MIDI_UUID] },
          { namePrefix: 'BBC micro:bit' },
          { namePrefix: 'Roland A-01' },
        ],
        optionalServices: [MIDI_UUID],
      });
      const server = await device.gatt?.connect();
      if (!server) {
        return;
      }
      const service = await server.getPrimaryService(MIDI_UUID);
      const characteristic = await service.getCharacteristic(MIDI_CHARACTERISTIC_UUID);
      await characteristic.startNotifications();
      setMidi(characteristic);
    } catch (error) {
      console.error(error);
    }
  }

  if (!midi) {
    getMidi();
  }

  return midi;
}
