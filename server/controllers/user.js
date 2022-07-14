import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

import UserModal from "../models/user.js";
import TokenModal from "../models/Tokens.js"

const secret = 'test';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await UserModal.findOne({ email });

        if (!oldUser) return res.status(404).json({ error_message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ error_message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        return res.status(200).json({ result: oldUser, token, message: "User Signup Successfull" });
    } catch (err) {
        res.status(500).json({ error_message: "Something went wrong" });
    }

};
export const emailvalidate = async (req, res) => {
    const { email } = req.body;
    const oldUser = await UserModal.findOne({ email });
    if (oldUser) return res.status(400).json({ error_message: "User already exists" });
    res.status(201).json({ message: "User Signup Successfull" });
};

export const signup = async (req, res) => {
    const { email, fullname, password } = req.body;
    try {
        const oldUser = await UserModal.findOne({ email });
        if (oldUser) return res.status(400).json({ error_message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModal.create({ email, password: hashedPassword, fullname: fullname });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token, message: "User Signup Successfull" });

    } catch (error) {
        res.status(500).json({ error_message: "Something went wrong" });

        console.log(error);
    }
};

export const profileUpdate = async (req, res) => {
    const { fullname, email, _id } = req.body;

    try {
        const user = await UserModal.findOne({ _id });

        if (user.email == email) {
        }
        else {
            const user_exist = await UserModal.findOne({ email });

            if (user_exist) return res.status(400).json({ error_message: "An account with this email address is already in use." });
        }
        user.fullname = fullname;
        user.email = email;
        await user.save();
        res.status(200).send({ result: user, message: "User Profile successfully" });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

