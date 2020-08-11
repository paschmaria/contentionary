import React from "react";
import Box from '@material-ui/core/Box';

import DownloadButton from "../Buttons/DownloadBtn";
import IphoneBG from "../../media/images/iphone_bg.png";
import Zigzag from "../../media/images/zigzag.png";
import asideStyles from "../../style/components/Aside";


const aside = props => {
  const classes = asideStyles();

  return(
    <Box
      display="flex"
      flexDirection='column'
      css={{ height: '100%' }}
    >
      <div className={classes.heading}>
        {props.children}
        <img src={Zigzag} alt=""/>
      </div>
      <Box
        display="flex"
        flexDirection='column'
        justifyContent='center'
        style={{ height: '100%' }}
      >
        <figure className={classes.downloadSection}>
          <img src={IphoneBG} alt="[Download App]" style={{ maxWidth: '433px', width: '100%' }} />
          <div style={{ position: 'absolute', top: '50%' }}>
            <figcapton className={classes.downloadSectionText}>
              Download our Mobile App
            </figcapton>
            <div>
              <DownloadButton href='#' type='apple' />
              <DownloadButton href='#' type='gplay' />
            </div>
          </div>
        </figure>
      </Box>
    </Box>
  );
};

export default aside;