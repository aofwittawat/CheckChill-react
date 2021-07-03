import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Textfield from './components/FormsUI/Textfield';
import {
  dataCancer,
  personalInfo,
  dataGeneral,
} from './components/data/mainData';
import Checkbox from './components/FormsUI/Checkbox';
import Buttonwrapper from './components/FormsUI/Button';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  age: '',
  weight: '',
  height: '',
  isSmoking: false,
  isDrinking: false,
  isVacineHepB: false,
  isExposure: false,
  isRenalFailure: false,
  isDM: false,
  isHT: false,
  isDLP: false,
  isHepatitis: false,
  isPancreaitis: false,
  isColitis: false,
  isOsteoporosis: false,
  isAsthma: false,
  isStone: false,
  isMI: false,
  isCAColon: false,
  isCAProstate: false,
  isCALiver: false,
  isCAPancreas: false,
  isCAOthers: false,
};

const FORM_VALIDATION = Yup.object().shape({
  age: Yup.number()
    .integer()
    .typeError('กรุณาใส่อายุ เป็นจำนวนปี')
    .required('Required'),
  weight: Yup.number()
    .integer()
    .typeError('กรุณาใส่น้ำหนัก เป็นจำนวนกิโลกรัม')
    .required('Required'),
  height: Yup.number()
    .integer()
    .typeError('กรุณาใส่ความสูง เป็นจำนวนเป็นเซนติเมตร')
    .required('Required'),
});

const CheckboxRisk = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Grid container style={{ marginTop: 10 }}>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
                dispatch({ type: 'ADD_RISK_PERSON', payload: values });
              }}
            >
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12} style={{ marginBottom: 20 }}>
                    <div
                      style={{
                        fontSize: 20,
                        color: '#ef6c00',
                        fontWeight: 'bold',
                      }}
                    >
                      ข้อมูลทั่วไปพื้นฐาน
                    </div>
                  </Grid>
                  {personalInfo.map(item => (
                    <React.Fragment key={item.id}>
                      <Grid item xs={2}>
                        <div style={{ fontSize: 20 }}>{item.label}</div>
                      </Grid>
                      <Grid item xs={8}>
                        <Textfield name={item.name} label={item.label} />
                      </Grid>
                      <Grid item xs={2}>
                        <div style={{ fontSize: 20 }}>{item.suffix}</div>
                      </Grid>
                    </React.Fragment>
                  ))}

                  {dataGeneral.map(item => (
                    <Grid item xs={6} key={item.id}>
                      <Checkbox
                        name={item.risk}
                        label={
                          <div style={{ fontSize: 20 }}>{item.question}</div>
                        }
                      />
                    </Grid>
                  ))}
                  <Grid
                    item
                    xs={12}
                    style={{ marginBottom: 20, marginTop: 10 }}
                  >
                    <div
                      style={{
                        fontSize: 20,
                        color: '#ef6c00',
                        fontWeight: 'bold',
                      }}
                    >
                      ประวัติบุคคลในครอบครัว
                    </div>
                  </Grid>
                  {dataCancer.map(item => (
                    <Grid item xs={6} key={item.id}>
                      <Checkbox
                        name={item.risk}
                        label={
                          <div style={{ fontSize: 20 }}>{item.question}</div>
                        }
                      />
                    </Grid>
                  ))}
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Buttonwrapper>Submit Form</Buttonwrapper>
                  </Grid>

                  <Grid item xs={6}>
                    <Link to="/">
                      <Button fullWidth variant="outlined" color="secondary">
                        Back
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CheckboxRisk;
