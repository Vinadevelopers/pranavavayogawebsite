import * as React from "react";
import Header from "../header";
const item = require("../details.json");

class FirstPage extends React.Component {
    render() {
        return (
            <div id="home" className="first_page">
                <div className="first_text_box">
                    <div className="image-inside-header" id="home">
                        <Header />
                    </div>
                    <div className="first_page_content">
                        <div style={{ "alignSelf": "center" }}>
                            <p className="first-page-title ">{item.firstPage.title}</p>
                            <div className="first-page-descr-contianer">
                                <p className="first-page-descr">{item.firstPage.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstPage;
