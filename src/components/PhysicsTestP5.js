import {useEffect, useRef} from 'react'

import useWindowDimensions from "../hooks/useWindowDimensions";
import Sketch from "react-p5";

export default function PhysicsTestP5() {

    let y = 0;
    let direction = '^';
    let value = 0;
    let {height, width} = useWindowDimensions();
    height = height * 0.9;

    const setup = (p5, parentRef) => {
        p5.createCanvas(width, height).parent(parentRef);
    };

    const draw = (p5) => {
        p5.textSize(width*0.02);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.background(255);

        p5.text('word', p5.width / 2, y);
        if (value > 0) {
            if (y > p5.height) {
                direction = ''
            }
            if (y < 0) {
                direction = '^';
            }
            if (direction === '^') y += 8;
            else {
                y -= 4
            }
        }
    };

    function mouseClicked() {
        if (value === 0) {
            value = 255;
        } else {
            value = 0;
        }
    }

    return (
        <div className="App">
            <h1>React + p5.js test</h1>
            <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked}/>
        </div>
    );
}

