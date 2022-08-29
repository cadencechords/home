import { useEffect } from 'react';

import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';
import Heading from '../components/Heading';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import PricingOptions from '../components/PricingOptions';
import Section from '../components/Section';
import Subtext from '../components/Subtext';
import Script from 'next/script';
import HeroImages from '../components/HeroImages';
import Rellax from 'rellax';
import SyncSection from '../components/SyncSection';
import FeaturesSection from '../components/FeaturesSection';
import DescriptionSection from '../components/DescriptionSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    window?.Beacon('init', '20725009-764e-4e99-ae85-d6b7fa9eb452');
    var rellax = new Rellax('.rellax');
  }, []);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`,
        }}
      />
      <Head>
        <title>Cadence</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />

        <Section className="px-8 mx-auto mt-5 md:mt-20 max-w-screen-2xl">
          <div className="flex flex-wrap items-center">
            <div className="w-full mb-8 lg:w-1/2 md:pr-8 md:mb-0">
              <Heading className="md:leading-tight">
                Song Management for Musicians like You
              </Heading>
              <Subtext className="mt-6 text-xl">
                Cadence is a music management platform that provides everything
                your band needs to efficiently play together - taking your songs
                from practice to performance.
              </Subtext>
              <div className="flex items-center mt-8">
                <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
                  <a className="w-full mr-3 lg:w-48">
                    <Button full={true}>Sign up for free</Button>
                  </a>
                </Link>
                <Link href="https://demo.cadencechords.com">
                  <a className="w-full ml-3 lg:w-48">
                    <Button variant="light" full={true}>
                      Try the demo
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <HeroImages />
          </div>
        </Section>

        <Section className="px-8 mx-auto my-20 max-w-screen-2xl">
          <DescriptionSection />
        </Section>

        <Section className="px-8 mx-auto max-w-screen-2xl">
          <FeaturesSection />
        </Section>

        <Section className="px-8 mx-auto mt-20 max-w-screen-2xl">
          <SyncSection />
        </Section>

        <Section id="pricing" className="z-30 px-8 mx-auto max-w-screen-2xl">
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

        {/* <Section id="contact" className="px-8 mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-8 grid-">
            <div className="order-1 col-span-2 lg:col-span-1 lg:order-2">
              <Heading size="md">Send us a message</Heading>
              <Subtext className="mt-4">
                If you have any questions or you'd like to learn more before
                signing up, feel free to contact us!
              </Subtext>
            </div>
            <ContactForm className="order-2 col-span-2 lg:col-span-1 lg:order-1" />
          </div>
        </Section> */}
      </div>
      <Section>
        <Footer />
      </Section>
    </div>
  );
}
