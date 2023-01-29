const mqtt = require('mqtt/dist/mqtt')

export function getClient() {

    const client = mqtt.connect(process.env.REACT_APP_MQTT_HOST);

    if (process.env.REACT_APP_DEBUG) {
        console.log("MQTT host: " + process.env.REACT_APP_MQTT_HOST)
    }

    return client
}

export function buildTopic(id) {
    return `${id}/commands`
}