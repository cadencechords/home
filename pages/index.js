import { useEffect } from 'react';

import Button from '../components/Button';
import Head from 'next/head';
import Heading from '../components/Heading';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import PricingOptions from '../components/PricingOptions';
import Section from '../components/Section';
import Subtext from '../components/Subtext';
import HeroImages from '../components/HeroImages';
import Rellax from 'rellax';
import SyncSection from '../components/SyncSection';
import FeaturesSection from '../components/FeaturesSection';
import DescriptionSection from '../components/DescriptionSection';
import Footer from '../components/Footer';
import LogoMetaImage from '../public/logo_meta.png';

export default function Home() {
  useEffect(() => {
    var rellax = new Rellax('.rellax');
  }, []);

  return (
    <div>
      <Head>
        <title>Mezzo | Song Mangement for Musicians</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mezzo is a music management platform that helps you and your band organize, collaborate and perform with confidence."
        />
        <meta
          name="twitter:title"
          content="Mezzo | Song Mangement for Musicians"
        />
        <meta
          name="twitter:description"
          content="Mezzo is a music management platform that helps you and your band organize, collaborate and perform with confidence."
        />
        <meta name="twitter:url" content={LogoMetaImage.src} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="Mezzo | Song Mangement for Musicians"
        />
        <meta
          property="og:description"
          content="Mezzo is a music management platform that helps you and your band organize, collaborate and perform with confidence."
        />
        <meta property="og:image" content={LogoMetaImage.src} />
        <meta property="og:url" content="https://mezzochords.com" />
      </Head>
      <div className="">
        <Navbar />

        <Section className="max-w-screen-xl px-4 mx-auto mt-5 md:px-8 md:mt-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full mb-8 lg:w-1/2 md:pr-8 md:mb-0">
              <Heading className="md:leading-tight">
                Song Management for Musicians like You
              </Heading>
              <Subtext className="mt-6 text-xl">
                Mezzo is a music management platform that provides everything
                your band needs to efficiently play together - taking your songs
                from practice to performance.
              </Subtext>
              <div className="flex items-center mt-8">
                <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
                  <a className="w-full mr-3 lg:w-48 signup">
                    <Button full={true}>Sign up for free</Button>
                  </a>
                </Link>
              </div>
            </div>
            <HeroImages />
          </div>
        </Section>

        <Section className="max-w-screen-xl px-4 mx-auto my-20 md:px-8">
          <DescriptionSection />
        </Section>

        <Section className="max-w-screen-xl px-4 mx-auto md:px-8">
          <FeaturesSection />
        </Section>

        <Section className="max-w-screen-xl px-4 mx-auto mt-20 md:px-8">
          <SyncSection />
        </Section>

        <Section
          id="pricing"
          className="z-30 max-w-screen-xl px-4 mx-auto md:px-8"
        >
          <Heading className="mb-6">
            Pricing plans for teams of all sizes
          </Heading>
          <Subtext className="max-w-4xl mb-16 text-xl">
            Choose an affordable plan that's packed with the best features for
            running rehearsals and performing your songs, saving you time in
            planning and rehearsals.
          </Subtext>
          <PricingOptions />
        </Section>
      </div>
      <Section className="max-w-screen-xl px-4 mx-auto md:px-8">
        <Footer />
      </Section>
    </div>
  );
}
