import Image from "next/image";
import Button from "./Button";

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
      {/* <div className="absolute inset-0 bg-black rounded-[100px] opacity-10 backdrop-blur" /> */}
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
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button text="launch app"/>
    </header>
  );
}

export default Header
