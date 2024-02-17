import { Router } from "express"
import { createUserController as createUser } from "./controllers/user/CreateUserController"
import { getAllUsersController as getAllUsers } from "./controllers/user/GetAllUsersController"
import { deleteUserController as deleteUser } from "./controllers/user/DeleteUserController"
import { editUserController as editUser } from "./controllers/user/EditUserController"
import { createProfileController as createProfile } from "./controllers/profile/CreateProfileControlller"

const router = Router()

router.get("/user", getAllUsers)
router.post("/user", createUser)
router.put("/user/edit/:id", editUser)
router.delete("/user/delete/:id", deleteUser)

router.post('/profile/create', createProfile)

export {router}