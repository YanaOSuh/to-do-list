import { Component } from "react";
import bulletArrow from "./bulletArrow.png"
import checkIcon from "./circleICon.png"

export class CheckItem extends Component {
    state = {
        icon: bulletArrow
    }

    changeIcon = (e) => {
        const list = e.target;
        if (list.classList.toggle('crossed')) {
            this.setState({ icon:checkIcon });
        } 
        else {
            this.setState({ icon:bulletArrow });
        }
    }

render() {
    const {item, index} = this.props

    return(
        <li onClick={this.changeIcon} key={index}>
            <img className="bulletImg" src={this.state.icon} alt="bullet" width="25px" />
            {item}
        </li>
    )
    } 
}