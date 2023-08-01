import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const menuItems = [
    {
        name: "products",
        link: "#",
    },
    {
        name: "dao",
        link: "#"
    },
    {
        name: "build",
        link: "#"
    },
    {
        name: "docs",
        link: "#"
    }
]

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-black border-white border-solid border-[1px] rounded-[100px] border-opacity-10 bg-opacity-50">
      <Image
        width={120}
        height={24}
        src={"/logo.svg"}
        alt={"logo of the site"}
      />
      <nav className="flex items-center">
        <ul className="flex items-center justify-between gap-10 text-base text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="relative px-2 pb-2 transition-all border-b-2 border-transparent hover:border-white"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href={'/auth/signin'}>
        <Button text="launch app" />
      </Link>
    </header>
  );
}

export default Header
