import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { useState } from "react";

export default function ContactForm({ className }) {
	const [form, setForm] = useState({});

	function handleFieldChange(field, value) {
		setForm((currentForm) => ({ ...currentForm, [field]: value }));
	}

	return (
		<div className={`lg:mt-20 ${className} `}>
			<div className="grid grid-cols-2 gap-4 mb-4">
				<Input
					placeholder="First name"
					className="col-span-1"
					value={form.first_name}
					onChange={(value) => handleFieldChange("first_name", value)}
				/>
				<Input
					placeholder="Last name"
					className="col-span-1"
					value={form.last_name}
					onChange={(value) => handleFieldChange("last_name", value)}
				/>
				<Input
					placeholder="Email"
					className="col-span-2"
					value={form.email}
					onChange={(value) => handleFieldChange("email", value)}
				/>
				<Textarea
					placeholder="How can we help you?"
					className="col-span-2"
					value={form.description}
					onChange={(value) => handleFieldChange("description", value)}
				/>
			</div>
			<Button className="w-full lg:w-auto">Submit</Button>
		</div>
	);
}
