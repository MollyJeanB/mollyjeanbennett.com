import Head from "next/head"
import styles from "@/styles/page.module.css"
import dynamic from "next/dynamic"
import { HandstandHero, Header, TextSection } from "@/components"
import { SectionType, useSectionsRefs } from "@/utilities/useSectionsRefs"
import { sections } from "@/components/homePageContent/sections"

const DynamicNavigationBar = dynamic(
	() => import("../components/navigationBar/NavigationBar"),
	{ ssr: false }
)

export default function Home() {
	const pageSections: SectionType[] = useSectionsRefs(sections)

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
				<DynamicNavigationBar pageSections={pageSections} />
				<HandstandHero>
					<Header title={"Hi, I'm Molly Jean."} />
				</HandstandHero>
				<div className={styles.calloutWrapper}>
					{pageSections.map((section) => {
						const { ref, content } = section
						return (
							<TextSection
								scrollRef={ref}
								key={content.title}
								heading={content.showTitle ? content.title : null}
							>
								{content.body}
							</TextSection>
						)
					})}
				</div>
			</main>
		</>
	)
}
