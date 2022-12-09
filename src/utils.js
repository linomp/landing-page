// TODO: explore async-mqtt inestead (https://github.com/mqttjs/async-mqtt)

var mqtt = require('mqtt/dist/mqtt')

export function getClient(clientId) {

    const options = {
        keepalive: 30,
        clientId: clientId,
        clean: true,
        will: {
            topic: 'WillMsg',
            payload: 'Connection Closed abnormally..!',
            qos: 0,
            retain: false
        },
        rejectUnauthorized: false
    }

    const client = mqtt.connect(process.env.REACT_APP_MQTT_HOST, options);

    return client
}

export function buildUrl(id) {

    let url = window.location.href + "handheld?id=" + id

    if (process.env.REACT_APP_DEBUG) {
        console.log("Handheld URL: " + url)
    }

    return url;
}


export function buildGravityTopic(id) {
    return `${id}/commands/gravity`
}