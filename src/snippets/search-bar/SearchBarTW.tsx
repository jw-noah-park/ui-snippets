import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBarTW() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="grid min-h-screen place-items-center text-center">
      <div className="relative h-[100px] w-[300px]">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className={[
            'peer absolute inset-0 m-auto h-[50px] w-[50px] rounded-[30px] border-0 outline-none',
            'px-20 pl-5 font-bold tracking-wider text-black',
            'shadow-[0_0_25px_0_#ff8c69,0_20px_25px_0_#ffcc80]',
            'z-[5] opacity-0 transition-all duration-[1000ms]',
            'placeholder:font-bold placeholder:text-black placeholder:opacity-50',
            'cursor-pointer focus:w-[300px] focus:cursor-text focus:opacity-100',
          ].join(' ')}
        />

        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            inputRef.current?.blur();
          }}
          className={[
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'z-[4] flex h-[50px] w-[50px] items-center justify-center rounded-full text-[1rem] text-black',
            'shadow-[0_0_25px_0_#ff8c00]',
            'transition-all duration-[1000ms]',

            'peer-focus:left-[calc(50%+125px)]',
          ].join(' ')}
        >
          <span className="icon-open flex">
            <FiSearch />
          </span>
        </button>
      </div>
    </div>
  );
}
