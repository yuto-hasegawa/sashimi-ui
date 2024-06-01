import React, { useState } from "react";
import { Dialog } from "sashimi-ui/react";

export default function DialogUsagePopover() {
	const buttonRef = React.useRef<HTMLButtonElement>(null);
	const [open, setOpen] = useState(false);
	return (
		<div>
			<button
				ref={buttonRef}
				className="button"
				type="button"
				onClick={() => setOpen(true)}
			>
				Menu
			</button>
			<Dialog
				mode="popover"
				open={open}
				anchor={buttonRef.current as HTMLButtonElement}
				onClickAway={() => {
					setOpen(false);
				}}
			>
				<ul style={{ listStyle: "none", padding: 0 }}>
					<li>
						<button type="button" className="menu-item">
							Buri
						</button>
					</li>
					<li>
						<button type="button" className="menu-item">
							Kampachi
						</button>
					</li>
					<li>
						<button type="button" className="menu-item">
							Iwashi
						</button>
					</li>
				</ul>
			</Dialog>
		</div>
	);
}
