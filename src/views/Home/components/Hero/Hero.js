import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest} style={{marginTop:30}}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                เบื่อไหมกับการที่{' '}<br />
                <Typography component="span" variant="inherit" color="primary">ตรวจสุขภาพแบบสำเร็จรูป</Typography>
                <br />
                <span>ที่โรงพยาบาลเลือกให้เรา</span>
              </span>
            }
            subtitle={<div>"คุณสามารถเลือกเองได้โดยใช้โปรแกรมของเราช่วยคุณให้การเลือกทุกครั้งเป็นการเลือกที่เหมาะสมกับตัวของคุณจริงๆ"</div>}
            ctaGroup={[
              <Link to="/checkboxrisk">
              <Button variant="contained" color="primary" size="large">
                เริ่มการตรวจ
              </Button>
              </Link>,
             
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="/assets/Hero-logo.png"
            alt="TheFront Company"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
