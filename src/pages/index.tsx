import Head from "next/head"
import styles from "@/styles/page.module.css"
import { GitHubLink, HandstandHero, Header } from "@/components"

export default function Home() {
	return (
		<>
			<Head>
				<title>Molly Jean Bennett</title>
				<meta
					name="description"
					content="A Portland-based frontend engineer who's passionate about mentorship, community, and building wicked cool software."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<HandstandHero>
					<Header title={"Hi, I'm Molly Jean."} />
				</HandstandHero>
			</main>
		</>
	)
}
