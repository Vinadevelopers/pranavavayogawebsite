import * as React from "react";
import Logo from "./image/Logo.png";
import { Link } from 'react-scroll';
const Item = require("./details.json")

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorEl: false,
            value: ""
        }
    }

    GetRightItem() {
        return Item.RightItem.map(e => {
            return <div className="righ_item">
                <a href={e.href} >{e.displayName} </a>
            </div>
        })
    }

    render() {
        return (
            <div className={this.props.id ? "contact-page-header header_container" : "header_container"}>
                <div className="header_left_side">
                    <img src={Logo} className="logo" />
                    {/* <p className="white-text">The Meaning Of Life</p>                    */}
                </div>
                <div className="header_right_side">
                    <div className="heder-right-item-container">
                        {this.GetRightItem()}
                    </div>
                </div>
            </div >
        );
    }
}

export default Header;
