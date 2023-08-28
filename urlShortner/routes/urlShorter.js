const shortid = require('shortid');

function validateUrl(value) {
    // console.log(value);
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i');

    // console.log(urlPattern.test(value));
    return !!urlPattern.test(value);
}


const urlShorter = (url) => {
    if (validateUrl(url) == true) {
        // console.log("Done", shortid.generate(url));
        return shortid.generate(url)
    } else {
        console.log("failed");
    }

}

// urlShorter(url)

module.exports = { urlShorter }