import React, { Component } from 'react'
import { 
	AppContainer,
	Header, 
	MenuPanel, 
	Menu,
	Tab,
	Workspace, 
	Footer } from 'odeum-app'

/* Demo */
import RouteDemo from 'demos/RouteDemo'
import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'
import Markdown from 'demos/Markdown'
import { RenderFooterLabel, handleLink } from './demos/FooterLabel'
import greenTheme from 'demos/greenTheme'
class App extends Component {
	/*Temporary Help Demo */

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}

		Menu.defaultProps = {
			setHelpID: this.setHelpID,
			icon: 'menu' // TODO: why? Now i know why :) 
		}

		Tab.defaultProps = {
			setHelpID: this.setHelpID,
			label: 'Tab', // TODO: why? Now i know why :) 
			icon: 'tab' // TODO: why? Now i know why :) 
		}

		Workspace.defaultProps = {
			setHelpID: this.setHelpID
		}

	}

	setHelpID = (helpID) => {
		// console.log(helpID)
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}

	/*End TempDemo */
	render() {
		return (
			<AppContainer theme={greenTheme}>
				{/* 
				Todo: Use default theme transparently and include theme prop in AppContainer that overwrites default theme
				*/}
				<Header logo={'default'}/>
				<MenuPanel>
					<Menu route={'/'} exact helpID={10}>
						<SimpleDiv />
					</Menu>
					<Menu route={'/home'} label={'Menu with no tabs'} icon={'home'}>
						<Workspace helpID={120}>
							<SimpleDiv />
							<ReactComp />
						</Workspace>
					</Menu>

					<Menu icon={'people'} route={'/child'} label={'Menu with one Tab and a Route Demo'}>
						<Tab icon={'assignment'} label={'Overflow'} helpID={11}>
							<RouteDemo />
						</Tab>
					</Menu>
					<Menu icon={'tab'} route={'/children'} label={'Menu with children'}>
						<Tab icon={'assignment'} label={'Overflow'} helpID={104}>
							<SimpleDiv />
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Lady Gaga'} route={'/react-component'} helpID={12}>
							<ReactComp helpID={2} />
						</Tab>
						<Tab icon={'visibility'} label={'Hello workspace'} route={'/workspace'} helpID={13}>
							<div>Hello Workspace ... </div>
						</Tab>
					</Menu>
					<Menu label={'Auto Generated'}>
						<Tab label={'Route'} helpID={42}>
							Auto Generated Route
						</Tab>
					</Menu>

					<Menu icon={'drafts'} label={'I have help'}>
						<Workspace helpID={43}>							
							<Markdown />
						</Workspace>					
					</Menu>

					{/* 					
					Todo: Create defaultprops for Menu and Tab so they can be used without any props (label, icon, ... so why don't we use them?)
					*/}

				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpID={this.state.helpID} />
			</AppContainer>
		)
	}
}


export default App


