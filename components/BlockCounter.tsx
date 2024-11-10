export default function BlockCounter({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<div className="grid auto-rows-min mt-12 md:m-0 md:mb-32">
			<p className="text-lg md:ml-auto md:text-right font-bold mt-3 before:[counter-increment:section-number] before:content-[counter(section-number)]">
				{" "}
				of 4
			</p>
			{children}
		</div>
	);
}
