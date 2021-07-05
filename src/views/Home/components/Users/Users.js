import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Avatar, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroSimpleBackground } from 'components/organisms';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 60,
    height: 60,
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    marginTop: theme.spacing(1 / 2),
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
  },
  grid: {
    maxWidth: 600,
    margin: '0 auto',
  },
}));

const Users = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            โรคประจำตัวต่างๆ เราคัดแบ่ง{' '}
            <Typography color="secondary" variant="inherit" component="span">เป็นตามหมวดหมู่</Typography>
          </span>
        }
        subtitle="คุณสามารถหาความรู้เพิ่มเติมตามอวัยวะต่างๆที่คุณสนใจตรวจ เพื่อเข้าถึงรายละเอียดของข้อมูลได้"
        ctaGroup={[
          <Button color="primary" variant="contained" size="large">
            ความรู้เพิ่มเติม
          </Button>,
          <Link to='/genderSelection'>
        <Button color="secondary" variant="outlined" size="large">
            เริ่มตรวจ
          </Button>
          </Link>,
        ]}
        
        data-aos="fade-up"
      />
      <HeroSimpleBackground
        backgroundImage="/assets/organs/organs-bg.png"
        backgroundSize="contain"
        style={{height:450}}
      >
        <Grid container spacing={0} className={classes.grid} data-aos="fade-up">
          {data.map((item, index) => (
            <Grid
              item
              container
              key={index}
              xs={4}
              direction={index < 3 ? 'row' : 'row-reverse'}
            >
              <Grid item xs={6}>
                <Avatar
                  src={item.logo}
                  className={classes.avatar}
                  data-aos="zoom-in"
                  data-aos-once="false"
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          ))}
        </Grid>
      </HeroSimpleBackground>
    </div>
  );
};

Users.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Users;
