import React, { useEffect, useState } from 'react'

import { buildGravityTopic, getClient } from '../modules/mqtt_utils';
import { buildUrl } from '../modules/browser_utils';

import { Col, Row } from 'react-bootstrap';
import QRCode from "react-qr-code";

import { TOGGLE_BACKGROUND } from '../constants';

import Lyrics from './Lyrics';

import './Home.css';

let size = 256
let qrWidth = 80

export default function Home({ id }) {

    const [client,] = useState(getClient(id))
    const [redBG, setRedBG] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (client.connected) {
            return
        }

        const topic = buildGravityTopic(id)

        client.on('connect', function () {
            client.subscribe(topic, function (err) {
                if (err) {
                    console.log(err)
                }
                else if (process.env.REACT_APP_DEBUG) {
                    console.log(`Subscribed to topic: ${topic}`)
                }
            })
        })
    })

    if (client) {
        client.on('message', function (topic, message) {
            if (message.toString() === TOGGLE_BACKGROUND) {
                setRedBG(!redBG)
            }
        })
    }

    return (
        <Row className={redBG ? "red-bg" : ""}>
            <Col>
                <Lyrics children={(<div style={{ height: "auto", margin: "0 auto", maxWidth: qrWidth, width: "100%" }}>
                    <QRCode
                        size={size}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={buildUrl(id)}
                        viewBox={`0 0 ${size} ${size}`}
                        className="mb-4"
                    />
                </div>)} />
            </Col>
        </Row>
    );
}
