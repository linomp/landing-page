import mqtt from 'mqtt';

// Source for fixing the issue with Vite and MQTT.js:
// https://github.com/mqttjs/MQTT.js/issues/1163

export function getClient() {

    const client = mqtt.connect(import.meta.env.VITE_MQTT_HOST);

    if (import.meta.env.VITE_DEBUG) {
        console.log("MQTT host: " + import.meta.env.VITE_MQTT_HOST)
    }

    return client
}

export function buildTopic(id) {
    return `${id}/commands`
}