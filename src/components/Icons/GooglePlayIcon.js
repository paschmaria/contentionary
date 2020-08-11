import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as playIcon } from "../../media/images/google-play.svg";


const googlePlayIcon = props => <SvgIcon {...props} component={playIcon} />;

export default googlePlayIcon;