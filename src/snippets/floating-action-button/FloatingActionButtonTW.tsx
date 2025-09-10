import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function FloatingActionButtonTW() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f4f6f8]">
      <style>{`
        .tw-fab::before, .tw-fab::after {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 26px; height: 4px;
          background: #fff; border-radius: 2px;
          transform: translate(-50%, -50%);
          transition: transform .2s ease-out;
        }
        .tw-fab::after { transform: translate(-50%, -50%) rotate(90deg); }
        .peer:checked ~ .tw-fab::before { transform: translate(-50%, -50%) rotate(45deg); }
        .peer:checked ~ .tw-fab::after  { transform: translate(-50%, -50%) rotate(-45deg); }
      `}</style>

      <div className="relative mt-24 h-14 w-14">
        <input
          type="checkbox"
          aria-label="Toggle actions"
          className="peer absolute inset-0 z-20 h-full w-full cursor-pointer rounded-full opacity-0"
        />

        <div
          role="menu"
          aria-label="Fab actions"
          className="absolute top-1/2 right-[calc(100%+8px)] z-0 flex h-12 w-[220px] -translate-y-1/2 items-center justify-between rounded-full bg-white px-3 opacity-0 shadow peer-checked:pointer-events-auto peer-checked:opacity-100"
        >
          <FiHome className="text-[24px] text-[#2c3e50]" />
          <FiUser className="text-[24px] text-[#2c3e50]" />
          <FiSettings className="text-[24px] text-[#2c3e50]" />
          <FiLogOut className="text-[24px] text-[#2c3e50]" />
        </div>

        <div
          aria-hidden="true"
          className="tw-fab relative z-10 h-14 w-14 rounded-full bg-blue-300 shadow hover:bg-blue-400"
        />
      </div>
    </div>
  );
}
