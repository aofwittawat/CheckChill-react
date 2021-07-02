import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const About = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title={
              <span>
                CheckChillChill{' '}
                <Typography component="span" variant="inherit" color="primary">คืออะไร</Typography>
                <br />
                <span>แล้วช่วยเหลือคุณได้อย่างไร?</span>
              </span>
            }
            subtitle={<div style={{ textAlign: "justify"}}>พวกเราจะทำการคัดกรอง "เพื่อคุณ" จะได้รับการตรวจสุขภาพที่เหมาะสมกับคุณจริงๆ โดยอ้างอิงจากวารสารทางการแพทย์ล่าสุด โดยจะเหมาะกับโรคประจำตัวของคุณที่คุณมีอยู่แล้ว หรือ คนในครอบครัวของคุณ</div>}
            align="left"
            disableGutter
          />
          <List disablePadding>
            {data.map((item, index) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <IconAlternate
                    size="small"
                    fontIconClass={item.icon}
                    color={colors.indigo}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
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
            src="/assets/about.png"
            alt="..."
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default About;
