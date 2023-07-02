import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Page() {
	return (
		<main className="mt-[-8.75rem] flex min-h-screen flex-1 flex-col items-center justify-center gap-4 p-4 pt-[8.75rem]">
			<Card className="bg-brand-yellow px-6 py-4 text-brand-blue sm:px-12 sm:py-8">
				<CardTitle className="font-display text-3xl font-black">Max Altena</CardTitle>
				<CardDescription className="mt-2 text-brand-blue">
					I guess there will be something here soon.
				</CardDescription>
			</Card>
		</main>
	);
}
