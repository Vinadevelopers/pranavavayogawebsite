import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Grid } from "@material-ui/core";


const item = require("../details.json");

export const appointments = [
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 25, 9),
        endDate: new Date(2018, 5, 25, 10),
        id: 0,
        location: 'Room 1',
    }, {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 26, 9, 0),
        endDate: new Date(2018, 5, 26, 10, 0),
        id: 1,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 26, 10, 0),
        endDate: new Date(2018, 5, 26, 11, 0),
        id: 1,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 27, 10, 0),
        endDate: new Date(2018, 5, 27, 11, 0),
        id: 1,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 29, 9, 0),
        endDate: new Date(2018, 5, 29, 10, 0),
        id: 1,
        location: 'Room 1',
    },
];

class TimeTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
            currentDate: '2018-06-27',
        };

        this.changeLocale = event => this.setState({ locale: event.target.value });
    }
    render() {
        const { data, currentDate } = this.state;

        return (
            <div className="timeTable_page">
                <Grid container className="timetable_container">
                    <Grid item md={4} xl={4} />
                    <Grid item md={4}>
                        <div className="timeTable_page_inner_container">
                            <h3>{item.TimeTable.title}</h3>
                            <p className="all_description_text"><span>{'   '}</span>{item.TimeTable.description}</p>
                        </div>
                    </Grid>
                </Grid>
                <Paper>
                    <Scheduler
                        data={data}
                        // height={630}
                       
                    >
                        <ViewState
                            defaultCurrentDate={currentDate}
                        />
                        <WeekView
                
                            startDayHour={5}
                            intervalCount={1}
                            cellDuration={60}
                            endDayHour={19}
                            
                        />
                        <Toolbar />
                        <Appointments />
                    </Scheduler>
                </Paper>
            </div >
        );
    }
}

export default TimeTable;
