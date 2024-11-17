import { socials } from "@/assets/ts/socials";
import SocialIcon from "@/components/SocialIcon";

export default function SocialMediaHandles() {
	return (
		<section>
			<h3 className="text-2xl font-bold text-accent mt-12">
				Check my Social Handles
			</h3>
			<div className="grid 
			grid-cols-[repeat(auto-fit,minmax(min(4.25rem,100%),1fr))] 
			md:grid-cols-[repeat(auto-fit,minmax(min(4.75rem,100%),1fr))] 
			place-items-center
			flex-wrap 
			mt-8 md:mt-12 gap-4 md:gap-x-16 md:gap-y-8">
				{socials.map(({ name, link, icon }) => (
					<SocialIcon
						key={name}
						name={name}
						link={link}
						icon={icon}
					/>
				))}
			</div>
		</section>
	);
}
