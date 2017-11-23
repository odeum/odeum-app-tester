import * as React from 'react'
import md from 'react-markings'
import ReactMarkdown from 'react-markdown'

const input = "# This is a header\n\nAnd this is a paragraph\n\n"

export const Remark = () => {
	return <ReactMarkdown source={input}/>
}

function Example() {
	const content = `
	<AppContainer>
		<Header/>
		<MenuPanel>
			<Menu>
				<Tab/>
				<Tab/>
				<Tab/>
			</Menu>
		</MenuPanel>
		<Footer/>
	</AppContainer>
	`
	return (
		<pre>
			<code>{content}</code>
		</pre>
	)
}

export default function Markdown() {
	return md`
    # react-markings

    > Markdown in components, components in markdown

	\`\`\`js
	const func = () => {
		// here is your js code
	}
	\`\`\`
	
    - Allows you to write markdown using [commonmark.js](https://github.com/commonmark/commonmark.js)
    - Renders markdown as React elements using [commonmark-react-renderer](https://github.com/rexxars/commonmark-react-renderer)
	- Embed React components inside your markdown (in any paragraph position) like this:
	
${<Example />}
  `
}