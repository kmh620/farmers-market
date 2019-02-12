import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';


// const styles = {
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9,
//     marginTop:'30'
//   }
// };

const cardStyle = {
  maxWidth: 345,
}

function Day(props){
  return (
      // <style global jsx>{`
      //   div {
      //     display: inline-block;
      //   }
      // `}</style>
      // <CardMedia
      //   style={{height: 10, paddingTop: '20%'}}
      //   image={props.day.image}/>

      <div>
        { props.day ? (
          <Card style={cardStyle}>
            <CardActionArea>
            <CardContent>
              <h3><em>{props.day}</em></h3>
              <p>{props.location}</p>
              <p>{props.hours}</p>
              <p>{props.booth}</p>
            </CardContent>
          </CardActionArea>
          </Card>
        ): null }
    </div>
  );
}

Day.propTypes = {
  image: PropTypes.string,
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
