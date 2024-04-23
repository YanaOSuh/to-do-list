import { Component } from "react";

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toDateString()
        }
    }

    render() {
        return (
            <div>
                <p className="todaysDate">{this.state.time}</p>
            </div>
        )
    }
}