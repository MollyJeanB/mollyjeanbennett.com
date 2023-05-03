import React, { ReactNode } from "react"
import styles from "./handstandHero.module.css"

type PropsType = {
	children?: ReactNode | string
}

export const HandstandHero: React.FC<PropsType> = ({ children }) => {
	return (
		<div
			title={
				"A person doing a handstand, then falling down, then getting up again against beige wall."
			}
			className={styles.heroWrapper}
		>
			{children}
		</div>
	)
}
