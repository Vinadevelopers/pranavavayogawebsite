import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Image1 from "../image/image_1.jpg";
import Image2 from "../image/image_2.jpg";
import { Grid } from "@material-ui/core";

const item = require("../details.json");

class FinalPage extends React.Component {
    render() {
        return (
            <Grid container className="finalPage">
                <Grid item md={4} xl={4} />
                <Grid item md={4}>
                    <div className="finalPage_box">
                        <div className="finalPage_content">
                            <h3>{item.finalPage.title}</h3>
                            <p>{item.finalPage.description}</p>
                        </div>
                        <div className="profile_image">
                            <Avatar alt="Remy Sharp" src={Image1} />
                            <Avatar alt="Remy Sharp" src={Image2} />
                            <Avatar alt="Remy Sharp" src={Image1} />
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} />
            </Grid>
        );
    }
}

export default FinalPage;
