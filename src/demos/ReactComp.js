import React, { Component } from 'react'
import Workspace from 'odeum-app'
import { Button } from 'odeum-ui'

class ReactComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showVideo: false
		}
	}

	switch = () => this.setState({ showVideo: !this.state.showVideo })

	render() {
		return (
			<Workspace helpID={this.props.helpID}>
				<Button 
					label={'Show video: ' + String(this.state.showVideo).toLowerCase()} 
					icon={'play_circle_outline'}
					color={'#25B89A'} 
					onClick={this.switch}
				/>
				<div>
					{this.state.showVideo && <iframe 
						title={'Lady Gaga - Telephone ft. Beyoncé'} 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" 
						frameBorder="0" 
						allowFullScreen>
					</iframe>}
				</div>

			</Workspace>
		)
	}
}

export default ReactComp