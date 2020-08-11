import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as appleIcon } from "../../media/images/apple.svg";


const appStoreIcon = props => <SvgIcon {...props} component={appleIcon} />;

export default appStoreIcon;