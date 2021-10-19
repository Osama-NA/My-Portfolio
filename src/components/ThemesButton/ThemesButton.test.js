import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ThemesButton } from './ThemesButton.js';
import { ColoredButton } from './ColoredButton.js';
import { cleanup, render } from '@testing-library/react';
import { lightPinkTheme } from '../../utils/themes.js';

afterEach(cleanup);

describe("ThemesButton component tests", () => {

    const ThemesButtonComponent = () => {
        return (
            <ThemeProvider theme={lightPinkTheme}>
                <ThemesButton />
            </ThemeProvider>
        )
    }
    
    const ColoredButtonComponent = () => {
        return (
            <ThemeProvider theme={lightPinkTheme}>
                <ColoredButton thisTheme={lightPinkTheme} />
            </ThemeProvider>
        )
    }

    it("ThemesButton component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<ThemesButtonComponent />, div);
    })

    it("ThemesButton is in the document", () => {
        const { getByTestId } = render(<ThemesButtonComponent />);
        expect(getByTestId('themes-button-container')).toBeInTheDocument();
    })

    it("ColoredButton component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<ColoredButtonComponent />, div);
    })

    it("ColoredButton is in the document", () => {
        const { getByTestId } = render(<ColoredButtonComponent />);
        expect(getByTestId('theme')).toBeInTheDocument();
    })

    it("ThemesButton component contains themes button element", () => {
        const { getByTestId } = render(<ThemesButtonComponent />);
        expect(getByTestId('themes-button-container')).toContainElement(getByTestId('themes-button'));
    })

    it("ThemesButton component contains themes container", () => {
        const { getByTestId } = render(<ThemesButtonComponent />);
        expect(getByTestId('themes-button-container')).toContainElement(getByTestId('themes-container'));
    })

    it("Themes container contains themes", () => {
        const { getByTestId } = render(<ThemesButtonComponent />);
        expect(getByTestId('themes-container')).toContainElement(getByTestId('themes'));
    })

    it("ThemesButton component matches snapshot", () => {
        const tree = renderer.create(<ThemesButtonComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})