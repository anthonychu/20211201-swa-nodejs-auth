module.exports = async function (context, req) {
    const header = req.headers['x-ms-client-principal']

    if (header) {
        const encoded = Buffer.from(header, 'base64')
        const decoded = encoded.toString('utf-8')

        context.res = {
            body: JSON.parse(decoded)
        }
    }
}