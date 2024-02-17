import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function getAllUsersController(req: Request, res: Response) {
    try{
        const usersList = await prismaClient.user.findMany()
        return res.json(usersList)
    }catch(error){
        console.log('Error when searching for users: ', error)
        return res.status(500).json({error: "Error when searching for users."})
    }
}