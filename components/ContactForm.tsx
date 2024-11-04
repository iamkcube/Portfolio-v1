"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [buttonText, setButtonText] = useState("Get in Touch");

	useEffect(() => {
		if (isSuccess) {
			setButtonText("Thank You");
			const timer = setTimeout(() => {
				setButtonText("Get in Touch");
			}, 2000);

			// Cleanup function to clear the timer if the component unmounts
			return () => clearTimeout(timer);
		}
	}, [isSuccess]);

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsLoading(true);
		setIsSuccess(false);
		setError(null);

		try {
			const formData = new FormData(event.currentTarget);
			formData.append(
				"access_key",
				"bb74b338-af01-4120-b5f0-f930acaf91b7"
			);

			const object = Object.fromEntries(formData);
			console.log("🚀 ~ onSubmit ~ object:", object);
			const json = JSON.stringify(object);
			console.log("🚀 ~ onSubmit ~ json:", json);

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			});

			const result = await response.json();
			if (result.success) {
				setIsSuccess(true);
			}
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
				console.error(error);
			} else {
				throw error;
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form
			className="grid grid-cols-2 gap-8 max-w-5xl mb-4"
			onSubmit={onSubmit}
		>
			<input
				className="p-4 rounded-md text-accent bg-[color-mix(in_lab,hsl(var(--bg-color)),white_10%)] border-blue-50 outline-none focus:outline-accent"
				type="text"
				name="name"
				placeholder="Name *"
				required
				title="Must be a valid name"
			/>
			<input
				className="p-4 rounded-md text-accent bg-[color-mix(in_lab,hsl(var(--bg-color)),white_10%)] border-blue-50 outline-none outline-offset-1
					focus:outline-accent
					[&:not(:placeholder-shown):invalid]:outline-red-500"
				type="email"
				name="email"
				placeholder="Email *"
				required
				pattern="^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$"
				title="Must be a valid email address"
			/>
			<textarea
				className="p-4 rounded-md col-span-2 bg-[color-mix(in_lab,hsl(var(--bg-color)),white_10%)] border-blue-50 outline-none focus:outline-accent"
				name="message"
				placeholder="Enter your message"
				rows={5}
			/>
			<button
				className="px-7 py-3 col-span-2 bg-orange-700 justify-self-center rounded-md transition-[transform,color] duration-500 ease-in-out
					hover:bg-orange-600 hover:scale-95"
				style={{
					backgroundColor: error ? "red" : "rgb(194 65 12)",
				}}
				type="submit"
				disabled={isLoading}
			>
				{isLoading ? "Loading..." : error ? "Retry" : buttonText}
			</button>
		</form>
	);
}
