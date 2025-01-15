import React from "react"
import styles from "./footer.module.css"
import { BlueSkyIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "@/assets/svg"

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footerWrapper}>
			<a href="https://digitalseamripper.substack.com/" className={styles.link} target="_blank">
				Email newsletter
			</a>
			<a
				href={
					"https://mjb-portfolio-public-assets.s3.us-west-2.amazonaws.com/MollyJeanBennett_Resume_April_2023.pdf"
				}
				target="_blank"
				download
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
				<a
					href="https://bsky.app/profile/mollyjeanbennett.bsky.social"
					target="_blank"
					className={styles.iconLink}
				>
					<BlueSkyIcon width={60} height={60} className={styles.icon} />
				</a>
				<a
					href="https://www.instagram.com/mollyjeanbennett"
					target="_blank"
					className={styles.iconLink}
				>
					<InstagramIcon width={60} height={60} className={styles.icon} />
				</a>
			</div>
		</footer>
	)
}
