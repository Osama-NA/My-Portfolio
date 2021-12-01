import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components'
import { Home } from './components/home/Home.js';
import { Contact } from './components/pages/contact/Contact.js';
import { About } from './components/pages/about/About.js';
import { Projects } from './components/pages/projects/Projects.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContainer } from './App.styled.js';
import { ThemesContext } from './contexts/ThemesContext';
import { ThemesButton } from './components/ThemesButton/ThemesButton';
import { BackgroundParticles } from './components/particles/BackgroundParticles'
import { useContext } from 'react';
import { EmailSuccessProvider } from './contexts/EmailSuccessContext.js';

function App() {

  const {theme} = useContext(ThemesContext);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <EmailSuccessProvider>
        
        <BrowserRouter basename="Router">
          <Switch>
            <Route path="/" exact>
              <Home
                theme={theme}
                cubesColor={theme.cubesColor}
                circleBackground={theme.circleBackground}
              />
            </Route>
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects} />
          </Switch>
        </BrowserRouter>

        {/* Theme settings button */}
        <ThemesButton />
        <GlobalStyle />
        </EmailSuccessProvider>
      </AppContainer>

      {/* Stars particles background  */}
      <BackgroundParticles />
    </ThemeProvider>
  );
}

export default App;