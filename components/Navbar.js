import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import icon from "../public/icon.png";

export default function Navbar() {
	return (
		<nav>
			<div className="flex bg-white justify-between items-center container p-3 border-b min-w-full">
				<Image src={icon} alt="Cadence icon" height={60} width={60} />
				<div>
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
		</nav>
	);
}
