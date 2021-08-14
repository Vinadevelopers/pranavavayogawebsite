import * as React from "react";
import { Grid } from "@material-ui/core";
import Image3 from "../image/image_3.jpg";

const item = require("../details.json");

class ThirdPage extends React.Component {
    render() {
        return (
            <Grid container spacing={2} className="third_page_container">
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_image">
                        <img src={Image3} />
                    </div>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <h4>{item.ThirdPage["title"]}</h4>
                        <p>{item.ThirdPage["description1"]}</p>
                        <p>{item.ThirdPage["description2"]}</p>
                        <p>{item.ThirdPage["description3"]}</p>
                    </div>
                </Grid>
                {/* part1 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <h4>{item.ThirdPage.yogoClass.part1["title"]}</h4>
                        <p>{item.ThirdPage.yogoClass.part1["description"]}</p>
                    </div>
                </Grid>
                {/* part2 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <h4>{item.ThirdPage.yogoClass.part2["title"]}</h4>
                        <p>{item.ThirdPage.yogoClass.part2["description"]}</p>
                    </div>
                </Grid>
                {/* part3 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <h4>{item.ThirdPage.yogoClass.part3["title"]}</h4>
                        <p>{item.ThirdPage.yogoClass.part3["description"]}</p>
                    </div>
                </Grid>
                {/* part4 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <h4>{item.ThirdPage.yogoClass.part3["title"]}</h4>
                        <p>{item.ThirdPage.yogoClass.part3["description"]}</p>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default ThirdPage;
