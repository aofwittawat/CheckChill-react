import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Hero, Vertical } from './components';
import { useSelector } from 'react-redux';
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

// const bmiCalculated = async (weight, height) => {
//   const BMI = await (weight / (height * height)).toFixed(2)
//   return BMI
// }

const ResultMale = () => {
  const risksObj = useSelector(store => store.riskReducerMale);
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
        <Vertical risks={lastestRisks} />
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
          >
            BACK HOME
          </Button>
        </Link>
        <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ marginTop: 20, color:"white" }}
          >
            PRINT
          </Button>
      </SectionAlternate>
    </div>
  );
};

export default ResultMale;
