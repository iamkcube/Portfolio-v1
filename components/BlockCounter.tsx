export default function BlockCounter() {
	return (
		<div className="grid md:mb-32">
			<p className="text-lg md:ml-auto md:text-right font-bold mt-3 before:[counter-increment:section-number] before:content-[counter(section-number)]">
				{" "}
				of 4
			</p>
		</div>
	);
}
