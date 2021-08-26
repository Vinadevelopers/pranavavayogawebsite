import * as React from "react";
import { Grid } from "@material-ui/core";
import Image3 from "../image/online-yoga.jpg";
import YOGO from "../image/icons-guru.png";
import LOTUS from "../image/icons-lotus.png";
import LOTUS1 from "../image/icons-yoga1.png";
import MATTE from "../image/icons-yoga-mat.png";
import Avatar from '@material-ui/core/Avatar';

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
                        <h3>{item.ThirdPage["title"]}</h3>
                        <p className="all_description_text_color">{item.ThirdPage["description1"]}</p>
                        <p className="all_description_text_dark">{item.ThirdPage["description2"]}</p>
                        <p className="all_description_text">{item.ThirdPage["description3"]}</p>
                    </div>
                </Grid>
                {/* part1 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <Avatar alt="Remy Sharp" src={YOGO} />
                        <h3>{item.ThirdPage.yogoClass.part1["title"]}</h3>
                        <p className="all_description_text">{item.ThirdPage.yogoClass.part1["description"]}</p>
                    </div>
                </Grid>
                {/* part2 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <Avatar alt="Remy Sharp" src={LOTUS} />
                        <h3>{item.ThirdPage.yogoClass.part2["title"]}</h3>
                        <p className="all_description_text">{item.ThirdPage.yogoClass.part2["description"]}</p>
                    </div>
                </Grid>
                {/* part3 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <Avatar alt="Remy Sharp" src={LOTUS1} />
                        <h3>{item.ThirdPage.yogoClass.part3["title"]}</h3>
                        <p className="all_description_text">{item.ThirdPage.yogoClass.part3["description"]}</p>
                    </div>
                </Grid>
                {/* part4 */}
                <Grid item md={6} sm={6} xs={12}>
                    <div className="third_page_title">
                        <Avatar alt="Remy Sharp" src={MATTE} />
                        <h3>{item.ThirdPage.yogoClass.part4["title"]}</h3>
                        <p className="all_description_text">{item.ThirdPage.yogoClass.part4["description"]}</p>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default ThirdPage;
