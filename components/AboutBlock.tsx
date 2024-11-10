import AboutSection from "@/components/AboutSection";
import BlockCounter from "@/components/BlockCounter";

export default function AboutBlock() {
	return (
		<>
			<BlockCounter>
			<img
					className="hidden md:block w-full md:mt-24"
					src="/kalinga.webp"
					alt="Kalinga's Profile Picture"
				/>
			</BlockCounter>
			<div
				id="about"
				className="grid gap-4"
			>
				<h2 className="text-[clamp(2rem,7vw,3rem)] font-bold md:mb-8">
					About
				</h2>
				<img
					className="md:hidden w-full mt-4"
					src="/kalinga-landscape.webp"
					alt="Kalinga's Profile Picture"
				/>
				<AboutSection />
			</div>
		</>
	);
}
