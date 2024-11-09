import AboutSection from "@/components/AboutSection";
import BlockCounter from "@/components/BlockCounter";

export default function AboutBlock() {
	return (
		<>
			<BlockCounter />
			<div
				id="about"
				className="grid gap-4"
			>
				<h2 className="text-[clamp(2rem,7vw,3rem)] font-bold md:mb-8">About</h2>
				<AboutSection />
			</div>
		</>
	);
}
