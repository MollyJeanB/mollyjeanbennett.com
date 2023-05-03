import React, { ReactNode, RefObject } from "react"
import styles from "./textSection.module.css"

type PropsType = {
	children: ReactNode | string
	scrollRef: RefObject<HTMLTextAreaElement>
	heading?: string | null
}

export const TextSection: React.FC<PropsType> = ({
	children,
	scrollRef,
	heading,
}) => {
	return (
		<section className={styles.sectionWrapper} ref={scrollRef}>
			{heading && <h2 className={styles.heading}>{heading}</h2>}
			<div className={styles.sectionInner}> {children}</div>
		</section>
	)
}
