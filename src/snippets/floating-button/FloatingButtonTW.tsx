export default function FloatingButtonsTW() {
  const floatingButtonStyle = `bg-transparent text-[#5D8AA8] border-2 border-current px-4 py-2 text-base rounded-full ml-2 font-normal
                         transition duration-150 ease-linear hover:text-[#FFBF00] hover:border-[#FFBF00]
                         hover:shadow-[0_0.5em_0.5em_-0.4em_#FFBF00] hover:-translate-y-1 cursor-pointer`;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className=" bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center">
          <button className={floatingButtonStyle}>Tailwind</button>
          <button className={floatingButtonStyle}>Primary</button>
          <button className={floatingButtonStyle}>Secondary</button>
        </div>
      </div>
    </div>
  );
}
