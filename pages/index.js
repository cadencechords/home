import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className="mx-auto container max-w-4xl px-2">
			<Head>
				<title>Cadence</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<h1 className="text-3xl pb-3 font-semibold mt-20">Welcome to Cadence.</h1>
			<h2 className="text-2xl font-semibold text-blue-700 pb-4">Organize your music.</h2>
			<div className="grid grid-cols-2 gap-36">
				<p className=" text-lg">
					Digitize your chord sheets and access them from any device. Easily share and collaborate
					with your band members.
				</p>
				<code>
					<div className="whitespace-pre text-blue-600">{" D                   G         D"}</div>
					Amazing grace, how sweet the sound <br />
					<div className="whitespace-pre text-blue-600">{"     Bm        E       Asus    A"}</div>
					That saved a wretch like me
				</code>
			</div>
		</div>
	);
}
