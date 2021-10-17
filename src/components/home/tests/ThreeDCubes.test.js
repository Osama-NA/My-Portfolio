import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components';
import { cleanup } from '@testing-library/react';
import { lightPinkTheme } from '../../../utils/themes.js';
import { ThreeDCubes } from '../components/ThreeDCubes.js';
import { Cube } from '../components/Cube.js';

afterEach(cleanup);

describe("ThreeDCubes component tests", () => {

    const ThreeDCubesComponent = () => {
        return (
            <ThemeProvider theme={lightPinkTheme}>
                <ThreeDCubes cubesColor="black" />
            </ThemeProvider>
        )
    }

    const CubeComponent = () => {
        return (
            <ThemeProvider theme={lightPinkTheme}>
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