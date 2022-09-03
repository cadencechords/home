import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/icon.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const currentRoute = router.asPath;

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
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="container flex items-center justify-between min-w-full px-3">
          <Image src={icon} alt="Cadence icon" height={60} width={45} />
          <div className="hidden md:block">
            <Link href="/#features">
              <Button
                variant="text"
                color={currentRoute === '/#features' ? 'blue' : 'gray'}
                className="mr-2"
              >
                Features
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button
                variant="text"
                color={currentRoute === '/#pricing' ? 'blue' : 'gray'}
                className="mr-2"
              >
                Pricing
              </Button>
            </Link>
          </div>
          <div>
            <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}`}>
              <a>
                <Button variant="text" color="gray" className="mr-4">
                  Login
                </Button>
              </a>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
              <a>
                <Button variant="solid" color="blue">
                  Sign up
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
