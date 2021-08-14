import * as React from "react";
import { Grid } from "@material-ui/core";
import Image1 from "../image/image_1.jpg";
import Image2 from "../image/image_2.jpg";

const item = require("../details.json");

class SecoundPage extends React.Component {
    render() {
        return (
            <Grid container spacing={2} className="secound_page_container">
                <Grid className="1st_row" item md={6} sm={6} xs={12}>
                    <div className="secound_page_image">
                        <img src={Image1} />
                    </div>
                </Grid>
                <Grid className="1st_row" item md={6} sm={6} xs={12}>
                    <div className="secound_page_title">
                        <h4>{item.secoundPage["title"]}</h4>
                        <p>{item.secoundPage["description"]}</p>
                    </div>
                </Grid>
                <Grid className="2nd_row" item md={6} sm={6} xs={12}>
                    <div className="secound_page_title1">
                        <h4>{item.secoundPage["secoundTitle"]}</h4>
                        <p>{item.secoundPage["secoundDescription"]}</p>
                    </div>
                </Grid>
                <Grid className="2nd_row" item md={6} sm={6} xs={12}>
                    <div className="secound_page_image1">
                        <img src={Image2} />
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default SecoundPage;
