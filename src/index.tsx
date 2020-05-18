import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import Root from './components/Root/root';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header, { initialData as headerInitialData, countries, currencies } from '@hotels/header';
import Footer, { initialData as footerInitialData, subscribeEmail } from '@hotels/footer';
import { travelgenioTheme } from "@hotels/styles";

const theme = createMuiTheme(travelgenioTheme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header initialData={headerInitialData} countries={countries} currencies={currencies} />
      <Root store={store} />
      <Footer initialData={footerInitialData} countries={countries} subscribeEmail={subscribeEmail}/>
    </MuiThemeProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();