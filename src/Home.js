import React, { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap';
import Lyrics from './Lyrics';

import QRCode from "react-qr-code";

import { buildUrl, getClient } from './utils';

let size = 256
let qrWidth = 80

export default function Home({ id }) {

    const [client,] = useState(getClient(id))
    const topic = `commands/${id}`

    useEffect(() => {
        if (client.connected) {
            return
        }
        client.on('connect', function () {
            client.subscribe(topic, function (err) {
                if (!err) {
                    console.log(`subscribed to topic: ${topic}`)
                }
            })
        })

        client.on('message', function (topic, message) {
            console.log(message.toString())
        })
    }, [client.connected])


    return (
        <Row>
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
