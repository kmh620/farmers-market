import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const cardStyle = theme => ({
  cardSize: {
    maxWidth: 500,
    fontSize: '16px',
    padding: '15px',
    margin: '10px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class Month extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleExpandClick =
    this.handleExpandClick.bind(this);
  }

  handleExpandClick(){
    if (this.state.expanded === false){
      this.setState({expanded: true});
    } else {
      this.setState({expanded: false});
    }
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.cardSize}>

          <h2>{this.props.month}</h2>
          <hr></hr>
          <CardActions>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <ul>
                {this.props.selection.map(function(item, index){
                  return <Typography component="li" key={ index }>{item}</Typography>;
                })}
              </ul>

            </CardContent>
          </Collapse>

        </Card>
      </div>
    );
  }
}

Month.propTypes = {
  classes: PropTypes.object,
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

// export default Month;
export default withStyles(cardStyle)(Month);

// <div>
//   { props.month ? (
//     <Card style={cardStyle}>
//       <CardActionArea>
//       <CardContent>
//         <h3><em>{props.month}</em></h3>
//         <p>{props.location}</p>
//         <p>{props.hours}</p>
//         <p>{props.booth}</p>
//       </CardContent>
//     </CardActionArea>
//     </Card>
//   ): null }
// </div>
