import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components';
import { cleanup } from '@testing-library/react';
import { mainTheme } from '../../../../utils/mainTheme.js';
import { ThreeDCubes } from '../ThreeDCubes.js';
import { Cube } from '../Cube.js';

afterEach(cleanup);

describe("ThreeDCubes component tests", () => {

    const ThreeDCubesComponent = () => {
        return (
            <ThemeProvider theme={mainTheme}>
                <ThreeDCubes cubesColor="black" />
            </ThemeProvider>
        )
    }

    const CubeComponent = () => {
        return (
            <ThemeProvider theme={mainTheme}>
                <ThreeDCubes cubesColor="black">
                    <Cube />
                </ThreeDCubes>
            </ThemeProvider>
        )
    }

    it("ThreeDCubes component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<ThreeDCubesComponent />, div);
    })

    it("ThreeDCubes component matches snapshot", () => {
        const tree = renderer.create(<ThreeDCubesComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("Cube component renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<CubeComponent />, div);
    })

    it("Cube component matches snapshot", () => {
        const tree = renderer.create(<CubeComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})