import { useState } from "react";
import {
	Fieldset,
	HelperText,
	Input,
	Label,
	Legend,
	Select,
	Textarea,
} from "sashimi-ui/react";

export default function FieldsetUsage() {
	const [name, setName] = useState("Taro Tanaka");
	const [message, setMessage] = useState("");
	const [neta, setNeta] = useState("");
	const [drink, setDrink] = useState("");
	const [sabi, setSabi] = useState(false);

	return (
		<form
			className="card"
			style={{ display: "flex", flexDirection: "column", gap: 32, width: 480 }}
		>
			<Fieldset error={name ? undefined : "name is required"}>
				<Label htmlFor="text">Name</Label>
				<Input
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<HelperText>
					Set this field empty and an error message will be shown
				</HelperText>
			</Fieldset>

			<Fieldset
				error={message.length <= 10 ? undefined : "message is too long"}
			>
				<Label htmlFor="text">Message</Label>
				<Textarea
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<HelperText>{message.length}/10</HelperText>
			</Fieldset>

			<Fieldset
				error={neta === "pudding" ? "pudding is not a neta" : undefined}
			>
				<Label htmlFor="neta">Neta</Label>
				<Select
					id={"neta"}
					name="neta"
					value={neta}
					onChange={(e) => setNeta(e.target.value)}
				>
					<option value="">Choose a "neta"</option>
					<option value="hamachi">Hamachi</option>
					<option value="samma">Samma</option>
					<option value="pudding">Pudding</option>
				</Select>
				<HelperText>
					Select a wrong option and an error message will be shown
				</HelperText>
			</Fieldset>

			<Fieldset error={drink === "milk" ? "error" : undefined}>
				<Legend>This is a {"<legend/>"} element</Legend>
				<Label>
					<Input
						className="radio"
						type="radio"
						name="drink"
						value="tea"
						checked={drink === "tea"}
						onChange={(e) => e.target.checked && setDrink("tea")}
					/>
					Tea is the best match with sashimi.
				</Label>
				<Label>
					<Input
						className="radio"
						type="radio"
						name="drink"
						value="beer"
						checked={drink === "beer"}
						onChange={(e) => e.target.checked && setDrink("beer")}
					/>
					Beer is also great combination.
				</Label>
				<Label>
					<Input
						className="radio"
						type="radio"
						name="drink"
						value="milk"
						checked={drink === "milk"}
						onChange={(e) => e.target.checked && setDrink("milk")}
					/>
					Milk...are you sure?
				</Label>
			</Fieldset>

			<Fieldset disabled>
				<Legend>Disabled checkboxes</Legend>
				<Label>
					<Input className="checkbox" type="checkbox" defaultChecked />
					{"<fieldset/>"} propagates the disabled attribute
				</Label>
				<Label>
					<Input className="checkbox" type="checkbox" />
					to its children by default.
				</Label>
			</Fieldset>

			<Fieldset error={sabi ? undefined : "error"}>
				<Label>
					Would you like wasabi in sushi?
					<Input
						className="switch"
						type="checkbox"
						name="wasabi"
						checked={sabi}
						onChange={(e) => setSabi(e.target.checked)}
					/>
				</Label>
			</Fieldset>

			<button type="submit" className="button">
				Submit
			</button>
		</form>
	);
}
