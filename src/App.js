import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { Home } from './components/home/Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContainer } from './App.styled.js';
import { ThemesContext } from './contexts/ThemesContext';
import { ThemesButton } from './components/ThemesButton/ThemesButton';
import { useContext } from 'react';

function App() {

  const {theme} = useContext(ThemesContext);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter basename="Router">
          <Switch>
            <Route path="/" exact>
              <Home
                theme={theme}
                cubesColor={theme.cubesColor}
                circleBackground={theme.circleBackground}
              />
            </Route>
          </Switch>
        </BrowserRouter>
        <ThemesButton />
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;