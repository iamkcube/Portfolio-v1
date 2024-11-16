import ShaderBackground from "@/components/ShaderBackground";
import { useDarkMode } from "@/contexts/DarkModeContext";

export default function Background() {
	const { isDarkMode } = useDarkMode();

	return (
		<div
			style={{
				position: "absolute",
				zIndex: -30,
				top: "0",
				left: "0",
				overflow: "hidden",
				height: "100svh",
				width: "100%",
				margin: "auto",
				filter: "blur( clamp( 24px, 7vw + 1px , 80px )) brightness(100%) contrast(125%)",
			}}
			className="after:content-[''] after:absolute after:top-0 after:left-0 w-full after:w-full after:max-h-screen after:bg-noise-bg after:z-50"
		>
			<ShaderBackground
				color={isDarkMode ? [1.0, 0.5, 0.2] : [0.8, 0.5, 1.0]}
				bgColor={
					// isDarkMode ? [0.047, 0.047, 0.098] : [0.886, 0.898, 0.914]
					isDarkMode ? [0.1, 0.1, 0.1] : [0.886, 0.898, 0.914]
				}
			/>
			{/* <MetaballsCanvas
				color1={matches ? "#007B7F" : "#79abf9"}
				// color1="#007B7F"
				// color2="#001F3F"
				// color1="#79abf9"
				color2="#11375d"
				noOfBalls={8}
			/> */}
			<svg display="none">
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="1"
						seed="2"
						numOctaves="2"
						stitchTiles="stitch"
					/>
					<feColorMatrix
						in="colorNoise"
						type="matrix"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
					/>
					<feComposite
						operator="in"
						in2="SourceGraphic"
						result="monoNoise"
					/>
					<feBlend
						in="SourceGraphic"
						in2="monoNoise"
						mode="normal"
					/>
				</filter>
			</svg>
		</div>
	);
}
