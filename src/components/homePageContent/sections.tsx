import { Footer } from "@/components"
import { ReactNode } from "react"
import { LinkCards } from "../linkCards/LinkCards"
import { Card } from "../linkCards/Card"

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
					I’m a frontend engineer based in Portland, Oregon. I believe that
					building great things requires getting up & falling & getting up again
					& falling better & iterating & improving & <b>getting it right.</b>
				</p>
				<p>
					My approach to problem solving is informed by 5 years in the tech
					industry as well as my previous career in writing & non-profit
					administration. Software development is, at its core, an act of
					communication. Empathy, persistence, & humility are essential.
				</p>
				<p>
					And of course, it never hurts to <b>turn the problem on its head</b> &
					look at it from a different angle.
				</p>
			</>
		),
	},
	{
		title: "Projects",
		body: (
			<>
				<p>
					In my professional software engineering roles, I've worked on mobile
					and web time tracking apps for EquipmentShare's T3 platform, the Later
					and Early investment products at Acorns, and the Palm Springs Art
					Museum's website, to name a few.
				</p>
				<p>
					And in my spare time, I like to entertain flights of fancy and build
					challenges that help new engineers hone their skill set and get hired.
					Recently, I've built:
				</p>
				<LinkCards>
					<Card
						heading={"ChatBLT"}
						link={"https://www.chat-blt.com/"}
						emojis={"🥓🥬🍅"}
						body={"A sandwich-based chatbot"}
					/>
					<Card
						heading={"Shake it Like a Cheese Stick"}
						link={"https://www.shake-it-like-a-cheese-stick.com/"}
						emojis={"🧀🕺🧀"}
						body={"An interpretive dance facilitation app"}
					/>
					<Card
						heading={"Alert Badges Challenge"}
						link={"https://replit.com/@MJB/Alert-Badges-challenge"}
						emojis={"⚠️👀🐛"}
						body={"An exercise for teaching frontend debugging"}
					/>
				</LinkCards>
			</>
		),
	},
	{
		title: "Community",
		body: (
			<>
				<p>
					Both at work and beyond, I do what I can to build up other engineers
					and make the tech industry more diverse, equitable, and inclusive.
				</p>
				<p>
					At EquipmentShare, I helped establish an internship program and
					piloted a partnership with Unloop, an organization that teaches people
					to code while incarcerated.
				</p>
				<p>
					I've served on the organizing team for ChickTech's ACT-W (Advancing
					Careers of Technical Women) Conference and I currently volunteer as a
					mentor with a community group called Empathetech, which helps
					non-traditional engineers find their first role. Because we all
					deserve to thrive in tech :)
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
