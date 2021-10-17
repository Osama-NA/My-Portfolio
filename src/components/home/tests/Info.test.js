import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Info } from '../components/Info.js';
import { cleanup, render } from '@testing-library/react';
import { lightPinkTheme } from '../../../utils/themes.js';

afterEach(cleanup);

describe("Info component tests", () => {

    const InfoComponent = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={lightPinkTheme}>
                    <Info circleBackground="lightblue" />
                </ThemeProvider>
            </BrowserRouter>
        )
    }

    it("Info component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<InfoComponent />, div);
    })

    it("Info component is in the document", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('info')).toBeInTheDocument();
    })

    it("Info component contains navigation bar", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('info')).toContainElement(getByTestId('nav-bar'));
    })

    it("Info component contains globe", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('info')).toContainElement(getByTestId('globe'));
    })

    it("Globe element renders without crashing", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('info')).toContainElement(getByTestId('globe'));
    })

    it("Navigation bar has projects link", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('projects-link')).toHaveAttribute('href', '/Router/Projects');
    })

    it("Navigation bar has contacts link", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('contacts-link')).toHaveAttribute('href', '/Router/Contacts');
    })

    it("Navigation bar has about link", () => {
        const { getByTestId } = render(<InfoComponent />);
        expect(getByTestId('about-link')).toHaveAttribute('href', '/Router/About');
    })

    it("Info component matches snapshot", () => {
        const tree = renderer.create(<InfoComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})