// TODO: explore async-mqtt inestead (https://github.com/mqttjs/async-mqtt)

var mqtt = require('mqtt/dist/mqtt')

export function getClient(clientId) {

    var host = 'ws://apps.xmp.systems:9011/mqtt'

    // with these settings, the client was disconnecting too often...
    // var options = {
    //     keepalive: 30,
    //     clientId: clientId,
    //     clean: true,
    //     reconnectPeriod: 1000,
    //     connectTimeout: 30 * 1000,
    //     will: {
    //         topic: 'WillMsg',
    //         payload: 'Connection Closed abnormally..!',
    //         qos: 0,
    //         retain: false
    //     },
    //     rejectUnauthorized: false
    // }

    //var client = mqtt.connect(host, options);
    var client = mqtt.connect(host);

    return client
}

export function buildUrl(id) {

    let url = window.location.href + "handheld?id=" + id
    console.log("URL: " + url)

    return url;
}
