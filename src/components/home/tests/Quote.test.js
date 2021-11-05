import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Quote } from '../components/Quote.js';
import { cleanup, render } from '@testing-library/react';
import { greenGrayTheme } from '../../../utils/themes.js';

afterEach(cleanup);

describe("Quote component tests", () => {

    const QuoteComponent = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={greenGrayTheme}>
                    <Quote />
                </ThemeProvider>
            </BrowserRouter>
        )
    }

    it("Quote component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<QuoteComponent />, div);
    })

    it("Quote component is in the document", () => {
        const { getByTestId } = render(<QuoteComponent />);
        expect(getByTestId('quote')).toBeInTheDocument();
    })

    it("Quote component matches snapshot", () => {
        const tree = renderer.create(<QuoteComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})