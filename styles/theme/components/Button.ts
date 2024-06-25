import { StyleConfig } from "@chakra-ui/theme-tools";

const solid = {
	color: "text",
	bgColor: "accent",
	py: 7,
	px: 8,
	_hover: {
		bgColor: "purple.500",
		textDecor: "none",
	},
	_active: {
		bgColor: "purple.700",
	},
	_loading: {
		_hover: {
			bgColor: "accent",
		},
	},
};

const secondary = {
	...solid,
	bgColor: "gray.600",
	py: 7,
	px: 8,
	_hover: {
		bgColor: "gray.500",
		textDecor: "none",
	},
	_active: {
		bgColor: "gray.700",
	},
};

export const Button: StyleConfig = {
	baseStyle: {
		rounded: "base",
		fontWeight: 500,
	},
	variants: {
		solid,
		primary: solid,
		"primary-icon": {
			...solid,
			p: 6,
		},
		"primary-link": {
			...solid,
			"> .chakra-icon": {
				opacity: 0,
				w: 0,
				h: 0,
				transition: "0.25s ease",
			},
			_hover: {
				...solid._hover,
				"> .chakra-icon": {
					ml: 2,
					opacity: 1,
					w: "1em",
					h: "1em",
				},
			},
		},
		secondary,
		"secondary-icon": {
			...secondary,
			p: 6,
		},
	},
};
