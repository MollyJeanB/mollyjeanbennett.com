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
	return (
		<label className={styles.toggleLabel} htmlFor="toggle">
			<input
				type="checkbox"
				name="toggle"
				id="toggle"
				className={styles.toggleInput}
				onChange={() => setIsOn(!isOn)}
			/>
			<span className={styles.toggleDisplay} />
			{isOn ? onLabel : offLabel}
		</label>
	)
}
