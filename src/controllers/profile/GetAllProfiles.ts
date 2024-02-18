import {Request, Response} from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function getAllProfilesController(req: Request, res: Response){
    try{
        const profiles = await prismaClient.profile.findMany()

        return res.json(profiles)
    }catch(error){
        console.log('Error when searching for profiles', error)

        return res.status(500).json({error: 'Error when searching for profiles'})
    }
}   