export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NX_SENDGRID_API_KEY: string;
			NX_STRAPI_API_KEY: string;
			NX_STRAPI_API_URL: string;
		}
	}
}
