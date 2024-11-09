import BlockCounter from "@/components/BlockCounter";
import ContactForm from "@/components/ContactForm";
import SocialMediaHandles from "@/components/SocialMediaHandles";

export default function ContactBlock() {
	return (
		<>
			{" "}
			<BlockCounter />
			<div
				id="contact"
				className="grid gap-4"
			>
				<h2 className="text-[clamp(2rem,7vw,3rem)] font-bold md:mb-8">Contact</h2>
				<ContactForm />
				<SocialMediaHandles />
			</div>
		</>
	);
}
