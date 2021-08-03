import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center my-2 mx-auto container max-w-4xl px-2">
			<Image src={logo} alt="Cadence logo" width={150} height={25} />
			<Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/login`}>
				<a className="rounded-md shadow-sm border border-gray-300 bg-white focus:bg-gray-50 hover:bg-gray-50 transition-colors px-3 py-1.5 font-semibold">
					Login
				</a>
			</Link>
		</nav>
	);
}
