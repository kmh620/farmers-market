import React from 'react';
import Day from './Day';
import Grid from '@material-ui/core/Grid';

const masterSchedule = [
  {
    image: '../../assets/images/cards/lents.png',
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function Schedule() {
  return (
    <div>
      <hr/>
      <Grid container spacing={24} style={{padding: 24}}>
        {masterSchedule.map((day, index) =>
          // <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Day day={day.day}
            location={day.location}
            hours={day.hours}
            booth={day.booth}
            key={index}/>
          // </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Schedule;
