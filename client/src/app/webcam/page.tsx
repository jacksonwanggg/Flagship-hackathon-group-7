"use client";
import React from "react";
import Recording from "@/components/Recording";
import WebcamHeader from "@/components/WebcamHeader";

export default function Page() {
	return (
		<div className="flex flex-col space-y-10">
			<WebcamHeader />
			<Recording />
		</div>
	);
}
