import { render, screen } from "@testing-library/react"
import { GitHubLink, GITHUB_BUTTON_TITLE } from "./GitHubLink"

describe("GitHubLink component", () => {
	it("should render", () => {
		render(<GitHubLink link={"./"} />)

		expect(screen.getByText(GITHUB_BUTTON_TITLE)).toBeInTheDocument()
	})
})
