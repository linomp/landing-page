import React, {useEffect, useState} from 'react'

import {buildTopic, getClient} from '../modules/mqtt_utils';

import {DO_REDIRECT, TOGGLE_BACKGROUND} from '../constants';

import {useLocation} from 'react-router-dom'

export default function Handheld() {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')

    const [client,] = useState(getClient(id))
    const topic = buildTopic(id)

    useEffect(() => {
        if (client.connected) {
            return
        }

        if (import.meta.env.VITE_DEBUG) {
            client.on('connect', function () {
                client.subscribe(topic, function (err) {
                    console.log(err ? err : `Subscribed to topic: ${topic}`)
                })
            })
            client.on('message', function (topic, message) {
                console.log(`Message on ${topic}: ${message.toString()}`)
            })
        }

    }, [client.connected])


    const mqttPublish = (msg) => () => {
        if (client) {
            client.publish(topic, msg, 2, error => {
                if (error) {
                    console.log('Publish error: ', error);
                }
            });
        }
    }

    return (
        <div className="handheld">
            <button onClick={mqttPublish(TOGGLE_BACKGROUND)}>
                Action 1
            </button>
            <button onClick={mqttPublish(DO_REDIRECT)}>
                Action 2
            </button>
        </div>
    )
}
