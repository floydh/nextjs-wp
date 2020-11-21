import nodemailer from "nodemailer"

const os = require('os');
const emailPass = "cy~}b^iIu5Jb"
// port 587?

const transporter = nodemailer.createTransport({
    host: os.hostname(),
    port: 25,
    auth: {
        user: "nextjsapp@floydhartford.com",
        pass: emailPass
    }
})

export default async (req, res) => {
    const { senderMail, name, content, recipientMail } = req.body

		console.warn(req.body);

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
    res.send(mailerRes)
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
