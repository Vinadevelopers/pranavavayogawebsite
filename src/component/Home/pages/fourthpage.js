import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Image1 from "../image/image1.jpg";
import Image2 from "../image/image2.jpg";
import Image3 from "../image/image3.jpg";
import Image4 from "../image/image4.jpg";
import Image5 from "../image/image5.jpg";
import Image6 from "../image/image6.jpg";
import Image7 from "../image/image7.jpg";
import Image8 from "../image/image8.jpg";

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
                    <ImageListItem cols={4}>
                        <img src={Image3} alt="image3" />
                    </ImageListItem>
                    <ImageListItem cols={8}>
                        <img src={Image4} alt="image1" />
                    </ImageListItem>
                </ImageList>
            </div>
            <div>
                <ImageList className={classes.imageList} cols={24}>
                    <ImageListItem cols={8}>
                        <img src={Image5} alt="image1" />
                    </ImageListItem>
                    <ImageListItem cols={16}>
                        <img src={Image6} alt="image3" />
                    </ImageListItem>
                    <ImageListItem cols={10}>
                        <img src={Image7} alt="image2" />
                    </ImageListItem>
                    <ImageListItem cols={14}>
                        <img src={Image8} alt="image2" />
                    </ImageListItem>
                </ImageList>
            </div>
        </div>
    );
}
