import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="text-white space-y-4 flex flex-col h-full bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          Genius
        </Link>
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default Sidebar;
