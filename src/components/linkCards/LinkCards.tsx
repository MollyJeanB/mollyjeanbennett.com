import React, { ReactNode } from "react"
import styles from "./linkCards.module.css"

type PropsType = {
	children: ReactNode
}

export const LinkCards: React.FC<PropsType> = ({ children }) => {
	return <ul className={styles.cardsWrapper}>{children}</ul>
}
