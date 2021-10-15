import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { Home } from '../Home.js';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { mainTheme } from '../../../../utils/mainTheme.js';

afterEach(cleanup);

describe("Home component tests", () => {

    const HomeComponent = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={mainTheme}>
                    <Home 
                        theme={mainTheme} 
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

    it("Home component matches snapshot", () => {
        const tree = renderer.create(<HomeComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})