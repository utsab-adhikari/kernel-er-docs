import React from "react";
import ConceptsShell from "./ConceptsShell";

export const metadata = {
	title: "Concepts · kernel-er",
	description: "Concept explanations that support the kernel-er project.",
};

export default function ConceptsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ConceptsShell>{children}</ConceptsShell>;
}
