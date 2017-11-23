<<<<<<< HEAD
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
=======
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
>>>>>>> d14eecf2069301b13a22f9d074476938cc90f38b
