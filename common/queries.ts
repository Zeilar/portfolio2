const API_TOKEN = process.env.NX_STRAPI_API_KEY;
const API_URL = `${process.env.NX_STRAPI_API_URL}/api`;

const DEFAULT_HEADERS = new Headers({ Authorization: `Bearer ${API_TOKEN}` });

export async function getProject(slug: string): Promise<unknown> {
	const response = await fetch(
		`${API_URL}/projects?filters[Slug][$eq]=${slug}&populate=PreviewImage`,
		{ headers: DEFAULT_HEADERS }
	);
	return response.json();
}

export async function getProjects(featured?: boolean): Promise<unknown> {
	const searchParams = new URLSearchParams({
		populate: "PreviewImage",
	});
	if (featured) {
		searchParams.set("filters[Featured][$eq]", `${featured}`);
	}
	const response = await fetch(`${API_URL}/projects?${searchParams}`, {
		headers: DEFAULT_HEADERS,
	});
	return response.json();
}

export async function getPosts(): Promise<unknown> {
	const response = await fetch(`${API_URL}/posts`, {
		headers: DEFAULT_HEADERS,
	});
	return response.json();
}

export async function getPost(slug: string): Promise<unknown> {
	const response = await fetch(
		`${API_URL}/posts?filters[slug][$eq]=${slug}`,
		{ headers: DEFAULT_HEADERS }
	);
	return response.json();
}
