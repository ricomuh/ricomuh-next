import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ricomuh",
      icon: faGithub,
      className: "text-gray-200 hover:text-gray-400 duration-200",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ricomuh/",
      icon: faLinkedin,
      className: "text-gray-200 hover:text-blue-500 duration-200",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ricomuh_/",
      icon: faInstagram,
      className: "text-gray-200 hover:text-pink-500 duration-200",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4">
      {/* hero */}
      <section className="flex justify-between items-center">
        <div className="rounded-full p-0.5 bg-gradient-to-tl from-primary-400 via-gray-400 to-indigo-400">
          <Avatar className="w-52 h-52">
            <AvatarImage src="/media/me.png" alt="Profile Picture" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-8 relative">
          <h1 className="text-4xl font-medium text-gray-200">
            Hi, I&apos;m{" "}
            <span
              className="text-primary-400 font-bold"
              // glowing effect
              style={{
                textShadow: "0 0 1px #56abaa, 0 0 1px #56abaa, 0 0 3px #56abaa",
              }}
            >
              Rico Muhammad
            </span>
          </h1>
          <p className="relative text-lg text-gray-300 mt-2 max-w-2xl">
            Programmer & CO Founder of{" "}
            <Link
              className="text-orange-500 font-bold hover:text-orange-400 duration-200 underline"
              target="_blank"
              href="https://leolitgames.com"
            >
              Leolit Games
            </Link>
          </p>
          <div className="absolute right-10 top-16 translate-x-full">
            <Image src="/media/arrow.svg" alt="Arrow" width={47} height={34} />
            <p className="text-gray-400 origin-top -rotate-12">Check it out!</p>
          </div>
          {/* social links */}
          <div className="flex mt-4 space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className={`${link.className} hover:-translate-y-1`}
              >
                <FontAwesomeIcon icon={link.icon} size="xl" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* about me */}
      <section className="mt-16 text-gray-300">
        <h2 className="text-3xl font-bold mb-4">Wassup!</h2>
        <p className="mb-4">
          I&apos;m a generalist person who lives by making web and game
          projects. I&apos;ve done all sorts of stuff—casual mobile games, VR/AR
          apps, NFT websites, you name it!
        </p>
        <p className="mb-4">
          Now, I&apos;m taking part in the company I co-founded,{" "}
          <Link
            className="text-orange-500 font-bold hover:text-orange-400 duration-200 underline"
            target="_blank"
            href="https://leolitgames.com"
          >
            Leolit Games
          </Link>
          . We&apos;ve launched several games on the Play Store, and we&apos;re
          excitedly working on a new project that will soon be released on
          Steam. We also do outsourcing for different projects, so if you want
          to make your dream game happen,{" "}
          <Link
            className="text-primary-400 font-semibold hover:text-primary-300 duration-200 underline"
            href="/contact"
          >
            hit me up!
          </Link>
        </p>
      </section>
    </div>
  );
}
