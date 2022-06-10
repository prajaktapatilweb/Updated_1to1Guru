import axios from "axios";

export default async function handler(req, res) {
    try {
        console.log(req.body)
        await axios.post(`${req.body.text}`)
        res.status(200).end()
    } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}