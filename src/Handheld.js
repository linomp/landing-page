import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import { getClient } from './utils';


export default function Handheld() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')

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


    const mqttPublish = (context) => {
        if (client) {
            client.publish(topic, "TEST", 2, error => {
                if (error) {
                    console.log('Publish error: ', error);
                }
            });
        }
    }

    return (
        <div className="mt-4 p-5 d-grid gap-3">
            <Button variant="warning" size="lg" onClick={mqttPublish}>
                Block level button
            </Button>
            <Button variant="dark" size="lg">
                Block level button
            </Button>
        </div>
    )

}
