import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { IconLinks } from '../components/IconLinks.js';
import { cleanup, render } from '@testing-library/react';
import { greenGrayTheme } from '../../../utils/themes.js';

afterEach(cleanup);

describe("IconLinks component tests", () => {

    const IconLinksComponent = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={greenGrayTheme}>
                    <IconLinks/>
                </ThemeProvider>
            </BrowserRouter>
        )
    }

    it("IconLinks component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<IconLinksComponent />, div);
    })

    it("IconLinks component is in the document", () => {
        const { getByTestId } = render(<IconLinksComponent />);
        expect(getByTestId('icon-links')).toBeInTheDocument();
    })

    it("IconLinks has github link", () => {
        const { getByTestId } = render(<IconLinksComponent />);
        expect(getByTestId('github-link')).toHaveAttribute('href', 'https://github.com/Osama-NA');
    })

    it("IconLinks component matches snapshot", () => {
        const tree = renderer.create(<IconLinksComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})