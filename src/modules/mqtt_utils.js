// TODO: explore async-mqtt inestead (https://github.com/mqttjs/async-mqtt)

var mqtt = require('mqtt/dist/mqtt')

export function getClient(clientId) {

    const options = {
        clientId: clientId,
        will: {
            topic: 'WillMsg',
            payload: 'Connection Closed abnormally..!',
            qos: 0,
            retain: false
        },
        rejectUnauthorized: false
    }

    // const client = mqtt.connect(process.env.REACT_APP_MQTT_HOST, options);
    const client = mqtt.connect(process.env.REACT_APP_MQTT_HOST);

    if (process.env.REACT_APP_DEBUG) {
        console.log("MQTT host: " + process.env.REACT_APP_MQTT_HOST)
    }

    return client
}

export function buildGravityTopic(id) {
    return `${id}/commands/gravity`
}