/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
	const content: any;
	const ReactComponent: any;
	export ReactComponent;
	export default content;
}
