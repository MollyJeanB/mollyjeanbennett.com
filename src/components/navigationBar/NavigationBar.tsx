import React, { RefObject, useEffect, useState } from "react"
import styles from "./navigationBar.module.css"
import { SectionType } from "@/utilities/useSectionsRefs"
import { ToggleSwitch } from "../toggleSwitch/ToggleSwitch"

type PropsType = {
	pageSections: SectionType[]
}
export const FALL_THEME_NAME = "fall"
export const SPRING_THEME_NAME = "spring"

const NavigationBar: React.FC<PropsType> = ({ pageSections }) => {
	const [isFallThemeMode, setIsFallThemeMode] = useState<boolean>(
		document.body.dataset.theme === FALL_THEME_NAME
	)
	const activeTheme: string = isFallThemeMode
		? FALL_THEME_NAME
		: SPRING_THEME_NAME

	const handleClick = (ref: RefObject<HTMLTextAreaElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		localStorage.setItem("theme", activeTheme)
		document.body.dataset.theme = activeTheme
	}, [activeTheme])
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
			<div className={styles.controlBar}>
				<ToggleSwitch
					isOn={isFallThemeMode}
					setIsOn={setIsFallThemeMode}
					onLabel="Autumn mode"
					offLabel="Spring mode"
				/>
			</div>
		</nav>
	)
}

export default NavigationBar
