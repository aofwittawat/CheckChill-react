import React from 'react'
import {Container, Grid,useMediaQuery,Avatar,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    pagePaddingTop: {
        paddingTop: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          paddingTop: theme.spacing(5),
        },
    avatar: {
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }
      },
  }));

const GenderSelection = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
    return (
        <Container className={classes.pagePaddingTop}>
            <Typography variant="h2" style={{textAlign:"center"}}>
                กรุณาระบุเพศของคุณ
            </Typography>
            <Grid container spacing={isMd ? 4 : 2} data-aos="fade-up" style={{height:"90%", display:"flex", alignContent:"center", marginTop:50}}>
                <Grid item md ={6} xs={12} style={{display:"flex", justifyContent:"space-evenly" }}>
                    <Link to="/checkboxriskmale"><Button variant="contained" color="primary" style={{color:"white", fontSize:24}}>ผู้ชาย</Button></Link>
                    <Avatar alt ="man" src="./assets/man.svg" style={{height:400, width: 400}}/>
                </Grid>
                <Grid item md ={6} xs={12} style={{display:"flex", justifyContent:"space-evenly"}}>
                     <Avatar alt ="woman" src="./assets/woman.svg"style={{height:400, width: 400}}/>
                     <Link to ="/checkboxriskfemale"><Button variant="contained" color="secondary" style={{color:"white", fontSize:24}}>ผู้หญิง</Button></Link>
                </Grid>
            </Grid>
           
        </Container>
    )
}

export default GenderSelection
