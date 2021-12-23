import React, { Component } from 'react'

export default class Button extends Component {
    constructor() {
        super()
        this.state = {
            isClicked: ""
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.setState({isClicked: "A"})} className={this.state.isClicked === "A" ? 'underline' : ""}>
                    A: underline me
                </button><br />
                <button onClick={() => this.setState({isClicked: "B"})} className={this.state.isClicked === "B" ? 'italicize' : ""}>
                    B: Italicize me
                </button><br />
                <button onClick={() => this.setState({isClicked: "C"})} className={this.state.isClicked === "C" ? 'bold' : ""}>
                    C: I'm bold!
                </button>
            </div>
        )
    }
}
