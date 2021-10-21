import PricingOption from "./PricingOption";

export default function PricingOptions() {
	return (
		<div className="grid grid-cols-2 gap-8">
			<PricingOption plan={starter} buttonVariant="light" />
			<PricingOption plan={pro} buttonVariant="solid" />
		</div>
	);
}

const starter = {
	name: "Starter Plan",
	price: "Free",
	recurrence: "",
	description: "The essentials to make your life easier.",
	features: ["Multiple team members", "Songs, binders and sets", "Metronome"],
};

const pro = {
	name: "Pro Plan",
	price: "$20",
	recurrence: "/month",
	features: [
		"Multiple team members",
		"Songs, binders and sets",
		"Metronome",
		"Calendar and notifications",
		"Sticky notes",
	],
	description: "The full tool suite to take planning to the next level.",
};
