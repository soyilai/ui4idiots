export type Lesson = {
	title: string;
	description: string;
	goal: string;
	href: string;
};

export type Section = {
	title: string;
	description: string;
	lessons: Lesson[];
};

export const course: Section[] = [
	{
		title: 'Getting Started',
		description: 'Break through blank-screen freeze and learn to design with intent.',
		lessons: [
			{
				title: "Don't Panic: Starting From Nothing",
				description: 'Why blank screen freeze happens and how to break it with three questions.',
				goal: 'Ask "Why?", "Who?", and "What\'s next?" before you touch the design tool.',
				href: '/course/1/1'
			},
			{
				title: 'Purpose Before Pixels',
				description: 'Every screen has one job. Find it and the rest becomes obvious.',
				goal: "Write your screen's purpose in ten words or less, then remove anything that doesn't serve it.",
				href: '/course/1/2'
			},
			{
				title: 'Give Your UI a Face',
				description:
					'Personality is the combination of shapes, colors, typeface, and spacing working together.',
				goal: 'Pick three personality adjectives and tune your UI until everything matches them.',
				href: '/course/1/3'
			}
		]
	},
	{
		title: 'Structure & Hierarchy',
		description:
			'Control where the eye goes, reduce visual noise, and group information so it reads naturally.',
		lessons: [
			{
				title: 'The Loudest Thing in the Room',
				description: 'Hierarchy is reading order. One primary element per screen, period.',
				goal: "Squint at your design and make sure there's only one dominant thing.",
				href: '/course/2/1'
			},
			{
				title: 'Heavy, Medium, Light',
				description:
					'Visual weight comes from size, color, font weight, and fill—not just font size.',
				goal: "Give every element a weight and make sure they don't all weigh the same.",
				href: '/course/2/2'
			},
			{
				title: 'Stop Adding, Start Removing',
				description:
					'Every element demands attention. Usually the fix is subtraction, not more stuff.',
				goal: 'Remove at least one element from a busy section and see if anyone misses it.',
				href: '/course/2/3'
			},
			{
				title: 'Things That Belong Together, Stay Together',
				description:
					'Proximity implies relationship. Labels, fields, and groups live by their spacing ratios.',
				goal: 'Tighten spacing inside groups, loosen it between groups.',
				href: '/course/2/4'
			}
		]
	},
	{
		title: 'Layout & Spacing',
		description:
			'Use whitespace as a design tool, build a spacing system, align to a grid, and resist filling space just to fill it.',
		lessons: [
			{
				title: 'The Power of Nothing',
				description:
					'Whitespace is active. Cramped UIs stress you out; spacious ones feel intentional.',
				goal: 'Double the padding on one component and observe the difference.',
				href: '/course/3/1'
			},
			{
				title: 'Never Eyeball Spacing Again',
				description: 'A spacing system is a short list of allowed values. Use it everywhere.',
				goal: 'Replace every off-grid spacing value with the nearest system value.',
				href: '/course/3/2'
			},
			{
				title: 'The Invisible Grid',
				description:
					"Alignment is the grid your eye notices when it's missing. Fewer edge lines means harmony.",
				goal: 'Count unique left-edge positions and reduce them to two or three.',
				href: '/course/3/3'
			},
			{
				title: 'Resist the Urge to Fill',
				description: 'Leftover space is breathing room, not a problem to solve.',
				goal: 'Remove full width from three buttons and let them size naturally.',
				href: '/course/3/4'
			}
		]
	},
	{
		title: 'Typography',
		description:
			'Make text easy to read through size, scale, line length, and by avoiding the mistakes that slow people down.',
		lessons: [
			{
				title: 'Type That Actually Gets Read',
				description:
					'Readability depends on five factors: size, line height, line length, contrast, and letter spacing.',
				goal: 'Apply baseline body-text standards to every paragraph in your project.',
				href: '/course/4/1'
			},
			{
				title: 'Your First Type Scale',
				description:
					'A type scale is a small set of sizes with clear relationships. Skip steps between levels.',
				goal: 'Reduce your project to four font sizes with obvious jumps between them.',
				href: '/course/4/2'
			},
			{
				title: 'The Goldilocks Line',
				description:
					'Lines between 45 and 75 characters are comfortable. Beyond 80, readers get lost.',
				goal: 'Constrain all paragraph text to a readable line length.',
				href: '/course/4/3'
			},
			{
				title: 'Typography Crimes',
				description:
					'Six specific mistakes: ghost text, justified alignment, all-caps body, no scale, display fonts in paragraphs, missing line height.',
				goal: 'Check your project against all six and fix every violation.',
				href: '/course/4/4'
			}
		]
	},
	{
		title: 'Color',
		description:
			'Build a palette deliberately, think in HSL, enforce contrast, and use color only where it matters.',
		lessons: [
			{
				title: 'Building a Palette From Zero',
				description:
					'Every palette needs four things: a neutral scale, one primary color, semantic colors, and nothing else.',
				goal: 'Reduce your project to one accent color and a strong neutral gray.',
				href: '/course/5/1'
			},
			{
				title: 'Stop Thinking in Hex',
				description:
					'HSL describes colors in human terms. Hover states, tints, and disabled variants follow a simple formula.',
				goal: 'Build a five-state button system from a single HSL hue.',
				href: '/course/5/2'
			},
			{
				title: 'Contrast Is Not Optional',
				description: 'Body text needs 4.5:1 contrast minimum. Test and fix it.',
				goal: 'Check your three most text-heavy elements with a contrast checker.',
				href: '/course/5/3'
			},
			{
				title: 'Use Color Like a Spice',
				description: 'Color is a limited budget. Decorative color dilutes functional color.',
				goal: 'Convert every non-semantic color to gray and verify nothing important was lost.',
				href: '/course/5/4'
			}
		]
	},
	{
		title: 'Depth & Layers',
		description:
			'Use shadows and elevation to create a logical layer stack, and commit to one visual direction.',
		lessons: [
			{
				title: "Shadows That Don't Look Fake",
				description:
					'Good shadows mimic physics: tight and small when close, large and soft when floating.',
				goal: 'Replace overshadows with consistent, natural-looking ones.',
				href: '/course/6/1'
			},
			{
				title: 'Everything Has a Height',
				description: 'UI elements exist at logical elevations. Each layer needs visual separation.',
				goal: 'Map your overlapping elements to a six-layer elevation stack.',
				href: '/course/6/2'
			},
			{
				title: 'Pick a Side: Flat or Dimensional',
				description: "Both work. Mixing them randomly doesn't.",
				goal: "Commit to one approach and fix anything that doesn't match.",
				href: '/course/6/3'
			}
		]
	},
	{
		title: 'Images & Media',
		description:
			"Choose images that fit, keep text readable over them, and handle content you didn't create.",
		lessons: [
			{
				title: 'Choosing Images That Fit',
				description: 'Consistent aspect ratios and consistent color grading are non-negotiable.',
				goal: 'Use a single aspect ratio across all image cards.',
				href: '/course/7/1'
			},
			{
				title: 'Text on Images',
				description: 'Five techniques: scrim, text box, darkening, positioning, and text-shadow.',
				goal: 'Add a gradient scrim and verify the text passes contrast on top of it.',
				href: '/course/7/2'
			},
			{
				title: 'Surviving User-Generated Content',
				description: 'Design for edges: long names, missing images, long URLs, empty fields.',
				goal: 'Test a card with extreme and missing content. Make sure nothing breaks.',
				href: '/course/7/3'
			}
		]
	},
	{
		title: 'Polish',
		description:
			"The last 10%: micro-interactions, empty states, and fixing the browser's bad defaults.",
		lessons: [
			{
				title: 'Borders vs Shadows',
				description: 'Borders mean same plane. Shadows mean elevated. Never use both.',
				goal: 'Find and fix every element using both at once.',
				href: '/course/8/1'
			},
			{
				title: 'Empty States',
				description: 'Three jobs: explain, direct, and make it feel like a beginning.',
				goal: 'Add icon, title, body, and CTA to your emptiest state.',
				href: '/course/8/2'
			},
			{
				title: 'The Details That Matter',
				description:
					'Hover states, focus rings, transitions, loading states, disabled states, and micro-copy.',
				goal: 'Implement all six states on your primary button.',
				href: '/course/8/3'
			},
			{
				title: 'Browser Defaults Are Rough',
				description: 'Browser styles are functional but not designed. A small reset helps.',
				goal: 'Apply a basic CSS reset and compare it to browser defaults.',
				href: '/course/8/4'
			}
		]
	},
	{
		title: 'Real-World Transfer',
		description:
			'The same principles that make great UI make great posters, signs, and physical objects.',
		lessons: [
			{
				title: 'Print Design',
				description:
					'Hierarchy and spacing transfer. Contrast needs to be stronger. RGB becomes CMYK.',
				goal: 'Design a flyer using the one-hook, two-facts, one-action formula.',
				href: '/course/9/1'
			},
			{
				title: 'Billboards & Signs',
				description: 'Seven words maximum. Heavy fonts. Extreme contrast. One URL.',
				goal: "Print a sign at actual scale and verify it's readable from a distance.",
				href: '/course/9/2'
			},
			{
				title: 'Physical Mockups',
				description:
					'Physical prototypes reveal problems screens never will: proportion, grip, lighting.',
				goal: 'Print your UI and identify one hierarchy problem only visible at distance.',
				href: '/course/9/3'
			}
		]
	}
];
