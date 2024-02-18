import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function editUserController(req: Request, res: Response) {
    try {
        const { id } = req.params
        const {first_name, last_name, age} = req.body

        const updatedUser = await prismaClient.user.update({
            where: { id: id },
            data: {
                first_name,
                last_name,
                age
            }
        })

        return res.json(updatedUser)
    } catch (error) {
        console.log('Error editing user data:', error)
        return res.status(500).json({ error: 'Error editing user data.' })
    }
}