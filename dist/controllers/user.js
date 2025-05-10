import { prisma } from "../app.js";
import { TryCatch } from "../middlewares/error.js";
export const newUser = TryCatch(async (req, res) => {
    const { name, email, age } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            email,
            age,
        },
    });
    res.json({
        message: "User Registered Successfully",
        user,
    });
});
export const updateUser = TryCatch(async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await prisma.user.update({
        where: {
            id,
        },
        data: {
            name,
            email,
            age,
        },
    });
    res.json({
        message: "User Updated Successfully",
        user,
    });
});
export const newOrUpdateUser = TryCatch(async (req, res) => {
    const { name, email, age } = req.body;
    const user = await prisma.user.upsert({
        where: {
            email,
        },
        update: {
            name,
            email,
            age,
        },
        create: {
            name,
            email,
            age,
        },
    });
    res.json({
        message: "User Updated Successfully",
        user,
    });
});
export const deleteUser = TryCatch(async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.delete({
        where: {
            id,
        },
    });
    res.json({
        message: "User Deleted Successfully",
        user,
    });
});
export const getAllUsers = TryCatch(async (req, res) => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            age: true,
        },
    });
    res.json({
        users,
    });
});
export const getUserDetails = TryCatch(async (req, res) => {
    const id = req.params.id;
    const user = await prisma.user.findMany({
        where: { id },
        select: {
            name: true,
            email: true,
            age: true,
            blogs: {
                select: {
                    title: true,
                },
            },
            notificationMethods: {
                select: {
                    email: true,
                    phone: true,
                },
            },
        },
    });
    res.json({
        user,
    });
});
export const UsersBlogs = TryCatch(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;
    const offset = (page - 1) * limit;
    const users = await prisma.user.findMany({
        skip: offset,
        take: limit,
        select: {
            name: true,
            email: true,
            createdAt: true,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
    res.json({
        users,
    });
});
export const newBlog = TryCatch(async (req, res) => {
    const { title, content, userId } = req.body;
    const blog = await prisma.blog.create({
        data: {
            title,
            content,
            User: {
                connect: {
                    id: userId,
                },
            },
        },
    });
    res.json({
        message: "New Blog Created",
        blog,
    });
});
