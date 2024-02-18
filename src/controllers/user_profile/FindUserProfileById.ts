import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function findUserProfileByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params
        const user = await prismaClient.user.findUnique({
            where: { id: id },
            include: {
                profile: true
            }
        })

        return res.json(user)
    } catch (error) {
        console.log('Error when searching by user profile.')
        return res.status(500).json({ error: 'Error when searching by user profile.' })
    }
}