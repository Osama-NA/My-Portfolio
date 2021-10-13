import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { Home } from './components/home/Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const theme = {
  themeColors: {
    aquaGreen: '#25FFA3'
  },
  fontColors: {
    gray: '#707070',
    white: '#fff'
  },
  backgroundColors: {
    darkGray: '#232323',
    darkerGray: '#202020',
    lightGray: '#2F2F2F'
  },
  cubesColors: {
    aquaGreen: 'rgb(0, 190, 90)'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="Router">
        <Switch>
          <Route path="/" exact>
            <Home theme={theme} cubesColor={theme.cubesColors.aquaGreen} />
          </Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
