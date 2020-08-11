import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Aside from "../../components/Auth/Aside";
import { whiteColor, brandColor } from "../../style/main";


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'inherit'
  },
  container: {
    height: 'inherit'
  },
  wrapper: {
     background: '#181818',
     height: '100%',
     textAlign: 'center',
  }
});

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    
    return(
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          className={classes.container}
        >
          <Hidden xsDown>
            <Grid
              item
              xs={12}
              sm={5}
              className={classes.wrapper}
              style={{ padding: '0px' }}
            >
              <Aside>
                <h1 style={{ color: whiteColor, fontSize: '2.625em' }}>
                  Welcome Back<span style={{ color: brandColor }}>.</span>
                </h1>
              </Aside>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={7}>
            <form></form>
          </Grid>
        </Grid>
      </div>
    )
  }
};

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupPage);