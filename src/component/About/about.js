import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "../Home/header";
const page = require("./about.json")
class AboutPage extends React.Component {

    render() {
        return <div className="contact-page-container">
            <Header id={true} />
            <Grid container spacing={2} className="contact-page">
                <Grid className="about-title" item md={12} sm={12} xs={12}>
                    <h4>{page.title}</h4>
                </Grid>
                <Grid className="address-field-root" item md={12} sm={11} xs={11}>
                    <div className="about-field">
                        <p>{page.abouts_content}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    }
}

export default AboutPage;