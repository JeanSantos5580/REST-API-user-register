import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export async function createUserController(req: Request, res: Response) {
    try {
        const { first_name, last_name, age } = req.body
        const user = await prismaClient.user.create({
            data: {
                first_name,
                last_name,
                age
            }
        })

        return res.json(user)
    } catch (error) {
        console.log('Erro ao criar produto:', error)
        return res.status(500).json({ error: 'Erro ao criar produto' })
    }
}

