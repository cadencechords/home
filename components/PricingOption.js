import Button from "./Button";
import CheckIcon from "@heroicons/react/outline/CheckIcon";
import Link from "next/link";
import Subtext from "./Subtext";

export default function PricingOption({ plan, buttonVariant }) {
	return (
		<div className="rounded-lg border-gray-300 hover:border-blue-600 border-2 transition-colors p-6 flex flex-col col-span-2 md:col-span-1">
			<div className="text-2xl font-semibold mb-6">{plan.name}</div>
			<div className="mb-6">
				<span className="text-4xl font-bold">{plan.price}</span>
				<span className="text-2xl font-semibold">{plan.recurrence}</span>
			</div>
			<Subtext className="text-lg mb-6">{plan.description}</Subtext>
			<div className="flex-grow text-gray-600 mb-6">
				{plan.features.map((feature) => (
					<div className="flex mb-4 last:mb-0 font-medium">
						<CheckIcon className="w-6 h-6 text-green-500 mr-2" />
						{feature}
					</div>
				))}
			</div>
			<Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
				<Button variant={buttonVariant} full>
					Get started
				</Button>
			</Link>
		</div>
	);
}
