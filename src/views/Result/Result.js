import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

const Result = () => {
  const risksObj = useSelector(store => store.riskReducer);
  const risks = risksObj.risksInfo;
  const lastestIndex = risks.length - 1;
  const lastestRisks = risks[lastestIndex];
  const {
      age, 
      weight, 
      height, 
      isSmoking, 
      isDrinking, 
      isVacineHepB, 
      isExposure, 
      isRenalFailure, 
      isDM, 
      isHT, 
      isDLP, 
      isHepatitis, 
      isPancreaitisge, 
      isColitis, 
      isOsteoporosis, 
      isAsthma, 
      isStone, 
      isMI, 
      isCAColon, 
      isCAProstate, 
      isCALiver, 
      isCAPancreas, 
      isCAOthers

  } = lastestRisks

  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>ตรวจร่างกายทั่วไป</div>
        <div>CBC, Renal Function, Urine anaylsis, Liver Function Test, Dental check up</div>
        {age >= 18 && age < 20 ? <div>Dental x-ray</div>: null}
        {age >= 20 && age < 35 && isDM && isHT ? <div>Lipid Profile</div>: null}
      </Grid>
    </Container>
  );
};

export default Result;
