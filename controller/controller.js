import express from 'express';
import User from '../model/user-schema.js';
export const getstatus = async (req, res) => {

    try {
        const user = await User.find();
        res.json(user);
    }
    catch (err) {
        res.json({ message: err.message })
    }
}
export const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        res.json(newUser);
    }
    catch (err) {
        res.json({ message: err.message })
    }
}
export const getUserByid = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user);
    }
    catch (err) {
        res.json({ message: err.message })
    }
}
export const editUser = async (req, res) => {
    const user = req.body;
    const id = req.params.id;
    const newUser = new User(user);

    try {
        await User.updateOne({ _id: id }, newUser);
        res.json(newUser);
    }
    catch (err) {
        res.json({ message: err.message })
    }
}
export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.json("user deleted successfully");
    }
    catch (err) {
        res.json({ message: err.message });
    }
}