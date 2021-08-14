import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Image1 from "../image/image_3.jpg";
import Image2 from "../image/image_4.jpg";
import Image3 from "../image/image_5.jpg";
import Image4 from "../image/image_1.jpg";

const item = require("../details.json");

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
    },
}));

export default function FourthPage() {
    const classes = useStyles();
    return (
        <div className="image_page">
            <div>
                <ImageList className={classes.imageList} cols={12}>
                    <ImageListItem cols={6}>
                        <img src={Image1} alt="image1" />
                    </ImageListItem>
                    <ImageListItem cols={6}>
                        <img src={Image2} alt="image2" />
                    </ImageListItem>
                    <ImageListItem cols={8}>
                        <img src={Image3} alt="image3" />
                    </ImageListItem>
                </ImageList>
            </div>
            <div>
                <ImageList className={classes.imageList} cols={24}>
                    <ImageListItem cols={8}>
                        <img src={Image4} alt="image1" />
                    </ImageListItem>
                </ImageList>
            </div>
        </div>
    );
}
