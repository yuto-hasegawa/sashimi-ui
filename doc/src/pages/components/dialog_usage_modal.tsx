import React, { useState } from "react";
import { Dialog } from "sashimi-ui/react";

export default function DialogUsageModal() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<button className="button" type="button" onClick={() => setOpen(true)}>
				Click to set open={"{true}"}
			</button>
			<Dialog
				mode="modal"
				open={open}
				onClickAway={() => {
					setOpen(false);
				}}
				onCancel={() => {
					setOpen(false);
				}}
			>
				Click away to close
			</Dialog>
		</div>
	);
}
