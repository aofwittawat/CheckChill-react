import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Hero,
  Vertical,
} from './components';
import {useSelector} from 'react-redux'


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const BlogReachView = () => {
  const risksObj = useSelector(store => store.riskReducer);
  const risks = risksObj.risksInfo;
  const lastestIndex = risks.length - 1;
  const lastestRisks = risks[lastestIndex];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <SectionAlternate>
        
        <Vertical   risks={lastestRisks}/>
        <Section>
          <Divider />
        </Section>
       
        
      </SectionAlternate>
    </div>
  );
};

export default BlogReachView;
