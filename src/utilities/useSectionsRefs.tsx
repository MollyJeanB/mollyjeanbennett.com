import { useMemo, RefObject } from "react"
import { SectionContentType } from "@/components/homePageContent/sections"

export type SectionType = {
	content: SectionContentType
	ref: RefObject<HTMLTextAreaElement | null>
}

export const useSectionsRefs = (
	sections: SectionContentType[]
): SectionType[] => {
	const refs = useMemo(
		() =>
			sections.map(
				() => ({ current: null }) as RefObject<HTMLTextAreaElement | null>
			),
		[sections]
	)

	return sections.map((section, index) => ({
		ref: refs[index],
		content: section,
	}))
}
