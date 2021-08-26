import * as React from "react";
import Logo from "./image/Logo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-scroll';

const Item = require("./details.json")

class Footer extends React.Component {

    GetRightItem() {
        return Item.footerDetails.item.map(e => {
            return <div className="righ_item" id={e.id}>
             <Link to={e.id} spy={true} smooth={true}>{e.displayName}</Link>
            </div>
        })
    }

    render() {
        return (
            <div id="contact" className="Footer_container">
                <div className="footer_center_logo">
                    <img src={Logo} className="logo" />
                </div>
                <div className="footer_option">
                    {this.GetRightItem()}
                </div>
                <div className="footer_socical_icon">
                    <Avatar className="facebook">
                        <FacebookIcon />
                    </Avatar>
                    <Avatar className="insta" >
                        <InstagramIcon />
                    </Avatar>
                    <Avatar className="youtupe">
                        <YouTubeIcon />
                    </Avatar>
                    <Avatar className="twitter" >
                        <TwitterIcon />
                    </Avatar>
                </div>
            </div>
        );
    }
}

export default Footer;
