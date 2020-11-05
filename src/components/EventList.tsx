import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as moment from 'moment';
import blockies from 'ethereum-blockies';
import { generateLogText } from '../utils';

interface IEventListProps {
  eventData: any
}



const useStyles = makeStyles(() => ({
  eventList: {
    borderRadius: '6px',
    boxShadow: '5px 10px 6px -6px rgba(62, 118, 244, 0.14)',
    margin: 'auto',
    overflow: 'hidden',
    width: '700px'
  },
  eventListItem: {
    backgroundColor: 'white',
    boxSizing: 'border-box',
    display: 'flex',
    height: '90px',
    padding: '26px 20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  avatar: {
    borderRadius: '50%',
    padding: '0.5px'
  },
  logText: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1',
    display: '-webkit-box',
    overflow: 'hidden',
    textAlign: 'left'
  }
}));


const EventList = (props: IEventListProps) => {
  const classes = useStyles();

  const [visibleCount, setVisibleCount] = useState(20);

  return (
    <div>
      <div className={classes.eventList}>
        {props.eventData.map((event: any, index: number) => (
          visibleCount > index && <div className={classes.eventListItem}
            key={index}>
            <div style={{ marginRight: '15px' }}>
              <img
                className={classes.avatar}
                src={blockies.create({
                  bgcolor: '#aaa',
                  color: 'random',
                  scale: 4,
                  seed: event.address,
                  size: 9
                }).toDataURL()} />
            </div>
            <div>
              <div
                className={classes.logText}
                data-tip={true} data-for={`overflow${index}`}
                dangerouslySetInnerHTML={{ __html: generateLogText(event) }} />
              <ReactTooltip id={`overflow${index}`} type='error'>
                <span dangerouslySetInnerHTML={{ __html: generateLogText(event) }} />
              </ReactTooltip>
              <div style={{ textAlign: 'left' }}>{moment(event.logTime).format('LL')}</div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < props.eventData.length && <Button onClick={() => setVisibleCount(visibleCount + 10)}> Show More </Button>}
    </div>
  );
};

export default connect(null)(EventList);
