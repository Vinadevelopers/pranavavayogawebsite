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
        startDate: new Date(2018, 5, 24, 5.30),
        endDate: new Date(2018, 5, 24, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 24, 7),
        endDate: new Date(2018, 5, 24, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 24, 8.30),
        endDate: new Date(2018, 5, 24, 9.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 24, 18),
        endDate: new Date(2018, 5, 24, 19),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 24, 19.30),
        endDate: new Date(2018, 5, 24, 20.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 24, 10.30),
        endDate: new Date(2018, 5, 24, 11.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 24, 15.30),
        endDate: new Date(2018, 5, 24, 16.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 24, 17),
        endDate: new Date(2018, 5, 24, 18),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 25, 5.30),
        endDate: new Date(2018, 5, 25, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 25, 7),
        endDate: new Date(2018, 5, 25, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 25, 8.30),
        endDate: new Date(2018, 5, 25, 9.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 25, 18),
        endDate: new Date(2018, 5, 25, 19),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 25, 19.30),
        endDate: new Date(2018, 5, 25, 20.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 25, 10.30),
        endDate: new Date(2018, 5, 25, 11.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 25, 15.30),
        endDate: new Date(2018, 5, 25, 16.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 25, 17),
        endDate: new Date(2018, 5, 25, 18),
        id: 0,
        location: 'Room 1',
    },    
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 26, 9, 0),
        endDate: new Date(2018, 5, 26, 10, 0),
        id: 1,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 26, 5.30),
        endDate: new Date(2018, 5, 26, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 26, 7),
        endDate: new Date(2018, 5, 26, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 26, 18),
        endDate: new Date(2018, 5, 26, 19),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 26, 19.30),
        endDate: new Date(2018, 5, 26, 20.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 26, 16),
        endDate: new Date(2018, 5, 26, 17),
        id: 1,
        location: 'Room 1',
    },    
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 27, 5.30),
        endDate: new Date(2018, 5, 27, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 27, 7),
        endDate: new Date(2018, 5, 27, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 27, 8.30),
        endDate: new Date(2018, 5, 27, 9.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 27, 18),
        endDate: new Date(2018, 5, 27, 19),
        id: 0,
        location: 'Room 1',
    },   
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 27, 10.30),
        endDate: new Date(2018, 5, 27, 11.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 27, 15.30),
        endDate: new Date(2018, 5, 27, 16.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 27, 17),
        endDate: new Date(2018, 5, 27, 18),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 28, 5.30),
        endDate: new Date(2018, 5, 28, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 28, 7),
        endDate: new Date(2018, 5, 28, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 28, 8.30),
        endDate: new Date(2018, 5, 28, 9.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 28, 18),
        endDate: new Date(2018, 5, 28, 19),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 28, 19.30),
        endDate: new Date(2018, 5, 28, 20.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 28, 10.30),
        endDate: new Date(2018, 5, 28, 11.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 28, 15.30),
        endDate: new Date(2018, 5, 28, 16.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 28, 17),
        endDate: new Date(2018, 5, 28, 18),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 29, 5.30),
        endDate: new Date(2018, 5, 29, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 29, 7),
        endDate: new Date(2018, 5, 29, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 29, 8.30),
        endDate: new Date(2018, 5, 29, 9.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 29, 18),
        endDate: new Date(2018, 5, 29, 19),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 29, 19.30),
        endDate: new Date(2018, 5, 29, 20.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 29, 10.30),
        endDate: new Date(2018, 5, 29, 11.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 29, 15.30),
        endDate: new Date(2018, 5, 29, 16.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 29, 17),
        endDate: new Date(2018, 5, 29, 18),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 30, 5.30),
        endDate: new Date(2018, 5, 30, 6.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 30, 7),
        endDate: new Date(2018, 5, 30, 8),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 30, 8.30),
        endDate: new Date(2018, 5, 30, 9.30),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 30, 18),
        endDate: new Date(2018, 5, 30, 19),
        id: 0,
        location: 'Room 1',
    },   
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 30, 10.30),
        endDate: new Date(2018, 5, 30, 11.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 30, 15.30),
        endDate: new Date(2018, 5, 30, 16.30),
        id: 0,
        location: 'Room 1',
    }, 
    {
        title: 'Ladies Class',
        startDate: new Date(2018, 5, 30, 17),
        endDate: new Date(2018, 5, 30, 18),
        id: 0,
        location: 'Room 1',
    },
    {
        title: 'Gents Class',
        startDate: new Date(2018, 5, 28, 5.30),
        endDate: new Date(2018, 5, 28, 6.30),
        id: 0,
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
                
                            startDayHour={4}
                            intervalCount={1}
                            cellDuration={60}
                            endDayHour={21}
                            
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
