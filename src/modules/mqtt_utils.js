export function getClient() {

    //const client = connect(import.meta.env.VITE_MQTT_HOST);

    const client = {
        on: (event, callback) => {
            console.log("on: " + event)
        },
        publish: (topic, message) => {
            console.log("publish: " + topic + " " + message)
        },
        subscribe: () => {
            console.log("subscribe")
        }
    }

    if (import.meta.env.VITE_DEBUG) {
        console.log("MQTT host: " + import.meta.env.VITE_MQTT_HOST)
    }

    return client
}

export function buildTopic(id) {
    return `${id}/commands`
}