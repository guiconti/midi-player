declare module "*.png" {
	const content: string;
	export default content;
}

declare module "*.jpg" {
	const content: string;
	export default content;
}

declare module "*.svg" {
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const content: string;

	export { ReactComponent };
	export default content;
}

declare module "*.less" {
	interface Classes {
		[index: string]: string;
	}
	const classes: Classes;
	export default classes;
}

declare module "*.mp4" {
	const content: string;
	export default content;
}