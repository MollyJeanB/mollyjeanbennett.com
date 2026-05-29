import { render, screen } from "@testing-library/react"
import { Chance } from "chance"
import { Header } from "./Header"

describe("GitHubLink component", () => {
	const chance = new Chance()
	const title: string = chance.word()
	const subTitle: string = chance.string()

	it("should render with title", () => {
		render(<Header title={title} />)

		expect(screen.getByText(title)).toBeInTheDocument()
	})

	it("should render with title and subtitle", () => {
		render(<Header title={title} subTitle={subTitle} />)

		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(subTitle)).toBeInTheDocument()
	})
})
