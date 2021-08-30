import * as React from "react";
import Logo from "./image/Logo.png";
import { Link } from 'react-scroll';
const Item = require("./details.json")

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorEl: false,
            value:""
        }
    }

    GetRightItem() {
        return Item.RightItem.map(e => {
            return <div className="righ_item">
                <Link to={e.id} spy={true} smooth={true}>{e.displayName}</Link>
            </div>
        })
    }

    render() {
        return (
            <div className="header_container">
                <div className="header_left_side">                
                    <img src={Logo} className="logo" /> 
                    {/* <p className="white-text">The Meaning Of Life</p>                    */}
                </div>
                <div className="header_right_side">
                    {this.GetRightItem()}
                </div>
            </div>
        );
    }
}

export default Header;
