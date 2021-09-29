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
                {e.id === "home" ?
                    <Link className="a-link" to={e.id} spy={true} smooth={true}>{e.displayName}</Link>
                    : <a href={e.href} >{e.displayName} </a>
                }
            </div>
        })
    }

    render() {
        const renderHTML = (rawHTML) => React.createElement("div", { class: "copy-right", dangerouslySetInnerHTML: { __html: rawHTML } });
        return (

            <div id="contact" className="Footer_container">
                <div className="footer_center_logo">
                    <img src={Logo} className="logo" />
                    <p className="white-text">The Meaning Of Life</p>
                </div>
                <div className="footer_option">
                    {this.GetRightItem()}
                </div>
                <div className="footer_socical_icon">
                    <Avatar className="facebook">
                        <a target="_new" href="https://www.facebook.com/pranavayogacbe"><FacebookIcon /></a>
                    </Avatar>
                    <Avatar className="insta" >
                        <a target="_new" href="https://www.instagram.com/pranavayoga_/"><InstagramIcon /></a>
                    </Avatar>
                    <Avatar className="youtupe">
                        <a target="_new" href="https://www.youtube.com/channel/UCD4097lpQKti5twtb0C8oPw"><YouTubeIcon /></a>
                    </Avatar>
                    <Avatar className="twitter" >
                        <a target="_new" href="https://twitter.com/home"><TwitterIcon /></a>
                    </Avatar>
                </div>
                <div className="copy-right-line">
                    {renderHTML("<p> &#169 2021 - Pranavayagocbe.com</p>")}
                    <p className="devloper-name">
                        Developed by : Vinatechnologies
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
