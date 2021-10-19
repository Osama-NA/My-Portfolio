import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { Home } from '../Home.js';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { lightPinkTheme } from '../../../utils/themes.js';

afterEach(cleanup);

describe("Home component tests", () => {

    const HomeComponent = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={lightPinkTheme}>
                    <Home 
                        theme={lightPinkTheme}
                        cubesColor="lightpink" 
                        circleBackground="lightblue"
                    />
                </ThemeProvider>
            </BrowserRouter>
        )
    }

    it("Home component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<HomeComponent />, div);
    })

    it("Home component is in the document", () =>{
        const { getByTestId } = render(<HomeComponent />);
        expect(getByTestId('home')).toBeInTheDocument();
    })

    it("Home component contains HelloButton component", () =>{
        const { getByTestId } = render(<HomeComponent />);
        expect(getByTestId('home')).toContainElement(getByTestId('hello-button'));
    })

    it("Home component contains ThreeDCubes component", () =>{
        const { getByTestId } = render(<HomeComponent />);
        expect(getByTestId('home')).toContainElement(getByTestId('threed-cubes'));
    })

    it("Home component contains Info component", () =>{
        const { getByTestId } = render(<HomeComponent />);
        expect(getByTestId('home')).toContainElement(getByTestId('info'));
    })

    it("Home component contains Quote component", () =>{
        const { getByTestId } = render(<HomeComponent />);
        expect(getByTestId('home')).toContainElement(getByTestId('quote'));
    })

    it("Home component contains IconLinks component", () =>{
        const { getByTestId } = render(<HomeComponent />);
        expect(getByTestId('home')).toContainElement(getByTestId('icon-links'));
    })

    it("Home component matches snapshot", () => {
        const tree = renderer.create(<HomeComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})