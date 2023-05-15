import React from "react"
import styles from "./toggleSwitch.module.css"

type PropsType = {
	isOn: boolean
	setIsOn: (isOn: boolean) => void
	onLabel: string
	offLabel: string
}

export const ToggleSwitch: React.FC<PropsType> = ({
	isOn,
	setIsOn,
	onLabel,
	offLabel,
}) => {
	const ariaLabelText: string = `Turn ${isOn ? offLabel : onLabel} on.`
	return (
		<label className={styles.toggleLabel} htmlFor="toggle">
			<input
				type="checkbox"
				name="toggle"
				id="toggle"
				aria-label={ariaLabelText}
				className={styles.toggleInput}
				onChange={() => setIsOn(!isOn)}
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
