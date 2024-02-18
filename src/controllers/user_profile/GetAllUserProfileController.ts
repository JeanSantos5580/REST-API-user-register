import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function getAllUserProfileController(req: Request, res: Response) {
    try {
        const userProfileList = await prismaClient.user.findMany({
            include: {
                profile: true
            }
        })

        return res.json(userProfileList)
    } catch (error) {
        return res.status(500).json({ error: "Error when searching for user profiles." })
    }
}