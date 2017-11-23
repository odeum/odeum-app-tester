import React from 'react'
import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const highlight = (str, lang) => {
	if (lang && hljs.getLanguage(lang)) {
		try {
			return hljs.highlight(lang, str).value
		} catch (err) {
			console.error(err)
		}
	}

	try {
		return hljs.highlightAuto(str).value
	} catch (err) {
		console.error(err)
	}

	return ''
}

const MarkdownWithJs = () =>

	<Markdown options={{ highlight }}>{`
  # Header

  \`\`\`js
  const func = () => {
    // here is your js code
  }

  const MyComponent = () => <SomeComponent />

  <MyComponent />
  
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

  \`\`\`
  `}</Markdown>

export default MarkdownWithJs