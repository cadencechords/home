import { useEffect, useState } from "react";

import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Head from "next/head";
import Heading from "../components/Heading";
import Image from "next/image";
import Input from "../components/Input";
import Link from "next/link";
import Navbar from "../components/Navbar";
import PricingOptions from "../components/PricingOptions";
import Section from "../components/Section";
import Subtext from "../components/Subtext";
import screenshotSongsPage from "../public/screenshot_of_songs_page.JPG";

export default function Home() {
	const [signupEmail, setSignupEmail] = useState("");

	return (
		<div>
			<Head>
				<title>Cadence</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<Navbar />

				<Section className="mt-5 md:mt-20 mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-2 gap-8 items-center">
						<div className="col-span-2 lg:col-span-1">
							<Heading className="my-6">Song management for growing teams</Heading>
							<Subtext className="text-xl mb-6">
								Digitize your chord sheets and access them from any device. Easily share and
								collaborate with your band members.
							</Subtext>
							<div className="flex items-center">
								<Input
									placeholder={"Email"}
									onChange={setSignupEmail}
									value={signupEmail}
									className="mr-4 flex-grow"
								/>
								<Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup?email=${signupEmail}`}>
									<Button className="mr-4">Sign up</Button>
								</Link>
							</div>
						</div>
						<div className="relative lg:h-[800px] col-span-2 lg:col-span-1">
							<div className="ml-auto bg-gray-50 rounded-lg w-96 h-full hidden lg:block"></div>
							<div className="shadow-lg rounded-md w-full lg:absolute lg:top-10 lg:mr-3">
								<Image src={screenshotSongsPage} className="rounded-md w-full" />
							</div>
						</div>
					</div>
				</Section>

				<Section id="features" className="mx-auto max-w-7xl px-4">
					<Heading size="md" className="text-center mb-8">
						All-in-one Platform
					</Heading>
					<Features />
				</Section>

				<Section id="pricing" className="mx-auto max-w-7xl px-4">
					<Heading className="mb-6">Pricing plans for teams of all sizes</Heading>
					<Subtext className="text-xl max-w-4xl mb-16">
						Choose an affordable plan that's packed with the best features for running rehearsals
						and performing your songs, saving you time in planning and rehearsals.
					</Subtext>
					<PricingOptions />
				</Section>

				<Section id="contact" className="mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-2 gap-8 grid-">
						<div className="col-span-2 lg:col-span-1 order-1 lg:order-2">
							<Heading size="md">Send us a message</Heading>
							<Subtext className="mt-4">
								If you have any questions or you'd like to learn more before signing up, feel free
								to contact us!
							</Subtext>
						</div>
						<ContactForm className="col-span-2 lg:col-span-1 order-2 lg:order-1" />
					</div>
				</Section>
			</div>
		</div>
	);
}
