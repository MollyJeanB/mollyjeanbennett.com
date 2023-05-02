import React from "react"
import styles from "./footer.module.css"
import { GitHubIcon, LinkedInIcon } from "@/assets/svg"

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footerWrapper}>
			<a>Download Resume</a>
			<a>mollyjeanbennett@gmail.com</a>
			<div className={styles.socialButtonsWrapper}>
				<GitHubIcon width={40} height={40} />
				<LinkedInIcon width={40} height={40} />
			</div>
		</footer>
	)
}
