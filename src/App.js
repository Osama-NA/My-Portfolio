import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { Home } from './components/home/components/Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {mainTheme} from './utils/mainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter basename="Router">
        <Switch>
          <Route path="/" exact>
            <Home 
              theme={mainTheme}
              cubesColor={mainTheme.cubesColors.aquaGreen}
            />
          </Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;