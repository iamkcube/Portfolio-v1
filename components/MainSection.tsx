export default function MainSection() {
	return (
		<main
			className="flex flex-col gap-8 items-center 
		h-[calc(calc(100vh_-_calc(2*var(--gap)))_-_5rem)] md:h-[calc(100vh_-_calc(2*var(--gap)))] 
		md:items-start my-auto"
		>
			<div
				className="grid font-bold text-[clamp(3rem,8vw,5rem)] leading-none gap-2 drop-shadow-xl 
			mt-[calc(calc(calc(100vh_-_calc(2*var(--gap)))_/_2)-14rem)]
			"
			>
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
				className="px-4 py-3 md:px-6 md:py-4 bg-[hsl(var(--bg-color))] text-[hsl(var(--text-color))] rounded-lg shadow-2xl shadow-gray-800 transition-transform hover:scale-95"
			>
				Download My Resume
			</a>
			{/* </button> */}
		</main>
	);
}
