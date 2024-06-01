"use client";

import React, {
	useEffect,
	useRef,
	useState,
	useImperativeHandle,
	useCallback,
} from "react";
import { createPortal } from "react-dom";

export type DialogProps = ModalDialogProps | PopoverDialogProps;

interface ModalDialogProps {
	mode: "modal";
	onClickAway?: () => void;
	onCancel?: () => void;
}
interface PopoverDialogProps {
	mode: "popover";
	anchor: HTMLElement;
	onClickAway?: () => void;
}

const Dialog = React.forwardRef<
	HTMLDialogElement,
	DialogProps & JSX.IntrinsicElements["dialog"]
>((props, ref) => {
	switch (props.mode) {
		case "modal":
			return <ModalDialog {...props} ref={ref} />;
		case "popover":
			return <PopoverDialog {...props} ref={ref} />;
	}
});

Dialog.displayName = "Dialog";

/* Modal */
const ModalDialog = React.forwardRef<
	HTMLDialogElement,
	ModalDialogProps & JSX.IntrinsicElements["dialog"]
>(
	(
		{ onClickAway, onCancel, children, open, className, style, ...rest },
		ref,
	) => {
		const innerRef = useRef<HTMLDialogElement>(null);
		const [isReady, setIsReady] = useState(false);

		useImperativeHandle(ref, () => innerRef.current as HTMLDialogElement);

		useEffect(() => {
			// workaround:
			// make this comopnent rendered only on client side
			// and also avoid SSR mismatch
			setIsReady(true);
		}, []);

		useEffect(() => {
			if (!innerRef.current || !isReady) return;
			if (open) {
				innerRef.current.showModal();
			} else {
				innerRef.current.close();
			}
		}, [open, isReady]);

		useEffect(() => {
			if (!innerRef.current || !isReady) return;
			const handleCancel = (e: Event) => {
				e.preventDefault();
				onCancel?.();
			};
			innerRef.current.addEventListener("cancel", handleCancel);
			return () => {
				innerRef.current?.removeEventListener("cancel", handleCancel);
			};
		}, [onCancel, isReady]);

		const onClick: React.MouseEventHandler<HTMLDialogElement> = useCallback(
			(e) => {
				if (!innerRef.current) return;
				const { left, top, width, height } =
					innerRef.current.getBoundingClientRect();
				const { clientX: x, clientY: y } = e.nativeEvent;
				if (left <= x && x <= left + width && top <= y && y <= top + height) {
					// noop
				} else {
					onClickAway?.();
				}
			},
			[onClickAway],
		);

		if (!isReady) return null;

		return (
			<>
				{createPortal(
					<dialog
						{...rest}
						ref={innerRef}
						className={["dialog", "modal", className].filter(Boolean).join(" ")}
						onClick={onClick}
					>
						{open && children}
					</dialog>,
					document.body,
				)}
			</>
		);
	},
);

ModalDialog.displayName = "ModalDialog";

/* Popover */
const PopoverDialog = React.forwardRef<
	HTMLDialogElement,
	PopoverDialogProps & JSX.IntrinsicElements["dialog"]
>(({ anchor, onClickAway, children, open, className, style, ...rest }, ref) => {
	const innerRef = useRef<HTMLDialogElement>(null);
	const [isReady, setIsReady] = useState(false);
	const [x, setX] = useState<number | null>(null);
	const [y, setY] = useState<number | null>(null);
	const [xAnchor, setXAnchor] = useState<"left" | "right">("left");
	const [yAnchor, setYAnchor] = useState<"top" | "bottom">("top");

	useImperativeHandle(ref, () => innerRef.current as HTMLDialogElement);

	useEffect(() => {
		// workaround:
		// make this comopnent rendered only on client side
		// and also avoid SSR mismatch
		setIsReady(true);
	}, []);

	useEffect(() => {
		if (!innerRef.current || !isReady) return;

		if (open) {
			const { left, right, top, bottom, width, height } =
				anchor.getBoundingClientRect();
			const posX =
				(left + right) / 2 > window.innerWidth / 2 ? "right" : "left";
			const posY =
				(top + bottom) / 2 > window.innerHeight / 2 ? "bottom" : "top";
			setX(posX === "right" ? right : left);
			setY(posY === "top" ? bottom : top);
			setXAnchor(posX === "right" ? "right" : "left");
			setYAnchor(posY === "bottom" ? "bottom" : "top");

			innerRef.current.show();
			innerRef.current.focus();
		} else {
			innerRef.current.close();
		}
	}, [open, anchor, isReady]);

	useEffect(() => {
		if (!open) return;
		const clickAwayHandler = () => {
			if (innerRef.current?.contains(document.activeElement)) {
				return; // ignore click inside dialog
			}
			onClickAway?.();
		};
		// workaround:
		// if we add an event listener immediately, it will be triggered by the opening click
		setTimeout(() => {
			document.addEventListener("click", clickAwayHandler);
		}, 0);
		return () => {
			document.removeEventListener("click", clickAwayHandler);
		};
	}, [open, onClickAway]);

	if (!isReady) return null;

	return (
		<>
			{createPortal(
				<dialog
					{...rest}
					ref={innerRef}
					className={[
						"dialog",
						"popover",
						xAnchor === "right" ? "anchor_right" : "anchor_left",
						yAnchor === "top" ? "anchor_top" : "anchor_bottom",
						className,
					]
						.filter(Boolean)
						.join(" ")}
					style={
						x !== null && y !== null
							? { ...style, top: y, left: x }
							: { ...style, display: "none" }
					}
				>
					{open && children}
				</dialog>,
				document.body,
			)}
		</>
	);
});

PopoverDialog.displayName = "PopoverDialog";

export default Dialog;