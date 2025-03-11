import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const registerUser = async ({ name, email, password }) => {
    try {
        const userExist = await prisma.user.findUnique({
            where: { email }
        });

        if (userExist) {
            return { message: "user exist" };
        }

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: password
            }
        })

        return { user: newUser };
    } catch (error) {
        console.error(error);
        return { message: error };
    }
};

export const getUser = async ({ id }) => {
    try {
        if (id) {
            const user = await prisma.user.findUnique({
                where: { id: id }
            })

            if (!user) {
                return { message: "user not found" }
            }
            return { user };
        }
        return { message: "id is provide" }
    }
    catch (error) {
        return { message: error.message }
    }
}

export const updateUser = async ({ id, data }) => {
    try {
        if (!id) {
            return { message: "id is not provided" }
        }
        const user = await prisma.user.findUnique({
            where: { id: id }
        })

        if (!user) {
            return { message: "user not found" }
        }
        const userUpdate = await prisma.user.update({
            where: { id: id },
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })

        return { user: userUpdate }
    }
    catch (error) {
        return { message: error.message }
    }
}
export const deleteUserService = async ({ id }) => {
    try {
        if (!id) {
            return { message: "id is not provided" }
        }

        const user = await prisma.user.findUnique({
            where: { id: id }
        })

        if (!user) {
            return { message: "user not found" }
        }

        await prisma.user.delete({
            where: { id: id },

        })

        return { user: "user delete succesfully" }
    }
    catch (er) {
        return { message: er.message }
    }
}