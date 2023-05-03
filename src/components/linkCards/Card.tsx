import React, { ReactNode } from "react"
import styles from "./linkCards.module.css"
import { ExternalLinkIcon } from "@/assets/svg"

type PropsType = {
	heading: string
	body: string | ReactNode
	link: string
	emojis: string
}

export const Card: React.FC<PropsType> = ({ heading, body, link, emojis }) => {
	return (
		<li className={styles.card}>
			<a href={link} target={"_blank"}>
				<ExternalLinkIcon height={16} width={16} className={styles.icon} />
				<h2>{heading}</h2>
				<p>{emojis}</p>
				<p>{body}</p>
			</a>
		</li>
	)
}
