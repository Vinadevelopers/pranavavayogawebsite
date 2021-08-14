import * as React from "react";

const item = require("../details.json");

class FirstPage extends React.Component {
    render() {
        return (
            <div  id="home" className="first_page">
                <div className="first_text_box">
                    <div className="firsr_page_content">
                        <p>{item.firstPage.title}</p>
                        <p>{item.firstPage.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstPage;
