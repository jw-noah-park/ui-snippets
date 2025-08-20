import { useState } from 'react';

interface ToggleSwitchTWProps {
  label?: string;
  descriptionOn?: string;
  descriptionOff?: string;
}

export default function ToggleSwitchTW({
  label = 'Toggle option',
  descriptionOn = 'This option is enabled',
  descriptionOff = 'This option is disabled',
}: ToggleSwitchTWProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-80 bg-white rounded-xl shadow-md p-4">
        {/* Header: label + switch */}
        <div className="flex items-center justify-between mb-2 pb-1 border-b border-black/10">
          <p className="text-base">{label}</p>
          <label className="relative inline-flex items-center cursor-pointer -mr-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
            <span className="w-11 h-6 rounded-full bg-gray-300 peer-checked:bg-green-600"></span>
            <span className="absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span>
          </label>
        </div>

        {/* Status row */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm text-gray-600">Status:</p>
          <p className={`text-sm ${checked ? 'text-green-600' : 'text-gray-600'}`}>
            {checked ? 'ON' : 'OFF'}
          </p>
        </div>

        {/* Description */}
        <p className={`text-sm ${checked ? 'text-green-600' : 'text-gray-600'}`}>
          {checked ? descriptionOn : descriptionOff}
        </p>
      </div>
    </div>
  );
}
