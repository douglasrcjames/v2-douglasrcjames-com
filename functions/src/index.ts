"use strict";
import functions = require('firebase-functions');
import admin = require("firebase-admin");
import nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

export const onMessageCreated = functions.firestore.document('messages/{messageId}')
  .onCreate(async (snap: { data: () => any; }) => {
    console.log("Message create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h2>New <u>douglasrcjames.com</u> Website Contact</h2>
            <p>
                A new contact message has arrived! You can directly reply to this email to 
                contact the visitor back on their question or inquiry if need be. Their information and message is detailed below.
            </p>
            <h3>Details:</h3>
            <p><u>Name</u>: ${newValue.name}</p>
            <p><u>Email</u>: ${newValue.email}</p>
            <h3>Message:</h3>
            <p>${newValue.message}</p>
        </div>
        `
        // Config it
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            requireTLS: true,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: functions.config().email.user,
                pass: functions.config().email.password
            }
        })
        console.log("transporter = " + transporter)
        // firebase functions:config:set email.user="im@douglasrcjames.com" email.password=""
        // Pack it
        const mailOptions = {
            from: `im@douglasrcjames.com`,
            to: 'douglasrcjames@gmail.com',
            replyTo: `${newValue.email}`,
            subject: `New douglasrcjames.com contact from ${newValue.name}`,
            text: newValue.message,
            html: htmlEmail
        }

        // Send it
        return transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(error)
        return;
    }
  });
