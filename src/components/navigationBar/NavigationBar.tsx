import React, { RefObject } from "react"
import styles from "./navigationBar.module.css"
import { SectionType } from "@/utilities/useSectionsRefs"
import { ToggleSwitch } from "../toggleSwitch/ToggleSwitch"

type PropsType = {
	pageSections: SectionType[]
	initialColorThemeIsOn: boolean
	setInitialColorThemeIsOn: (isOn: boolean) => void
}

export const NavigationBar: React.FC<PropsType> = ({
	pageSections,
	initialColorThemeIsOn,
	setInitialColorThemeIsOn,
}) => {
	const handleClick = (ref: RefObject<HTMLTextAreaElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth" })
	}
	return (
		<nav className={styles.navigationWrapper}>
			<ul className={styles.linkList}>
				{pageSections.map((section) => (
					<li key={section.content.title}>
						<button
							onClick={() => handleClick(section.ref)}
							className={styles.linkButton}
						>
							{section.content.title}
						</button>
					</li>
				))}
			</ul>
			<ToggleSwitch
				isOn={initialColorThemeIsOn}
				setIsOn={setInitialColorThemeIsOn}
				onLabel="Autumn mode"
				offLabel="Spring mode"
			/>
		</nav>
	)
}
