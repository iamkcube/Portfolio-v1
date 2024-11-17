interface SocialIconProps {
	name: string;
	link: string;
	icon: JSX.Element;
}

export default function SocialIcon({ name, link, icon }: SocialIconProps) {
	return (
		<div role="button">
			<a
				className="block size-12 md:size-16 mx-auto"
				href={link}
				target="_blank"
				aria-label={`Visit my ${name}`}
			>
				{icon}
			</a>
			<p className="text-center mt-4">{name}</p>
		</div>
	);
}
