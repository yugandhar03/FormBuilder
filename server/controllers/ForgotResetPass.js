import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

import UserModal from "../models/user.js";
import TokenModal from "../models/Tokens.js"

const secret = 'test';

export const forgotpassword = async (req, res) => {
    const { email } = req.body;
    // var token
    try {
        const oldUser = await UserModal.findOne({ email });
        if (!oldUser) return res.status(400).json({ error_message: "User doesn't exist" });
        let token = await TokenModal.findOne({ userId: oldUser._id });
        var token_gen

        if (!token) {
            var token_gen = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret,
                { expiresIn: "60s" });
            token = await new TokenModal({
                userId: oldUser._id,
                token: token_gen,
            }).save();
        }
        else {
            var token_gen = token.token;
        }
        const url = `http://localhost:3000/passwordreset/${oldUser._id}/${token_gen}`

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ramasaniasha@gmail.com',
                pass: 'gljehqrowtvcxydm'
            }
        });
        var mailOptions = {
            from: 'ramasaniasha@gmail.com',
            to: email,
            subject: "Reset Password",
            html: `
            <div style="padding:10px;border-style: ridge">
            <p>You have a new contact request.</p>
            <h3>Contact Details</h3>
            <a href="${url}">Link</a>
            `,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(400).json({ status: false, error_message: 'Email not sent' })
            }
            else {
                res.status(200).json({ status: true, message: 'Email Sent Successfully' })
            }

        });
    } catch (error) {
        res.status(500).json({ status: false, error_message: "Something went wrong" });

        console.log(error);
    }
};

export const verifylink = async (req, res) => {
    const { id, token } = req.body;

    try {
        const find_token = await TokenModal.findOne({ token });

        if (!find_token) return res.status(400).json({ varifylink: false });

        res.status(201).json({ varifylink: true });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};

//update password

export const updatepassword = async (req, res) => {
 
    try {
        const user = await UserModal.findOne({ _id: req.body.id });

        if (!user) return res.status(400).send({ message: "Invalid link" });

        const token = await TokenModal.findOne({
            userId: user._id,
            token: req.body.token,
        });
        if (!token) return res.status(400).send({ message: "Invalid link" });
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        user.password = hashedPassword;
     
        await user.save();
        await token.remove();

        res.status(200).send({ message: "Password reset successfully" });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};
