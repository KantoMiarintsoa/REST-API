import { registerUSer, readUser, updateUser, deleteUser } from "../controllers/userController.js"
import { Router } from "express"

const router = Router()

router.post('/register', registerUSer)
router.get('/read/:id', readUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router