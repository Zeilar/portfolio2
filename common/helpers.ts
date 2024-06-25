import { z } from "zod";
import type { RTDocument } from "@/types";
import { projectsResponseValidator } from "@/validators";

export function readableDate(date: string | number | Date) {
	const [month, , , , year] = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	}).formatToParts(new Date(date));
	return `${month.value} ${year.value}`;
}

export function clamp(number: number, min: number, max: number) {
	return Math.min(Math.max(number, min), max);
}

export function getReadingMinutes({ content }: RTDocument) {
	const words = content.reduce((total, current) => {
		if (current.nodeType !== "paragraph") {
			return total;
		}
		return (
			total +
			current.content.reduce((total, current) => {
				switch (current.nodeType) {
					case "hyperlink":
						return (
							total +
							current.content.reduce(
								(total, current) =>
									total + current.value.split(" ").length,
								0
							)
						);
					case "text":
						return total + current.value.split(" ").length;
					default:
						return total;
				}
			}, 0)
		);
	}, 0);
	return Math.ceil(words / 200);
}

export function mapProjectsResponse({
	includes,
	items,
}: z.infer<typeof projectsResponseValidator>) {
	return items.map((project) => {
		const asset = includes.Asset.find(
			(asset) => project.fields.previewImage.sys.id === asset.sys.id
		);
		const technologies = project.fields.technologies.map(
			(technology) =>
				includes.Entry.find(
					(entry) => technology.sys.id === entry.sys.id
				)?.fields
		);
		return asset
			? {
					...project.fields,
					technologies,
					previewImage: {
						url: `https:${asset.fields.file.url}`,
						width: asset.fields.file.details.image.width,
						height: asset.fields.file.details.image.height,
					},
			  }
			: null;
	});
}
