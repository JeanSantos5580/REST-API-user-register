import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function createProfileController(req: Request, res: Response) {
    try {
        const { bio, user_id } = req.body

        const newProfile = await prismaClient.profile.create({
            data: {
                bio,
                user_id
            }
        })
        return res.json(newProfile)
    } catch (error) {
        console.log("Error on create profile:", error)
        return res.status(500).json({ error: 'Error on create profile.' })
    }
}