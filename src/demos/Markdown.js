import React from 'react'
import Md from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import file from './markdownfile.md'

console.log(file)

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
import React, { Component } from 'react'
import SomeComponent from './SomeComponent'

const func = () => {
// here is your js code
}

const MyComponent = () => <SomeComponent />

<MyComponent />

<AppContainer>
  <Header/>
    <MenuPanel>
	  <Menu route={'/'} exact helpID={10}>
		<Tab icon={'assignment'} label={'Overflow'} helpID={11}>
		</Tab>
		<Tab/>
		<Tab/>
	  </Menu>
	</MenuPanel>
	<Footer/>
</AppContainer>
\`\`\`
	`}</Md>

export default Markdown