import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { HelloButton } from '../components/HelloButton.js';
import { cleanup, render } from '@testing-library/react';
import { greenGrayTheme } from '../../../utils/themes.js';

afterEach(cleanup);

describe("HelloButton component tests", () => {

    const HelloButtonComponent = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={greenGrayTheme}>
                    <HelloButton />
                </ThemeProvider>
            </BrowserRouter>
        )
    }

    it("HelloButton component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<HelloButtonComponent />, div);
    })

    it("HelloButton component contains message-box element", () => {
        const { getByTestId } = render(<HelloButtonComponent />);
        expect(getByTestId('hello-button')).toContainElement(getByTestId('message-box'));
    })

    it("message-box element contains close-button", () => {
        const { getByTestId } = render(<HelloButtonComponent />);
        expect(getByTestId('message-box')).toContainElement(getByTestId('message-box-link'));
    })

    it("message-box element has projects link", () => {
        const { getByTestId } = render(<HelloButtonComponent />);
        expect(getByTestId('message-box-link')).toHaveAttribute('href', '/Router/Projects');
    })

    it("HelloButton component matches snapshot", () => {
        const tree = renderer.create(<HelloButtonComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})