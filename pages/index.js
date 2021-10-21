import { useEffect, useState } from "react";

import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import Description from "../components/Description";
import Features from "../components/Features";
import GlobeIcon from "@heroicons/react/outline/GlobeIcon";
import Head from "next/head";
import Heading from "../components/Heading";
import Image from "next/image";
import Input from "../components/Input";
import Link from "next/link";
import MusicNoteIcon from "@heroicons/react/outline/MusicNoteIcon";
import Navbar from "../components/Navbar";
import PricingOptions from "../components/PricingOptions";
import Section from "../components/Section";
import Subtext from "../components/Subtext";
import UserGroupIcon from "@heroicons/react/outline/UserGroupIcon";
import screenshotSongsPage from "../public/screenshot_of_songs_page.JPG";

export default function Home() {
	const [transformationCounter, setTransformationCounter] = useState(0);
	const [iterationCounter, setIterationCounter] = useState(0);
	const [typewriterChords, setTypewriterChords] = useState("  D                 G         D");

	useEffect(() => {
		const typewriterInterval = setInterval(() => {
			if (transformationCounter < TRANSFORMATIONS.length) {
				let transformation = TRANSFORMATIONS[transformationCounter];
				let newChords = transformation.transform(typewriterChords);
				setTypewriterChords(newChords);

				setIterationCounter((currentIteration) => currentIteration + 1);

				if (iterationCounter === transformation.iterations - 1) {
					setTransformationCounter((currentTransformation) => currentTransformation + 1);
					setIterationCounter(0);
				}
			} else {
				clearInterval(typewriterInterval);
			}
		}, 100);

		return () => clearInterval(typewriterInterval);
	}, [iterationCounter]);

	return (
		<div>
			<Head>
				<title>Cadence</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="mx-auto max-w-7xl px-4">
				<Navbar />

				<Section>
					<div className="grid grid-cols-2 gap-8 items-center">
						<div className="col-span-2 lg:col-span-1">
							<Button variant="light" className="text-sm">
								WHAT'S NEW
							</Button>
							<Heading className="my-6">Song management for growing teams</Heading>
							<Subtext className="text-xl mb-6">
								Digitize your chord sheets and access them from any device. Easily share and
								collaborate with your band members.
							</Subtext>
							<div className="flex items-center">
								<Input placeholder={"Email"} className="mr-4 flex-grow" />
								<Button className="mr-4">Sign up</Button>
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

				<Section id="features">
					<Heading size="md" className="text-center mb-8">
						All-in-one Platform
					</Heading>
					<Features />
				</Section>

				<Section id="pricing">
					<Heading className="mb-6">Pricing plans for teams of all sizes</Heading>
					<Subtext className="text-xl max-w-4xl mb-16">
						Choose an affordable plan that's packed with the best features for running rehearsals
						and performing your songs, saving you time in planning and rehearsals.
					</Subtext>
					<PricingOptions />
				</Section>

				<Section id="contact">
					<div className="grid grid-cols-2 gap-8 grid-">
						<Heading className="col-span-2 lg:col-span-1 order-1 lg:order-2" size="md">
							Send us a message
						</Heading>
						<ContactForm className="col-span-2 lg:col-span-1 order-2 lg:order-1" />
					</div>
				</Section>
			</div>
			{/* <div className="mx-auto container max-w-6xl px-2 mb-10">
				<h1 className="text-3xl pb-3 font-semibold mt-20 mx-auto container max-6xl px-2">
					Welcome to Cadence.
				</h1>
				<h2 className="text-2xl font-semibold text-blue-700 pb-4">Organize your music.</h2>
				<div className="grid grid-cols-2 md:gap-36">
					<p className="text-xl md:text-lg col-span-2 md:col-span-1">
						Digitize your chord sheets and access them from any device. Easily share and collaborate
						with your band members.
					</p>
					<code className="col-span-2 md:col-span-1 hidden md:block">
						<span className="whitespace-pre text-blue-600 font-semibold typewriter">
							{typewriterChords}
						</span>
						<br />
						Amazing grace, how sweet the sound <br />
						<div className="whitespace-pre text-blue-600 font-semibold">
							{"     Bm        E       Asus    A"}
						</div>
						That saved a wretch like me
					</code>
				</div>
				<div className="mt-10 md:mt-20 py-10 px-2 grid grid-cols-3 gap-8">
					<div className="col-span-3 md:col-span-1">
						<MusicNoteIcon className="h-8 w-8 mb-2 text-blue-600" />
						<h3 className="font-semibold text-lg text-gray-800">Designed for musicians</h3>
						<Description>
							Cadence comes with all tools a musician needs: built-in song editor, set presenter and
							PDF generator!
						</Description>
					</div>
					<div className="col-span-3 md:col-span-1">
						<GlobeIcon className="h-8 w-8 mb-2 text-blue-600" />
						<h3 className="font-semibold text-lg text-gray-800 mb-3">Accessible from any device</h3>
						<Description>
							Access your lyrics and chords right from any browser. No need for backups and
							transferring between devices!
						</Description>
					</div>
					<div className="col-span-3 md:col-span-1">
						<UserGroupIcon className="h-8 w-8 mb-2 text-blue-600" />
						<h3 className="font-semibold text-lg text-gray-800 mb-3">Built for teams</h3>
						<Description>
							Musicians are often a part of more than one team. Easily switch between your teams and
							keep your resources de-cluttered.
						</Description>
					</div>
				</div>
				<div className="mt-5 md:mt-20">
					<h2 className="text-center text-2xl md:text-5xl font-semibold mb-4 md:mb-8">
						Sign up today for <span className="text-blue-700 underline">free</span>!
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<p className="text-lg md:text-2xl text-gray-800 col-span-2 md:col-span-1">
							No credit cards, no subscriptions, 100% free!
						</p>
						<div className="flex justify-center col-span-2 md:col-span-1">
							<Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
								<a className="w-full md:w-52 md:text-xl text-base flex items-center justify-center flex-grow-0 bg-blue-700 text-white rounded-md h-10 md:h-14 hover:bg-blue-800 focus:bg-blue-800 transition-colors shadow-md">
									Sign up
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}

const TRANSFORMATIONS = [
	wait(15),
	backspace(10),
	wait(5),
	append("/"),
	append("D"),
	wait(2),
	append(" ", 8),
	append("D"),
	wait(20),
	backspace(22),
	wait(2),
	append("D"),
	wait(3),
	append("7"),
	append(" ", 9),
	wait(1),
	append("G"),
	append(" ", 8),
	wait(2),
	append("D"),
	wait(20),
	backspace(30),
	wait(4),
	append("B"),
	append("m"),
	append(" ", 6),
	wait(2),
	append("G"),
	wait(2),
	append(" ", 11),
	wait(3),
	append("D"),
	append(" ", 8),
	wait(2),
	append("A"),
	wait(1),
	append("/"),
	append("C"),
	wait(1),
	append("#"),
];

function wait(iterationsToWait) {
	return {
		iterations: iterationsToWait,
		transform: function (text) {
			return text;
		},
	};
}

function append(textToAppend, iterationsToAppend = 1) {
	return {
		iterations: iterationsToAppend,
		transform: function (text) {
			return text + textToAppend;
		},
	};
}

function backspace(iterationsToBackspace) {
	return {
		iterations: iterationsToBackspace,
		transform: function (text) {
			return text.substring(0, text.length - 1);
		},
	};
}
