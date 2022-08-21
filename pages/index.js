import { useEffect, useState } from 'react';

import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Features from '../components/Features';
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
import TeamFeaturesPreview from '../components/TeamFeaturesPreview';
import SyncSection from '../components/SyncSection';

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

        <Section className="mt-5 md:mt-20 mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
              <Heading className="my-6">
                Song management for growing teams
              </Heading>
              <Subtext className="text-xl mb-6">
                Digitize your chord sheets and access them from any device.
                Easily share and collaborate with your band members.
              </Subtext>
              <div className="flex items-center">
                <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
                  <Button className="mr-4" full={true}>
                    Sign up for free
                  </Button>
                </Link>
                <Link href="https://demo.cadencechords.com">
                  <Button variant="light" full={true} className="ml-4">
                    Try the demo
                  </Button>
                </Link>
              </div>
            </div>
            <HeroImages />
          </div>
        </Section>
        {/* 
        <Section className="mx-auto max-w-7xl px-4">
          <FeaturesPreview />
        </Section> */}

        <Section className="mx-auto max-w-7xl px-4 mt-20">
          <TeamFeaturesPreview />
        </Section>

        <Section className="mx-auto max-w-7xl px-4 mt-20">
          <SyncSection />
        </Section>

        <div className="bg-gray-50">
          <Section id="features" className="mx-auto max-w-7xl px-4 py-10">
            <Heading size="md" className="text-center mb-8">
              All-in-one Platform
            </Heading>
            <Features />
          </Section>
        </div>

        <Section id="pricing" className="mx-auto max-w-7xl px-4">
          <Heading className="mb-6">
            Pricing plans for teams of all sizes
          </Heading>
          <Subtext className="text-xl max-w-4xl mb-16">
            Choose an affordable plan that's packed with the best features for
            running rehearsals and performing your songs, saving you time in
            planning and rehearsals.
          </Subtext>
          <PricingOptions />
        </Section>

        <Section id="contact" className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 grid-">
            <div className="col-span-2 lg:col-span-1 order-1 lg:order-2">
              <Heading size="md">Send us a message</Heading>
              <Subtext className="mt-4">
                If you have any questions or you'd like to learn more before
                signing up, feel free to contact us!
              </Subtext>
            </div>
            <ContactForm className="col-span-2 lg:col-span-1 order-2 lg:order-1" />
          </div>
        </Section>
      </div>
    </div>
  );
}
