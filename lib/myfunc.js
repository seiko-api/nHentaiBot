const axios = require("axios")
const fetch = require('node-fetch')

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
exports.jsonformat = jsonformat = (string) => {
	return JSON.stringify(string, null, 2)
}

exports.sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}