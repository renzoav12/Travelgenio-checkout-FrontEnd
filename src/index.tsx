import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import Root from './components/Root/root';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header, Footer } from '@hotels/header-footer';
import { travelgenioTheme } from "@hotels/styles";
import { Provider } from 'react-redux';

const theme = createMuiTheme(travelgenioTheme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Header />
        <Root store={store} />
        <Footer />
      </Provider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();