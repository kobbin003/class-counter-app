import React from "react";

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	handleCounterChange(val) {
		this.setState({ count: this.state.count + val });
	}
	// handleCounterChange = (val) => {
	// 	this.setState({ count: this.state.count + val });
	// };

	// demoHandler = () => {
	// 	console.log("demo clicked", this.state.count);
	// };
	// demoHandler() {
	// 	this.setState({ count: 100 });
	// 	// console.log("demo clicked", this.state.count);
	// }

	render() {
		return (
			<>
				<h1>Counter App</h1>
				<p>Count: {this.state.count}</p>
				<div>
					<button onClick={() => this.handleCounterChange(1)}>Increment</button>
					<button onClick={() => this.handleCounterChange(-1)}>
						Decrement
					</button>
					{/* <button onClick={this.demoHandler}>demo</button> */}
				</div>
			</>
		);
	}
}
