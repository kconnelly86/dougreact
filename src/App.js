import React from 'react';
import Doug from './components/Doug';
import Sketer from './components/Sketer';
import character from './character.json';
import Patty from './components/Patty';

class App extends React.Component {
	constructor() {
		super()
	this.state = {
		character: character
		}
	}
	

	render(){
		
		return(
				 <div> 
				<h1> Nickelodeon's Doug</h1>
				

				<Doug passingProps = {this.state.character[0]}/>
				<Sketer passingProps = {this.state.character[1]}/>
				<Patty passingProps = {this.state.character[2]}/>
				

				</div>

			)
	}
}
// const App = () =>



export default App;
