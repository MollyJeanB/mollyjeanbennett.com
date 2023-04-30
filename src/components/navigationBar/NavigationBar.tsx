import React, { RefObject } from "react"
import styles from "./navigationBar.module.css"
import { SectionType } from "@/utilities/useSectionsRefs"

type PropsType = {
	pageSections: SectionType[]
}

export const NavigationBar: React.FC<PropsType> = ({ pageSections }) => {
	const handleClick = (ref: RefObject<HTMLTextAreaElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth" })
	}
	return (
		<nav className={styles.navigationWrapper}>
			<ul className={styles.linkList}>
				{pageSections.map((section) => (
					<li key={section.content.title}>
						<button onClick={() => handleClick(section.ref)}>
							{section.content.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
