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
    width: "100%"
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

  const BlogMediaContent1 = () => (
    <Image
      src="/assets/GeneralCheckUP.jpg"
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );
  const BlogMediaContent2 = () => (
    <Image
      src="/assets/Blogcontent-img2.jpg"
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent1 = ({risks}) => (
    <div className={classes.blogContent} >
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Typography variant="overline" color="textSecondary">
            {moment().format('dddd, MMMM Do YYYY')}
          </Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h5" color="primary" gutterBottom>
        การตรวจโรคทั่วไปตามอายุ
      </Typography>
      <Typography variant="subtitle1" color="secondary" >
        ค่าดัชนีมวลกายเท่ากับ {risks.bmi} กิโลกรัมต่อตารางเมตร
      </Typography>
      <Typography variant="subtitle1" color="textPrimary" >
        ตรวจความสมบูรณ์ของเม็ดเลือด (CBC)
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        ตรวจค่าการทำงานของไต (BUN, Cr)
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        ตรวจค่าการทำงานของตับ (AST, ALT)
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        ตรวจวิเคราะห์ปัสสาวะ (Urine analysis)
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        ตรวจภาพรังสีทรวงอก (Chest x-ray)
      </Typography>

      <div style={{ flexGrow: 1 }} />
    </div>
  );
  const BlogContent2 = ({ risks }) => (
    <div className={classes.blogContent} >
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Typography variant="overline" color="textSecondary">
            {moment().format('dddd, MMMM Do YYYY')}
          </Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h5" color="secondary" gutterBottom>
        การตรวจตามความเสี่ยง
      </Typography>
      {(risks.age >= 18 )&&
        <Typography variant="subtitle1" color="textPrimary" >
          ภาพทางรังสีของฟัน (Dental x-ray)
        </Typography>}
      {(risks.age >= 20) && (risks.isDM || risks.isHT || risks.isSmoking || risks.bmi > 30) &&
        <Typography variant="subtitle1" color="textPrimary" >
          ตรวจค่าการทำงานของไขมันในเลือด (Lipid profiles)
        </Typography>}
      {(risks.age >=30 )&&
        <Typography variant="subtitle1" color="textPrimary" >
          ตรวจมะเร็งปากมดลูก (Cervix cancer screening)
          {(risks.isCAOvary || risks.isCABreast) && <br />} 
          {(risks.isCAOvary || risks.isCABreast) && "ตรวจอัลตร้าซาวน์ผ่านทางช่องคลอด (Transvaginal Ultrasound)"} 
          {(risks.isCAOvary || risks.isCABreast) && <br />} 
          {(risks.isCAOvary || risks.isCABreast) && "ตรวจวัดระดับค่า CA125 "} 
        </Typography>}
      {(risks.age >= 35) &&
        <Typography variant="subtitle1" color="textPrimary" >
          ตรวจคัดกรองมะเร็งเต้านม (Mammogram)
          {(risks.isDM || risks.isHT) && (risks.age < 40) && <br />}
          {(risks.isDM || risks.isHT) && (risks.age < 40) && "ตรวจค่าระดับน้ำตาลในเลือด (FBS, HbA1c)"}
          {(risks.isDM || risks.isHT) && (risks.age < 40) && <br />}
          {(risks.isDM || risks.isHT) && (risks.age < 40) && "ตรวจการทำงานชองหัวใจ (EKG)"}
          {risks.isDLP && (risks.age < 40) && <br />}
          {risks.isDLP && (risks.age < 40) && "ตรวจค่าการทำงานของไขมันในเลือด (Lipid profiles)"}
          {risks.isMI && (risks.age < 40) &&  <br />}
          {risks.isMI && (risks.age < 40) && "ตรวจการทำงานชองหัวใจ (EKG)"}
        </Typography>}
      { (risks.age >= 40) &&
        <Typography variant="subtitle1" color="textPrimary" >
          ตรวจค่าระดับน้ำตาลในเลือด (FBS, HbA1c)
          <br />
          ตรวจการทำงานชองหัวใจ (EKG)   
          {risks.isDLP && (risks.age < 45) && <br />}   
          {risks.isDLP && (risks.age < 45) && "ตรวจค่าการทำงานของไขมันในเลือด (Lipid profiles)"}   
        </Typography>}
      { (risks.age >= 45) &&
        <Typography variant="subtitle1" color="textPrimary" >
          ตรวจค่าเม็ดเลือดแดงทางอุจจาระ (Stool occult blood)    
          <br />
          ตรวจค่าการทำงานของไขมันในเลือด (Lipid profiles)
          {(risks.isCAColon) && <br />} 
          {(risks.isCAColon) && "ส่งกล้องตรวจลำไส้ใหญ่ (Colonoscopy)"}
        </Typography>}
      {(risks.age >= 60) && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจความหนาแน่นมวลกระดูก (BMD)
        <br />
        ตรวจระดับค่าแคลเซี่ยมและฟอสเฟตในเลือด (Calcium and Phosphate blood level)
        {risks.isDLP && (risks.age < 75) && <br />}
        {risks.isDLP && (risks.age < 75) && "ตรวจค่าการทำงานของไขมันในเลือด (Lipid profiles)"}
      </Typography>}
      {((risks.age >= 75 )|| risks.isOsteoporosis || risks.isExposure) && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจวัดระดับวิตามินบี 12 ในเลือด (Vitamin B12 blood level)
      </Typography>}
      {(risks.isCAPancreas || risks.isCALiver) && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจวัดระดับ CA 19-9
      </Typography>}
      {risks.isCALiver && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจวัดระดับ AFP
      </Typography>}
      {(risks.isDrinking || risks.isHepatitis) && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจวัดค่าการทำงานของตับทั้งหมด
        <br />
        ตรวจอัลตร้าซาวน์ตับ (Upper Abdomen ultrasound)
      </Typography>}
      {(risks.isSmoking || risks.isAsthma) && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจวัดสมรรถภาพของปอด (Lung Function test)
      </Typography>}
      {risks.isStone && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจวัดค่ายูริกในเลือด (Uric acid level)
      </Typography>}
      {risks.isMI && <Typography variant="subtitle1" color="textPrimary" >
        ตรวจอัลตร้าซาวน์การทำงานของหัวใจ (Cardiac Echo)
      </Typography>}
      {risks.isRenalFailure && <Typography variant="subtitle1" color="secondary" >
        ฉีดวัคซีนไข้หวัดใหญ่ทุกปี
      </Typography>}
      {(risks.bmi >= 30) && <Typography variant="subtitle1" color="secondary" >
        มีโอกาสไขมันเกาะตับจากโรคอ้วน ควรตรวจ Liver Fibroscan
      </Typography>}

      <div style={{ flexGrow: 1 }} />
    </div>
  );


  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={5} data-aos="fade-up">
          <CardProduct
            withShadow
            liftUp
            className={classes.cardProduct}
            mediaContent={<BlogMediaContent1 />}
            cardContent={<BlogContent1 risks ={risks}/>}
          />
        </Grid>
        <Grid item xs={12} md={7} data-aos="fade-up">
          <CardProduct
            withShadow
            liftUp
            className={classes.cardProduct}
            mediaContent={<BlogMediaContent2 />}
            cardContent={<BlogContent2 risks={risks}  />}
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

};

export default Vertical;
