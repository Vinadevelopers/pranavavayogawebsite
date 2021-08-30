import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "../Home/header";
const page = require("./contact.json")
class ContactPage extends React.Component {

    render() {
        const { Address } = page;
        return <div className="contact-page-container">
            <Header id={true} />
            <Grid container spacing={2} className="contact-page">
                <Grid className="contact-title" item md={5} sm={12} xs={12}>
                    <h4>{page.id}</h4>
                </Grid>
                <Grid className="address-field-root" item md={7} sm={12} xs={12}>
                    <div className="address-field">
                        <p>{Address.Line1}</p>
                        <p>{Address.Line2}</p>
                        <p>{Address.Line3}</p>
                        <p>{Address.Line4}</p>
                        <p>{Address.Line5}</p>
                        <div className="please-contact">
                            <p>{Address.PleaseContact}</p>
                            <p className="highlight">{Address.heighlight_PleaseContact}</p>
                        </div>
                        <p>{Address.phone_no}</p>
                        <p>{Address.WhatsApp}</p>
                        <p>{Address.Email}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    }
}

export default ContactPage;