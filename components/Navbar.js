import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center my-2">
			<h1 className="font-bold text-lg">Cadence</h1>
			<Link href="https://www.cadencechords.com/login">
				<a className="rounded-md shadow-sm border border-gray-300 bg-white focus:bg-gray-50 hover:bg-gray-50 transition-colors px-3 py-1.5 font-semibold">
					Login
				</a>
			</Link>
		</nav>
	);
}
