import React, { ReactNode, RefObject } from "react"
import styles from "./textSection.module.css"

type PropsType = {
	children: ReactNode | string
	scrollRef: RefObject<HTMLTextAreaElement>
}

export const TextSection: React.FC<PropsType> = ({ children, scrollRef }) => {
	return (
		<section className={styles.sectionWrapper} ref={scrollRef}>
			<div className={styles.sectionInner}> {children}</div>
		</section>
	)
}
