import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  placementGrid: {
    maxWidth: 320,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    ข้อมูลการตรวจ รายละเอียดต่างๆ
                    <br />
                    <Typography component="span" variant="inherit" color="primary">
                      ทันสมัยอยู่เสมอ
                    </Typography>
                  </span>
                }
                subtitle="เราได้ทำการย่อยข้อมูล และรายละเอียดต่างๆ เกี่ยวกับการตรวจสุขภาพโดยสามารถอ่านเพิ่มได้"
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={100}
                    label="แม่นยำ"
                    textColor="primary"
                    suffix="%"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={24}
                    label="เช็คข้อมูล"
                    textColor="primary"
                    suffix="/7"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={20}
                    label="การตรวจร่างกาย"
                    textColor="primary"
                    suffix="++"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="assets/information.png"
            alt="..."
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
