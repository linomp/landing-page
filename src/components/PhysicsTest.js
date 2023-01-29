import {useEffect, useRef} from 'react'
import {Engine, Render, Bodies, World} from 'matter-js'

import useWindowDimensions from "../hooks/useWindowDimensions";

// Source: https://www.fabiofranchino.com/blog/how-to-use-matter-js-in-react-functional-component/

export default function PhysicsTest(props) {
    const scene = useRef()
    const engine = useRef(Engine.create())

    const {height, width} = useWindowDimensions();

    useEffect(() => {
        const cw = width * 0.95
        const ch = height * 0.95

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(cw / 2, -10, cw, 20, {isStatic: true}),
            Bodies.rectangle(-10, ch / 2, 20, ch, {isStatic: true}),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, {isStatic: true}),
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, {isStatic: true})
        ])

        Engine.run(engine.current)
        Render.run(render)

        return () => {
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, [])

    useEffect(() => {
        // Start with no gravity
        console.log('Initial engine.current.gravity.y: ', engine.current.gravity.y)
        engine.current.gravity.y = 0;

        // add a box in the center
        const box2 = Bodies.rectangle(width / 2, height / 2, 80, 80);
        World.add(engine.current.world, [box2]);
    })

    const handleActivateGravity = e => {
        engine.current.gravity.y = 1;

        const ball = Bodies.circle(
            e.clientX,
            e.clientY,
            10 + Math.random() * 30,
            {
                mass: 10,
                restitution: 0.9,
                friction: 0.005
            })
        World.add(engine.current.world, [ball])
    }

    return (
        <div
            onClick={handleActivateGravity}
        >
            <h1>Physics Test</h1>
            <div ref={scene} style={{width: '100%', height: '100%'}}/>
        </div>
    )
}

