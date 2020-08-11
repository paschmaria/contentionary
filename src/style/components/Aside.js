import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   heading: {
      marginTop: '10rem'
   },
   downloadSection: {
      height: '100%',
      marginTop: '7.15em',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      alignItems: 'center',
      marginBottom: 0,
   },
   downloadSectionText: {
      fontWeight: 'bold',
      fontSize: '1.25em',
      lineHeight: '1.5',
      marginBottom: '2em',
      display: 'block'
   }
}));

export default useStyles;