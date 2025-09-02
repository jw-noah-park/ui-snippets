import { useEffect, useRef, useState } from 'react';
import {
  FiMoreHorizontal,
  FiEdit,
  FiEyeOff,
  FiShare2,
  FiBookmark,
  FiMessageCircle,
  FiCopy,
  FiTrash2,
} from 'react-icons/fi';

type Item = {
  key: string;
  label: string;
  icon: React.ReactNode;
  destructive?: boolean;
};

export default function ActionMenuTW() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const items: Item[] = [
    { key: 'edit', label: 'Edit Post', icon: <FiEdit size={18} /> },
    { key: 'hide', label: 'Hide Post', icon: <FiEyeOff size={18} /> },
    { key: 'share', label: 'Share Post', icon: <FiShare2 size={18} /> },
    { key: 'divider', label: '', icon: <span /> },
    { key: 'pin', label: 'Pin to top', icon: <FiBookmark size={18} /> },
    {
      key: 'disable',
      label: 'Disable Comments',
      icon: <FiMessageCircle size={18} />,
    },
    { key: 'dup', label: 'Duplicate', icon: <FiCopy size={18} /> },
    { key: 'divider', label: '', icon: <span /> },
    {
      key: 'del',
      label: 'Delete',
      icon: <FiTrash2 size={18} />,
      destructive: true,
    },
  ];

  return (
    <div className="grid min-h-[100vh] place-items-center">
      <div ref={ref} className="relative inline-block">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl border-2 border-[#BEBFC5] bg-white shadow-[0_6px_18px_rgba(99,102,241,0.15)]"
        >
          <FiMoreHorizontal size={20} />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute top-full left-0 z-50 min-w-[260px] rounded-xl border border-[rgba(221,225,238,0.8)] bg-white/90 p-1 shadow-[0_20px_50px_rgba(17,24,39,0.10),inset_0_1px_0_rgba(255,255,255,0.7)] saturate-150 backdrop-blur-xl"
          >
            <ul className="py-1">
              {items.map((it) =>
                it.key.startsWith('divider') ? (
                  <li
                    key={it.key}
                    className="my-2 h-px bg-[rgba(226,232,240,0.9)]"
                  />
                ) : (
                  <li key={it.key}>
                    <button
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className={`m-0.5 flex w-full items-center gap-2 rounded-lg px-3 py-2 transition ${
                        it.destructive
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-gray-400 hover:bg-black/5 hover:text-gray-900'
                      }`}
                    >
                      <span
                        className={`grid h-7 w-7 place-items-center rounded-md ${
                          it.destructive
                            ? 'bg-red-50 text-red-600'
                            : 'bg-slate-900/5 text-gray-400'
                        }`}
                      >
                        {it.icon}
                      </span>
                      <span className="text-sm font-medium tracking-tight">
                        {it.label}
                      </span>
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
