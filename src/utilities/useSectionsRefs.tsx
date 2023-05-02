import { useRef, RefObject } from "react"
import { SectionContentType } from "@/content/sections"

export type SectionType = {
	content: SectionContentType
	ref: RefObject<HTMLTextAreaElement>
}

export const useSectionsRefs = (
	sections: SectionContentType[]
): SectionType[] => {
	let refIds: RefObject<HTMLTextAreaElement>[] = []
	return sections.map((section: SectionContentType, index) => {
		refIds[index] = useRef<HTMLTextAreaElement>(null)
		return { ref: refIds[index], content: section }
	})
}
