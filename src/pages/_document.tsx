import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	const setInitialTheme = `
    function getUserPreference() {
    	if(window.localStorage.getItem('theme')) {
        	return window.localStorage.getItem('theme')
    	}
    }
    document.body.dataset.theme = getUserPreference();
`
	return (
		<Html lang="en">
			<Head />
			<body>
				<script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
