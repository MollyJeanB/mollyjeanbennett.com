import React, { ReactNode } from "react"
import styles from "./handstandHero.module.css"

type PropsType = {
	children?: ReactNode | string
}

export const HandstandHero: React.FC<PropsType> = ({ children }) => {
	return <div className={styles.heroWrapper}>{children}</div>
}
