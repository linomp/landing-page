export function buildHandheldUrl(id) {
    let url = window.location.href + "handheld?id=" + id
    console.log("Handheld URL: " + url)

    return url;
}
