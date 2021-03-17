const data = require('./feed.json')
const tData = []

data.forEach(element => {
    const data = element["content:encoded"].split("<p>")[1];
    const result = data.split("src=")[1]
    if (result == null) {
        element.imgSrc = 'https://i.stack.imgur.com/y9DpT.jpg'
        console.log('Error on Result')
    } else {
        const res = result.split('"')[1]
        element.imgSrc = res;
        tData.push(element);
        console.log(tData)
    }
})