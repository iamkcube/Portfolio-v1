"use client";

import AboutBlock from "@/components/AboutBlock";
import Background from "@/components/Background";
import ContactBlock from "@/components/ContactBlock";
import Cursor from "@/components/Cursor";
import FooterBlock from "@/components/FooterBlock";
import MainBlock from "@/components/MainBlock";
import Navbar from "@/components/Navbar";
import ProjectBlock from "@/components/ProjectBlock";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<Box
			className="grid auto-rows-auto grid-cols-1 md:grid-cols-[1fr_4fr] gap-y-[var(--gap)] md:gap-x-16 min-h-screen mx-4 md:mx-16 mt-2 md:mt-8 font-voyager"
			sx={{
				"--gap": "2rem",
				"@media (min-width: 768px)": {
					"--gap": "6rem",
				},
			}}
		>
			<Cursor />
			<Background />
			<Navbar />
			<MainBlock />
			<AboutBlock />
			<ProjectBlock />
			<ContactBlock />
			<FooterBlock />
		</Box>
	);
}
