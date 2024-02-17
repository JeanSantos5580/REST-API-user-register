import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function createUserController(req: Request, res: Response) {
    try {
        const { first_name, last_name, age } = req.body
        const newUser = await prismaClient.user.create({
            data: {
                first_name,
                last_name,
                age
            }
        })

        return res.json(newUser)
    } catch (error) {
        console.log('Error creating product:', error)
        return res.status(500).json({ error: 'Error creating product' })
    }
}

