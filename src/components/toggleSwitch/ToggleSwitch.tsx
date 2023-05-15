import React from "react"
import styles from "./toggleSwitch.module.css"

type PropsType = {
	isOn: boolean
	onToggleTheme: () => void
	onLabel: string
	offLabel: string
}

export const ToggleSwitch: React.FC<PropsType> = ({
	isOn,
	onToggleTheme,
	onLabel,
	offLabel,
}) => {
	console.log(isOn)
	const ariaLabelText: string = `Turn ${isOn ? offLabel : onLabel} on.`
	return (
		<label className={styles.toggleLabel} htmlFor="toggle">
			<input
				type="checkbox"
				name="toggle"
				id="toggle"
				aria-label={ariaLabelText}
				className={styles.toggleInput}
				onChange={onToggleTheme}
				checked={isOn}
			/>
			<span className={styles.toggleDisplay}>
				<span
					aria-hidden={true}
					className={`${styles.emoji} ${styles.emojiLeft}`}
				>
					🍁
				</span>
				<span
					aria-hidden={true}
					className={`${styles.emoji} ${styles.emojiRight}`}
				>
					🌸
				</span>
			</span>
			{isOn ? onLabel : offLabel}
		</label>
	)
}
