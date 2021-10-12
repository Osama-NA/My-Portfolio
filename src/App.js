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
    lightGray: '#2F2F2F'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="Router">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Projects" component={Home} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
