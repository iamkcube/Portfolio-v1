export default function FooterBlock() {
	return (
		<footer
			className="mt-40 md:mt-12 pb-4 pt-2 text-sm 
					border-t-[1px] border-[color-mix(in_lab,transparent_80%,hsl(var(--text-color)))] 
					md:col-span-2 flex gap-6 flex-wrap items-center justify-between"
		>
			<p>Made with ❤️ by Kalinga</p>
			<p className="">&copy; All Rights Reserved</p>
		</footer>
	);
}
