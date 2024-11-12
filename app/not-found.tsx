import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="relative w-full min-h-svh">
			<object
				className="w-full h-svh"
				data="404-svg-animation.svg"
				type="image/svg+xml"
			></object>
			<Link
				className="absolute bottom-[20%] left-[50%] -translate-x-[50%] -translate-y-[50%]
				px-6 py-2 font-bold rounded font-mono transition-[color,background-color,transform] ease-in-out
			bg-[hsl(var(--text-color))] text-[hsl(var(--bg-color))]
			hover:bg-accent hover:scale-105"
				href="/"
			>
				Get Back
			</Link>
		</div>
	);
}
