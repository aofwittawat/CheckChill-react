import React from 'react';
import { useSelector } from 'react-redux';

const endReport = {
    generalTest : "CBC, Renal Function(BUN, Cr), Urine analysis, Liver Function Test(AST, ALT), Dental Check Up",
    
}


const Result = () => {
    
    const risksObj = useSelector(store => store.riskReducer);
    const risks = risksObj.risksInfo;
    const lastestIndex = risks.length - 1;
    const lastestRisks = risks[lastestIndex];
 
  console.log(lastestRisks);

  return (

    <div>Report</div>

  );
};

export default Result;
