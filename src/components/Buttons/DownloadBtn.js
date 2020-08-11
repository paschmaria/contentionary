import React from "react";
import Button from '@material-ui/core/Button';

import AppStoreBg from "../../media/images/app-store.png";
import GooglePlayBg from "../../media/images/google-play.png";
import btnStyles from "../../style/components/Button";


const DownloadBtn = props => {
  const classes = btnStyles();
  const bgImage = props.type === 'apple'
                ? AppStoreBg
                : GooglePlayBg;

  return (
    <Button
      className={classes.image}
      href={props.href}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    />
  );
}

export default DownloadBtn;