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
import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}

		Workspace.defaultProps = {
			SetHelpID: this.SetHelpID
		}

	}

	SetHelpID = (helpID) => {
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}

	render() {
		return (
			<AppContainer>
				<Header />
				<MenuPanel>
					<Menu route={'/'} exact>
						<Workspace helpID={0}>
							Home Demo
						</Workspace>
					</Menu>

					<Menu label={'Menu with no tabs'} icon={'home'} route={'/home'}>
						<Workspace helpID={1}>
							No tabs workspace
						</Workspace>
					</Menu>

					<Menu label={'Menu with children'} icon={'people'} route={'/children'}>
						<Tab icon={'assignment'} label={'Overflow'}>
							<Workspace helpID={2}>
								<SimpleDiv />
							</Workspace>
						</Tab>
						<Tab label={'Lady Gaga'} icon={'assignment_turned_in'} route={'/react-component'}>
							<Workspace helpID={3}>
								<ReactComp />								
							</Workspace>
						</Tab>
						<Tab label={'Hello workspace'} icon={'visibility'} route={'/workspace'}>
							<Workspace helpID={4}>
								<div>Hello Workspace ... </div>
							</Workspace>
						</Tab>
					</Menu>

					<Menu label={'Autogenerated routes'}>
						<Tab label={'Route'}>
							<Workspace helpID={5}>
								Auto generated route
							</Workspace>
						</Tab>
					</Menu>
				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} debug={String(this.state.helpID)} />
			</AppContainer>
		)
	}
}

const handleLink = () => {
	return '/home'
}

const RenderFooterLabel = () => {
	const date = new Date()
	return (
		<div>
			<strong>ODEUM Code</strong> v0.2.6 © Copyright
			{' '}{date.getFullYear()}
		</div>
	)
}

export default App

