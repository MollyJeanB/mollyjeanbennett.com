import { Footer } from "@/components"
import { ReactNode } from "react"
import { LinkCards } from "../linkCards/LinkCards"
import { Card } from "../linkCards/Card"

export type SectionContentType = {
	title: string
	body: ReactNode | string
	showTitle: boolean
}

export const sections: SectionContentType[] = [
	{
		title: "Bio",
		showTitle: false,
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
					administration. Software development is, at its core,{" "}
					<b>an act of communication.</b> Empathy, persistence, & humility are
					essential.
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
		showTitle: true,
		body: (
			<>
				<p>
					In my professional software engineering roles, I've worked on mobile &
					web time tracking apps for EquipmentShare's T3 platform, the Later &
					Early investment products at Acorns, & the Palm Springs Art Museum's
					website, to name a few.
				</p>
				<p>
					And in my spare time, I like to entertain flights of fancy & create
					challenges that help new engineers hone their skills & get hired.
					Recently, I've built:
				</p>
				<LinkCards>
					<Card
						heading={"Shake it Like a Cheese Stick"}
						link={"https://www.shake-it-like-a-cheese-stick.com/"}
						emojis={"🧀🕺🧀"}
						body={"An interpretive dance facilitation app"}
					/>
					<Card
						heading={"ChatBLT"}
						link={"https://www.chat-blt.com/"}
						emojis={"🥓🥬🍅"}
						body={"A sandwich-based chatbot"}
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
		showTitle: true,
		body: (
			<>
				<p>
					Both at work & beyond, I do what I can to build up other engineers &
					make the tech industry more diverse, equitable, & inclusive.
				</p>
				<p>
					I've organized silly hackathons, served on the organizing team for the
					ACT-W (Advancing Careers of Technical Women) Conference, and helped to
					establish a formal engineering internship program at EquipmentShare.
				</p>
				<p>
					I currently volunteer as a mentor with a community group called
					Empathetech, which helps non-traditional engineers find their first
					role. Because we all deserve to <b> thrive in tech :)</b>
				</p>
			</>
		),
	},
	{
		title: "Contact",
		showTitle: false,
		body: (
			<>
				<Footer />
			</>
		),
	},
]
