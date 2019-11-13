import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import Root from './components/Root/root';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import './styles/fonts/fonts.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#1D54C1",
        dark: ' #0B3994',
        contrastText: "#FFFFFF",
    },
    background: {
      default: "#ECEEF2"
    },
    text: {
      primary: "#3D4355"
    },
    divider: "#C0C6D1"
  },
  typography: {
    fontFamily: "Open Sans",
    fontSize: 14,
    h1: {
      fontSize: 22,
      fontWeight: "bold"
    },
    h2: {
      fontSize: 17,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        width: "100%"
      }
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
       <CssBaseline />
      <Root store={store} />
    </MuiThemeProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();