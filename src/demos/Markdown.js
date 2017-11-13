import React from 'react'
import Md from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import file from './markdownfile.md'

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

const Markdown = () =>
	<Md options={{ highlight }}>{`
# Header 1
## Header 2
### Header 3
#### Header 4

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
  `}</Md>

export default Markdown