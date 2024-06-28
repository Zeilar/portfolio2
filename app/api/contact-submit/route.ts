import { NextResponse } from "next/server";
import sendGrid from "@sendgrid/mail";
import { z } from "zod";

sendGrid.setApiKey(z.string().parse(process.env.NX_SENDGRID_API_KEY));

export async function POST(req: Request) {
	try {
		const { email, message, name, subject } = z
			.object({
				name: z.string().min(1),
				email: z.string().min(1),
				subject: z.string().min(1),
				message: z.string().min(1),
			})
			.parse(await req.json());
		await sendGrid.send({
			from: {
				email: "philip@angelin.dev",
				name: `${name} <${email}>`,
			},
			to: "philip_angelin@hotmail.com",
			subject,
			html: message,
		});
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		console.error(JSON.stringify(error, null, 4));
		return new NextResponse(null, { status: 500 });
	}
}
