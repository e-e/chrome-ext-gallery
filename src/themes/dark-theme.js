import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
  let overwrites = {
    "palette": {
      "primary1Color": Colors.yellow700,
      "accent1Color": Colors.redA200
    }
  };
  return getMuiTheme(baseTheme, overwrites);
}

export default getTheme();