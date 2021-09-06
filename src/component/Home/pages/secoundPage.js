import * as React from "react";
import { Grid } from "@material-ui/core";
import Image1 from "../image/image_1.jpg";
import Image2 from "../image/rightsideImage.jpg";
import { getDeviceType } from "../helper";
const item = require("../details.json");

class SecoundPage extends React.Component {
    render() {
        const deviceMode = getDeviceType()
        return (
            <Grid container spacing={2} className="secound_page_container">
                <Grid className="1st_row left_image" item md={4} sm={6} xs={12}>
                    <div className="secound_page_image">
                        <img src={Image1} />
                    </div>
                </Grid>
                <Grid className="1st_row" item md={8} sm={6} xs={12}>
                    <div className="secound_page_title">
                        <h3>{item.secoundPage["title"]}</h3>
                        <p className="all_description_text">{item.secoundPage["description"]}</p>
                    </div>
                </Grid>
                {deviceMode !== "mobile" ? <> <Grid className="2nd_row" item md={8} sm={6} xs={12}>
                    <div className="secound_page_title1">
                        <h3>{item.secoundPage["secoundTitle"]}</h3>
                        <p className="highlight-words" >{item.secoundPage["highLightWords"]}</p>
                        <p className="all_description_text">{item.secoundPage["secoundDescription"]}</p>
                    </div>
                </Grid>
                    <Grid className="2nd_row" item md={4} sm={6} xs={12}>
                        <div className="secound_page_image1">
                            <img src={Image2} />
                        </div>
                    </Grid> </> : <Grid className="2nd_row" item md={8} sm={6} xs={12}>
                        <div className="secound_page_title1">
                            <h3>{item.secoundPage["secoundTitle"]}</h3>
                            <p className="highlight-words" >{item.secoundPage["highLightWords"]}</p>
                            <div className="secound_page_image1">
                                <img src={Image2} />
                            </div>
                            <p className="all_description_text">{item.secoundPage["secoundDescription"]}</p>
                        </div>
                    </Grid>
                }
            </Grid>
        );
    }
}

export default SecoundPage;
