import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import { Grid } from "@material-ui/core";
import { Grow } from '@material-ui/core';


const item = require("../finalPage.json");

class FinalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activie: true,
            selectItem: item.finalPage.details[2]
        }
    }

    setItem(e) {
        this.setState({
            selectItem: e
        })
    }

    getProfileData(data) {
        return <>
            {data.details.map((e, index) => {
                return <>
                    <div className={this.state.selectItem.name === e.name ? `${"active_iamge"} ${"profile_image"}` : "profile_image"}>
                        <Avatar alt="Remy Sharp" onClick={this.setItem.bind(this, e)} src={e.image} />
                        {this.state.selectItem.name === e.name && <div className="profiledesc">
                            <h5>{this.state.selectItem.name}</h5>
                            <p>{this.state.selectItem.position}</p>
                        </div>
                        }
                    </div>
                </>
            })
            }
        </>
    }

    render() {
        const data = item.finalPage;
        return (
            <Grid container className="finalPage">
                <Grid item md={4} xl={4} />
                <Grid item md={4}>
                    <div>
                        <h3 className="final_page_title">{data.title}</h3>
                        <div className="final_page_desc">
                            {this.state.selectItem &&
                                <Grow timeout={true ? 5000 : ""} in={true}>
                                    <div className="finalPage_content">
                                        <p style={{ color: "#08150A" }} className="all_description_text"><span>{'   '}</span>{this.state.selectItem.description}</p>
                                    </div>
                                </Grow>
                            }
                        </div>
                        <div className="finalPage_box">
                            {this.getProfileData(data)}
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} />
            </Grid>
        );
    }
}

export default FinalPage;
