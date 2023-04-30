import Head from "next/head"
import styles from "@/styles/page.module.css"
import { HandstandHero, Header, NavigationBar } from "@/components"
import { useSectionsRefs } from "@/utilities/useSectionsRefs"
import { sections } from "@/content/sections"

export default function Home() {
	const pageSections = useSectionsRefs(sections)
	console.log(pageSections)
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
				<NavigationBar pageSections={pageSections} />
				<HandstandHero>
					<Header title={"Hi, I'm Molly Jean."} />
				</HandstandHero>
				{pageSections.map((section) => (
					<section ref={section.ref} key={section.content.title}>
						{section.content.body}
					</section>
				))}
			</main>
		</>
	)
}
