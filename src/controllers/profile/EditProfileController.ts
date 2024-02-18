import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function editProfileController(req: Request, res: Response) {
    try {
        const { id } = req.params
        const { bio } = req.body
        const editedProfile = await prismaClient.profile.update({
            where: {
                id: id
            }, data: {
                bio
            }
        })

        return res.json(editedProfile)
    } catch (error) {
        console.log('Error editing profile data:', error)
        return res.status(500).json({ error: 'Error editing profile data.' })
    }
}