import * as React from "react";
import "./customeStyle.css";
import Header from "./header";
import FirstPage from "./pages/firstPage";
import SecoundPage from "./pages/secoundPage";
import ThirdPage from "./pages/thirdpage";
import FourthPage from "./pages/fourthpage";
import TimeTable from "./pages/timeTabel";
import FinalPage from "./pages/finalPage";
import Footer from "./footer";


class Home extends React.Component {
    render() {
        return (
            <div className="home_page_root_container">
                <div className="home_page_inner_container">
                    <Header />
                    <div id="home">   <FirstPage /></div>
                    <SecoundPage />
                    <ThirdPage />
                    <FourthPage />
                    <TimeTable />
                    <FinalPage />
                    <div id="contact">  <Footer /></div>
                </div>
            </div>
        );
    }
}

export default Home;
