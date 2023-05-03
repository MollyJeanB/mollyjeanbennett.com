import React from "react"
import styles from "./footer.module.css"
import { GitHubIcon, LinkedInIcon } from "@/assets/svg"

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footerWrapper}>
			<a
				href={"../../assets/documents/MollyJeanBennett_Resume_April_2023.pdf"}
				target="_blank"
				className={styles.link}
			>
				{"Download Resume"}
			</a>
			<a href={"mailto:mollyjeanbennett@gmail.com"} className={styles.link}>
				{"mollyjeanbennett@gmail.com"}
			</a>
			<div className={styles.socialButtonsWrapper}>
				<a
					href="https://www.linkedin.com/in/mollyjeanbennett"
					target="_blank"
					className={styles.iconLink}
				>
					<LinkedInIcon width={60} height={60} className={styles.icon} />
				</a>
				<a
					href="https://github.com/MollyJeanB"
					target="_blank"
					className={styles.iconLink}
				>
					<GitHubIcon width={60} height={60} className={styles.icon} />
				</a>
			</div>
		</footer>
	)
}
