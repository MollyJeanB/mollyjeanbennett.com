import React, { ReactNode, RefObject } from "react"
import styles from "./textSection.module.css"

type PropsType = {
	children: ReactNode | string
	ref: RefObject<HTMLTextAreaElement>
}

export const TextSection: React.FC<PropsType> = ({ children }) => {
	return (
		<section className={styles.sectionWrapper}>
			<div className={styles.sectionInner}> {children}</div>
		</section>
	)
}
