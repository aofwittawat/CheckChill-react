import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Hero,
  Vertical,
} from './components';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


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

const ResultFemale = () => {
  const risksObj = useSelector(store => store.riskReducerFemale);
  const risks = risksObj.risksInfo;
  const lastestIndex = risks.length - 1;
  const lastestRisks = risks[lastestIndex];
  const weight = Number(lastestRisks.weight)
  const height = Number(lastestRisks.height / 100)
  const BMI = (weight / (height * height)).toFixed(2)
  console.log("BMI:" + BMI);
  console.log(lastestRisks);





  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <SectionAlternate>
        <Vertical risks={lastestRisks} bmi={BMI} />
        <Link to="/">
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>BACK HOME</Button>
        </Link>
      </SectionAlternate>
    </div>
  );
};

export default ResultFemale;
