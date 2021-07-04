import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Typography, Grid, Divider } from '@material-ui/core';
import { Image } from 'components/atoms';
import { CardProduct } from 'components/organisms';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      margin: '0 auto',
    },
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    minWidth: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 420,
    },
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: 'white',
    fontWeight: 300,
  },
}));

const Vertical = props => {
  const { className, risks, ...rest } = props;
  const classes = useStyles();
  console.log(risks);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = () => (
    <Image
      src="/assets/GeneralCheckUP.jpg"
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = ({risks}) => (
    <div className={classes.blogContent}>
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Typography variant="body2" color="textPrimary">
            การตรวจโรคทั่วไป    
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {moment().format('dddd, MMMM Do YYYY')}
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h6" color="textPrimary" gutterBottom>
       {risks.age}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.subtitle}
      </Typography>

      <div style={{ flexGrow: 1 }} />
    </div>
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardProduct
            withShadow
            liftUp
            className={classes.cardProduct}
            mediaContent={<BlogMediaContent />}
            cardContent={<BlogContent risks={risks} />}
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardProduct
            withShadow
            liftUp
            className={classes.cardProduct}
            mediaContent={<BlogMediaContent />}
            cardContent={<BlogContent risks={risks} />}
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardProduct
            withShadow
            liftUp
            className={classes.cardProduct}
            mediaContent={<BlogMediaContent />}
            cardContent={<BlogContent risks={risks} />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Vertical.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Vertical;
