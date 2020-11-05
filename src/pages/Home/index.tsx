
import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IState } from '../../store/reducers';


import EventList from '../../components/EventList';
import { getEventData } from '../../store/actions/colony';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  appContainer: {
    background: 'linear-gradient(#f4f0f3, #eaf3f7)',
    boxSizing: 'border-box',
    minHeight: '100vh',
    padding: '40px 0px',
    textAlign: 'center',
    fontFamily: 'Mulish'
  }
}));

interface IStateProps {
  eventData: any,
  getEventData: any
}

interface IDispatchProps {
  getEventData: () => void
}


const Home = (props: RouteComponentProps<any> & IStateProps & IDispatchProps) => {
  const classes = useStyles();

  useEffect(() => {
    props.getEventData();
    // code to run on component mount
  }, []);

  return (
    <div className={classes.appContainer}>
      {props.eventData !== null ?
        <EventList eventData={props.eventData} /> : <p>Loading...</p>}
    </div>
  );
};


const mapStateToProps = (state: IState) => ({
  eventData: state.colony.eventData
});

const mapDispatchToProps = (dispatch: any) => ({
  getEventData: () => dispatch(getEventData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

