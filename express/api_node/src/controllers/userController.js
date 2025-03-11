import { registerUser as createUser, deleteUserService, getUser, updateUser as updateUserService } from "../servcies/userService.js";

export const registerUSer = async (req, res) => {

    const { name, email, password } = req.body

    const newUser = await createUser({ name, email, password });

    return res.json(newUser).status(newUser.message ? 500 : 201);
}

export const readUser = async (req, res) => {
    const { id } = req.params

    const result = await getUser({ id: parseInt(id) });

    if (result.message) {
        return res.status(404).json({ message: result.message })
    }
    return res.status(200).json(result.user)

}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    const result = await updateUserService({ id: parseInt(id), data: { name, email, password } });

    if (result.message) {
        return res.status(404).json({ message: result.message })
    }
    return res.status(200).json(result.user)
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    const result = await deleteUserService({ id: parseInt(id) });

    if (result.message) {
        return res.status(404).json({ message: result.message })
    }
    return res.status(200).json(result.user)
}