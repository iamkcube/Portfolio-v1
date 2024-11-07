import { styled, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";

const Circle = styled("div")({
	position: "fixed",
	height: "5rem",
	width: "5rem",
	border: "1px solid var(--accent-color)",
	backgroundColor: "transparent",
	borderRadius: "100%",
	top: "-2.5rem",
	left: "-2.5rem",
	pointerEvents: "none",
	boxSizing: "border-box",
	zIndex: 1000,
	opacity: 0,
	transitionProperty:
		"opacity, scale, backdrop-filter, background-color, mix-blend-mode",
	transitionDuration: "500ms",
	transitionTimingFunction: "ease",
	// transition: "opacity 500ms ease, height 500ms ease",
	"body:hover &": {
		opacity: 1,
	},
	"body:has(:is(.main-text, .project-card, button, a, input, textarea):hover) &": {
		scale: 2,
		// backdropFilter: "blur(4px)",
		// mixBlendMode: "exclusion",
		backgroundColor: "hsla(var(--bg-color), 0.1)",
		// backgroundImage: "linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)",
	},
	"body:has(.main-text:hover) &": {
		mixBlendMode: "exclusion",
		backgroundColor: "hsla(var(--text-color), 1)",
	},
});

export default function Cursor() {
	const isTouchDevice = useMediaQuery("(pointer:coarse)");
	const circleRef = useRef<HTMLDivElement | null>(null);
	const mouse = { x: 0, y: 0 };
	const previousMouse = { x: 0, y: 0 };
	const circle = { x: 0, y: 0 };
	const currentScale = useRef(0);
	const currentAngle = useRef(0);
	const speed = 0.15;

	useEffect(() => {
		const tick = () => {
			circle.x += (mouse.x - circle.x) * speed;
			circle.y += (mouse.y - circle.y) * speed;
			const translateTransform = `${circle.x}px ${circle.y}px`;

			const deltaMouseX = mouse.x - previousMouse.x;
			const deltaMouseY = mouse.y - previousMouse.y;
			previousMouse.x = mouse.x;
			previousMouse.y = mouse.y;
			const mouseVelocity = Math.min(
				Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
				150
			);
			const scaleValue = (mouseVelocity / 150) * 0.5;
			currentScale.current += (scaleValue - currentScale.current) * speed;
			const scaleTransform = `scale(${1 + currentScale.current}, ${
				1 - currentScale.current
			})`;

			const angle =
				(Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
			if (mouseVelocity > 20) {
				currentAngle.current = angle;
			}
			const rotateTransform = `${currentAngle.current}deg`;

			if (circleRef.current) {
				circleRef.current.style.translate = `${translateTransform}`;
				circleRef.current.style.rotate = `${rotateTransform}`;
				circleRef.current.style.transform = `${scaleTransform}`;
				// circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
			}

			window.requestAnimationFrame(tick);
		};

		window.addEventListener("mousemove", (e) => {
			mouse.x = e.x;
			mouse.y = e.y;
		});

		tick();

		return () => {
			window.removeEventListener("mousemove", (e) => {
				mouse.x = e.x;
				mouse.y = e.y;
			});
		};
	}, );

	return !isTouchDevice ? (
		<>
			<Circle
				id="AnimatedCircle"
				ref={circleRef}
			/>{" "}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				style={{ display: "none" }}
			>
				<defs>
					<filter id="disperse-filter">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
						/>
						<feColorMatrix
							type="matrix"
							values="1 0 0 0 0 
												 0 1 0 0 0 
												 0 0 1 0 0 
												 0.2 0.2 0.2 1 0"
						/>
						<feBlend
							mode="screen"
							in2="SourceGraphic"
							result="coloredBlur"
						/>
					</filter>
				</defs>
			</svg>
		</>
	) : (
		<></>
	);
}
