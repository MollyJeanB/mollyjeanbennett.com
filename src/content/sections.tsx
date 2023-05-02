import { Footer } from "@/components"
import { ReactNode } from "react"

export type SectionContentType = {
	title: string
	body: ReactNode | string
}

export const sections: SectionContentType[] = [
	{
		title: "Bio",
		body: (
			<>
				<p>
					I’m a frontend developer based in Portland, Oregon. I believe that
					building great things requires getting up & falling & getting up again
					& falling better & iterating & improving & <b>getting it right.</b>
				</p>
				<p>
					My approach to problem solving is informed by my background in writing
					& non-profit administration. Whether I’m trying to get the right quote
					for a story or refactor a React component, I know I can rely on my
					resilience & ferocious curiosity.
				</p>
				<p>
					And of course, it never hurts to <b>turn the problem on its head</b> &
					look at it from another angle.
				</p>
			</>
		),
	},
	{
		title: "Projects",
		body: (
			<>
				<p>Projects to go here.</p>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
				</p>
			</>
		),
	},
	{
		title: "Community",
		body: (
			<>
				<p>Community work to go here.</p>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
				</p>
			</>
		),
	},
	{
		title: "Contact",
		body: (
			<>
				<Footer />
			</>
		),
	},
]
