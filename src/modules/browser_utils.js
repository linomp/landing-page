export function buildUrl(id) {

    let url = window.location.href + "#/handheld?id=" + id

    if (process.env.REACT_APP_DEBUG) {
        console.log("Handheld URL: " + url)
    }

    return url;
}


