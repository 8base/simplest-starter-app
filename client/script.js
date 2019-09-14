const https = require('https')

/* Create options */
const options = {
  path: '/ck0jrdzrw01zc01me52y73y9b',
  hostname: 'api.8base.com',
  method: 'POST',
  port: 443,
  headers: {
    'Content-Type': 'application/json'
    /* If authentication is required, add an API TOKEN */
    /* 'Authorization': 'Bearer ${API_TOKEN}'*/
  }
}

/* Create request */
const req = https.request(options, (res) => {
  res.on('data', (d) => process.stdout.write(d))
})

/* Get search arg */
const search = process.argv.slice(2)[0];

/* Create query */
const data = JSON.stringify({
  query: `{ simpleResolver(search: \"${search}\") { result } }`
})

/* Execute request */
req.on('error', console.error)
req.write(data)
req.end()