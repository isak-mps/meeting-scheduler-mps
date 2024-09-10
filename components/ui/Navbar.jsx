import Link from "next/link";
import Image from "next/image";
import Logo from "./MPS-LOGO.png";
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="MPS-LOGO"
        width={780}
        placeholder="blur"
        quality={550}
      />

      <h1>MPS&apos;s MPS-Scheduling-App</h1>
      <Link href="/">Home</Link>
      <Link href="/Contact Us">Contact</Link>
      <Link href="/About Us">About</Link>
    </nav>
  );
}