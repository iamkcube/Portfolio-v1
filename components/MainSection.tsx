export default function MainSection() {
	return (
		<main className="flex flex-col gap-8 items-center sm:items-start">
			<div className="grid font-bold text-8xl gap-2 drop-shadow-xl">
				<span className="main-text hover:shadow-sm w-fit">Design.</span>
				<span className="main-text hover:shadow-sm w-fit text-accent ">
					Development.
				</span>
				<span className="main-text hover:shadow-sm w-fit">
					Knowledge.
				</span>
			</div>
			{/* <button className="px-4 py-3 bg-[hsl(var(--bg-color))] text-[hsl(var(--text-color))] rounded-lg shadow-2xl shadow-gray-800 z-100 hover:scale-95 "> */}
			<a
				href="/Resume - Kalinga Kumar Khatua - Software Developer.pdf"
				download="Resume - Kalinga Kumar Khatua - Software Developer.pdf"
				className="px-8 py-4 bg-[hsl(var(--bg-color))] text-[hsl(var(--text-color))] rounded-lg shadow-2xl shadow-gray-800 transition-transform hover:scale-95"
			>
				Download My Resume
			</a>
			{/* </button> */}
		</main>
	);
}
