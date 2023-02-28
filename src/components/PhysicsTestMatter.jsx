import {useEffect, useRef} from 'react'
import {Engine, Bodies, World, Render} from 'matter-js'

import useWindowDimensions from "../hooks/useWindowDimensions";

// Source: https://www.fabiofranchino.com/blog/how-to-use-matter-js-in-react-functional-component/

export default function PhysicsTestMatter() {
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
                background: 'transparent',
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(-10, ch / 2, 20, ch, {isStatic: true}),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, {isStatic: true}),
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, {isStatic: true})
        ])

        Engine.run(engine.current)
        Render.run(render)

        engine.current.gravity.y = 0;

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
        const testBox = Bodies.rectangle(width / 2, height / 4, 80, 80);
        World.add(engine.current.world, [testBox]);

        // create 10 random balls
        const balls = Array.from({length: 20}, () => {
            return Bodies.circle(
                Math.random() * width,
                Math.random() * height,
                10 + Math.random() * 30,
                {
                    mass: 10,
                    restitution: 0.9,
                    friction: 0.005
                })
        })
        World.add(engine.current.world, balls)
    })

    const handleActivateGravity = e => {
        // Activate gravity
        engine.current.gravity.y = 1;

        // Add a ball at the click location
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
            ref={scene}
            onClick={handleActivateGravity}
        >
            <h1 className="mt-2">Physics Test (Matter.js)</h1>
        </div>
    )
}

