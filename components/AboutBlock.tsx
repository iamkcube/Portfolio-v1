import AboutSection from "@/components/AboutSection";
import BlockCounter from "@/components/BlockCounter";
import Image from "next/image";
import profilePicMobile from "../public/kalinga-landscape.webp";
import profilePicDesktop from "../public/kalinga.webp";

export default function AboutBlock() {
	return (
		<>
			<BlockCounter>
				<Image
					className="hidden md:block w-full md:mt-24"
					src={profilePicDesktop}
					alt="Kalinga's Profile Picture"
					loading="lazy"
				/>
			</BlockCounter>
			<div
				id="about"
				className="relative grid gap-4"
			>
				<h2 className="text-[clamp(2rem,7vw,3rem)] font-bold md:mb-8">
					About
				</h2>
				<Image
					className="md:hidden w-full mt-4"
					src={profilePicMobile}
					alt="Kalinga's Profile Picture"
					loading="lazy"
				/>
				<AboutSection />
			</div>
		</>
	);
}
