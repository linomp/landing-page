import React, {useEffect, useState} from 'react'

import {buildTopic, getClient} from '../modules/mqtt_utils';
import {buildHandheldUrl} from '../modules/browser_utils';

import {Col, Row} from 'react-bootstrap';

import QRCode from "react-qr-code";

import {DO_GRAVITY, TOGGLE_BACKGROUND} from '../constants';

import Lyrics from './Lyrics';

import './Home.css';

let qrSize = 256
let qrMaxWidth = 80

export default function Home({id}) {

    const [client,] = useState(getClient(id))
    const [darkBG, setDarkBG] = useState(false)
    const [gravity, setGravity] = useState(false)

    useEffect(() => {
        if (client.connected) {
            return
        }

        const topic = buildTopic(id)

        client.on('connect', function () {
            client.subscribe(topic, function (err) {
                if (err) {
                    console.log(err)
                } else if (process.env.REACT_APP_DEBUG) {
                    console.log(`Subscribed to topic: ${topic}`)
                }
            })
        })
    })

    useEffect(() => {
        const server = process.env.REACT_APP_BACKEND_URL
        fetch(`${server}/health`)
            .then(response => response.json())
            .then(data => console.log("Server healthcheck OK", server, data))
            .catch(error => console.log("Server healthcheck failed", server, error))
    }, [])

    // React to messages from the handheld client
    if (client) {
        client.on('message', function (topic, message) {
            switch (message.toString()) {
                case TOGGLE_BACKGROUND:
                    setDarkBG(!darkBG)
                    setGravity(false)
                    break;
                case DO_GRAVITY:
                    setGravity(!gravity)
                    break;
            }
        })
    }

    return (
        <div className={`Home ${darkBG ? "dark-bg" : ""}`}>
            <Row>
                {gravity && <div className="gravity">Gravity goes here</div>}
                <Col>
                    <Lyrics
                        children={(<div style={{height: "auto", margin: "0 auto", maxWidth: qrMaxWidth, width: "100%"}}>
                            <QRCode
                                size={qrSize}
                                style={{height: "auto", maxWidth: "100%", width: "100%"}}
                                bgColor={darkBG ? "#000000" : "#FFFFFF"}
                                fgColor={darkBG ? "#FFFFFF" : "#000000"}
                                value={buildHandheldUrl(id)}
                                viewBox={`0 0 ${qrSize} ${qrSize}`}
                                className="mb-4"
                            />
                        </div>)}/>
                </Col>
            </Row>
        </div>
    );
}
