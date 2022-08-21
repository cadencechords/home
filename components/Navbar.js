import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/icon.png';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    let scrollListener = function () {
      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <nav
      className={
        `sticky flex items-center justify-center top-0 z-50 backdrop-blur-lg bg-white bg-opacity-70 transition-all h-20 ` +
        ` ${isScrolled ? 'border-b h-16' : ''}`
      }
    >
      <div className="mx-auto max-w-7xl px-4 w-full">
        <div className="flex justify-between items-center container px-3 min-w-full">
          <Image src={icon} alt="Cadence icon" height={60} width={45} />
          <div className="hidden md:block">
            <Link href="#features">
              <Button variant="text" color="gray" className="mr-2">
                Features
              </Button>
            </Link>
            <Link href="#pricing">
              <Button variant="text" color="gray" className="mr-2">
                Pricing
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="text" color="gray">
                Contact
              </Button>
            </Link>
          </div>
          <div>
            <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}`}>
              <Button variant="text" color="gray" className="mr-4">
                Login
              </Button>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
              <Button variant="solid" color="blue">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
