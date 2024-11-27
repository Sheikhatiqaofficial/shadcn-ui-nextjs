import Link from "next/link";
import { Button } from "@/components/ui/button"; 

interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Header({ font }: HeaderProps) {
  return (
    <header className={`${font.className} bg-[#1A1A1A] py-4 shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-[#F98585]">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Button
              variant="link"
              className="text-[#F98585] text-lg font-medium transition duration-300 hover:text-white"
            >
              <Link href="/work">Work</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className="text-[#F98585] text-lg font-medium transition duration-300 hover:text-white"
            >
              <Link href="/about">About</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className="text-[#F98585] text-lg font-medium transition duration-300 hover:text-white"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className="text-[#F98585] text-lg font-medium transition duration-300 hover:text-white"
            >
              <Link href="/">Home</Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
