import React, { RefObject, useState } from "react"
import styles from "./navigationBar.module.css"
import { SectionType } from "@/utilities/useSectionsRefs"
import { ToggleSwitch } from "../toggleSwitch/ToggleSwitch"

type PropsType = {
	pageSections: SectionType[]
}
export const FALL_THEME_NAME = "fall"
export const SPRING_THEME_NAME = "spring"

const NavigationBar: React.FC<PropsType> = ({ pageSections }) => {
	const savedTheme: string | undefined = document.body.dataset.theme
	//extra check because undefined can be a string in this case
	const savedThemeNotSet: boolean =
		savedTheme !== FALL_THEME_NAME && savedTheme !== SPRING_THEME_NAME
	const initialThemeIsFall: boolean = savedThemeNotSet
		? true
		: savedTheme === FALL_THEME_NAME
	const [isFallThemeMode, setIsFallThemeMode] =
		useState<boolean>(initialThemeIsFall)

	console.log(savedTheme, isFallThemeMode)

	const handleClick = (ref: RefObject<HTMLTextAreaElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth" })
	}

	const onToggleTheme = () => {
		const newActiveTheme: string = isFallThemeMode
			? SPRING_THEME_NAME
			: FALL_THEME_NAME
		setIsFallThemeMode(!isFallThemeMode)
		localStorage.setItem("theme", newActiveTheme)
		document.body.dataset.theme = newActiveTheme
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
			<div className={styles.controlBar}>
				<ToggleSwitch
					isOn={!isFallThemeMode}
					onToggleTheme={onToggleTheme}
					offLabel="Autumn mode"
					onLabel="Spring mode"
				/>
			</div>
		</nav>
	)
}

export default NavigationBar
