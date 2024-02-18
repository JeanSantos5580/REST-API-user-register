import { Router } from "express"
import { createUserController as createUser } from "./controllers/user/CreateUserController"
import { getAllUsersController as getAllUsers } from "./controllers/user/GetAllUsersController"
import { deleteUserController as deleteUser } from "./controllers/user/DeleteUserController"
import { editUserController as editUser } from "./controllers/user/EditUserController"
import { createProfileController as createProfile } from "./controllers/profile/CreateProfileControlller"
import { getAllUserProfileController as getAllUserProfile } from "./controllers/user_profile/GetAllUserProfileController"
import { findUserProfileByIdController as findUserProfileById } from "./controllers/user_profile/FindUserProfileById"
import { getAllProfilesController as getAllProfiles } from "./controllers/profile/GetAllProfiles"
import { deleteProfileController as deleteProfile} from "./controllers/profile/DeleteProfileController"
import { editProfileController as editProfile} from "./controllers/profile/EditProfileController"

const router = Router()

router.get("/user", getAllUsers)
router.post("/user", createUser)
router.put("/user/edit/:id", editUser)
router.delete("/user/delete/:id", deleteUser)

router.post('/profile/create', createProfile)
router.get('/profile', getAllProfiles)
router.put('/profile/edit/:id', editProfile)
router.delete('/profile/delete/:id', deleteProfile)

router.get('/user/profile', getAllUserProfile)
router.get('/user/profile/:id', findUserProfileById)


export { router }