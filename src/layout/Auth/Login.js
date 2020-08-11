import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

import Aside from "../../components/Auth/Aside";
import Input from "../../components/Inputs/FormInput";
import { whiteColor, brandColor } from "../../style/main";
import Logo from "../../media/images/logo.png";


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

class LoginPage extends Component {
  state = {
    showPassword: false
  }

  togglePasswordHandler = () => {
    const showPassword = this.state.showPassword;
    this.setState({ showPassword: !showPassword });
  }

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
            <Container>
              <img src={Logo} alt='[CONTENTIONARY]' />
              <form>
                <h2 style={{ color: brandColor }}>
                  Login to your Account
                </h2>
                <Input
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    labelWidth: 100,
                  }}
                  type='text'
                  labelText='Email Address'
                />
                <Input
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    labelWidth: 70,
                  }}
                  type='password'
                  labelText='Password'
                  adornmentPos='end'
                  clicked={this.togglePasswordHandler}
                  showPassword={this.state.showPassword}
                />
              </form>
            </Container>
          </Grid>
        </Grid>
      </div>
    )
  }
};

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);