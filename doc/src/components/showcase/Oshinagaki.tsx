import clsx from "clsx";
import type React from "react";
import { useState } from "react";

type Category = "TUNA" | "HIKARIMONO" | "SHELLFISH" | "MAKIMONO";

interface Props {
	style?: React.CSSProperties;
}

export default function Oshinagaki({ style }: Props) {
	const [selected, setSelected] = useState<Category>("TUNA");

	return (
		<div
			className="card wrapper"
			style={{
				...style,
				gridTemplateColumns: "140px 1fr",
				display: "grid",
				padding: 0,
			}}
		>
			<div
				style={{
					borderRight: "1px solid var(--sui-color-outline-primary)",
					padding: 12,
				}}
			>
				<p
					className="label"
					style={{ fontWeight: 600, fontSize: 12, paddingLeft: 12 }}
				>
					🍣 SUSHI
				</p>
				<ul style={{ listStyle: "none", padding: 0 }}>
					<li>
						<button
							type="button"
							className={clsx("menu-item", selected === "TUNA" && "active")}
							onClick={() => setSelected("TUNA")}
						>
							Tuna
						</button>
					</li>
					<li>
						<button
							type="button"
							className={clsx(
								"menu-item",
								selected === "HIKARIMONO" && "active",
							)}
							onClick={() => setSelected("HIKARIMONO")}
						>
							Hikarimono
						</button>
					</li>
					<li>
						<button
							type="button"
							className={clsx(
								"menu-item",
								selected === "SHELLFISH" && "active",
							)}
							onClick={() => setSelected("SHELLFISH")}
						>
							Shellfish
						</button>
					</li>
					<li>
						<button
							type="button"
							className={clsx("menu-item", selected === "MAKIMONO" && "active")}
							onClick={() => setSelected("MAKIMONO")}
						>
							Makimono
						</button>
					</li>
				</ul>
			</div>

			<div
				style={{
					padding: 16,
					display: "flex",
					flexDirection: "column",
					gap: 8,
				}}
			>
				<p style={{ fontSize: 24, margin: 0, fontWeight: 600 }}>
					{CONTENTS[selected].title}
				</p>
				<p style={{ flex: 1, margin: 0 }}>{CONTENTS[selected].description}</p>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						flexWrap: "wrap",
						marginBottom: 16,
						gap: 8,
					}}
				>
					<button type="button" className="button tertiary">
						<svg className="icon">
							<title>Cart</title>
							<use href={`${import.meta.env.BASE_URL}/cart.svg#root`} />
						</svg>
						Add to Cart
					</button>
					<button type="button" className="button primary">
						<svg className="icon">
							<title>Payment</title>
							<use href={`${import.meta.env.BASE_URL}/payment.svg`} />
						</svg>
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
}

const CONTENTS: Record<
	Category,
	{ title: string; description: React.ReactElement }
> = {
	TUNA: {
		title: "Tuna",
		description: (
			<>
				Tuna is a popular sushi topping known for its rich flavor and smooth
				texture. It is often served as lean{" "}
				<a
					className="link"
					href="https://www.youtube.com/channel/UCWV9E1l5YItrPEAWHoNmieQ"
					target="_blank"
					rel="noopener noreferrer"
				>
					akami
					<svg className="icon">
						<title>Open in new tab</title>
						<use href={`${import.meta.env.BASE_URL}/open_in_new.svg`} />
					</svg>
				</a>
				,{" "}
				<a
					className="link"
					href="https://www.youtube.com/@tororo_vtuber"
					target="_blank"
					rel="noopener noreferrer"
				>
					toro
					<svg className="icon">
						<title>Open in new tab</title>
						<use href={`${import.meta.env.BASE_URL}/open_in_new.svg`} />
					</svg>
				</a>
				.
			</>
		),
	},
	HIKARIMONO: {
		title: "Hikarimono",
		description: (
			<>
				Silver-skinned fish with a bright sheen and tangy flavor, often served
				with vinegar.
			</>
		),
	},
	SHELLFISH: {
		title: "Shellfish",
		description: (
			<>
				Shellfish offer a firm texture and natural sweetness, served fresh or
				lightly boiled.
			</>
		),
	},
	MAKIMONO: {
		title: "Makimono",
		description: (
			<>
				Rolled sushi wrapped in seaweed, combining rice and fillings into
				bite-sized pieces.
			</>
		),
	},
};
