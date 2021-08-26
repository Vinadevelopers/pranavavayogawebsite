import * as React from "react";
import "./customeStyle.css";
import FirstPage from "./pages/firstPage";
import SecoundPage from "./pages/secoundPage";
import ThirdPage from "./pages/thirdpage";
import FourthPage from "./pages/fourthpage";
import TimeTable from "./pages/timeTabel";
import FinalPage from "./pages/finalPage";
import Footer from "./footer";
import { Link } from 'react-scroll';
import Lefticon from "./image/left-icon.gif";
import Righticon from "./image/right-icon.gif";

const Item = require("./details.json")

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    getSessionList() {

        this.setState({
            show: !this.state.show,
        })

    }

    render() {
        return (
            <div className="home_page_root_container">
                <div className="home_page_inner_container">
                    <div id="image_view" >   <FirstPage /></div>
                </div>
                <div className="page_loaded">
                    <div id="firstPage"><SecoundPage /></div>
                </div>
                <div className="page-load-secound-part">
                    <div id="secondPage"> <ThirdPage />  <FourthPage /></div>
                </div>
                <div className="page-load-third-part">
                    <div id="thirdPage"><TimeTable /></div>
                </div>
                <div className="page-load-finalPart">
                    <div className="forth-footer-page">
                        <div id="fourthPage"><FinalPage /></div>
                        <div id="contact">  <Footer /></div>
                    </div>
                </div>
                <div className="page-list-display">
                    {!this.state.show ? <img src={Lefticon} className={this.state.show ? "true-scroll-page-container-image" : "scroll-page-contianer-image"} onClick={this.getSessionList.bind(this)} />
                        : <img src={Righticon} className={this.state.show ? "true-scroll-page-container-image" : "scroll-page-contianer-image"} onClick={this.getSessionList.bind(this)} />
                    }
                    <div className="scroll-page-contianer">
                        {this.state.show && <div className="visible-text">
                            {
                                Item.session.map(e => {
                                    return <Link className="option-render" onClick={this.getSessionList.bind(this)} to={e.id} hashSpy={true} spy={true} smooth={true}>
                                        {e.displayName}
                                    </Link>
                                })
                            }
                        </div>
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
