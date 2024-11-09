import ArrowSVG from "@/components/ArrowSVG";
import MainSection from "@/components/MainSection";

export default function MainBlock() {
	return (
		<>
			{" "}
			<div className="md:grid justify-end hidden">
				<p className="text-md ml-auto text-right font-bold max-w-[15ch] mt-3">
					Experienced Fullstack developer specializing in React,
					Next.js, and user-centric design.
				</p>
				<ArrowSVG />
			</div>
			<MainSection />
		</>
	);
}
