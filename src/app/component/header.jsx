import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header w-full bg-inherit h-16">
      <div className="flex flex-row space-x-6 mr-20 ml-20">
        <div className="logo w-1/3">
          <Link href="/">
            <Image
              src="https://cdn.dribbble.com/users/111709/screenshots/2032133/media/94bcf225589742d4ffed61a8295517ef.jpg?resize=400x300&vertical=center"
              alt="Task logo"
              className="w-[55px] h-[55px] m-1"
              width="50"
              height="850"
            />
          </Link>
        </div>
        <div className="header-link w-2/3 flex flex-row-reverse  items-center gap-40">
          <Link href="/">Sign In</Link>
          <Link href="/">Posts</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;