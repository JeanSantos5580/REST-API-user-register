import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function deleteProfileController(req: Request, res: Response) {
    try {
        const { id } = req.params

        const deletedProfile = await prismaClient.profile.delete({ where: { id: id } })

        res.json(deletedProfile)
    } catch (error) {
        console.log('Error on deleting profile:', error)
        return res.status(500).json({ error: 'Error on deleting profile.' })
    }
}