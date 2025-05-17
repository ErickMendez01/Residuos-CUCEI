import {prisma} from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from "next"
import  PrismaClient  from "@prisma/client"
import { z } from "zod"
import { NextRequest } from "next/server"


const routeContextSchema = z.object({
  params: z.object({
    page: z.number().optional(),
    itemsPerPage: z.number().optional(),
  }),
})

export async function GET(
  req: NextRequest
  
) {
  try {
    const page = req.nextUrl.searchParams.get("page")
    const itemsPerPage = req.nextUrl.searchParams.get("itemsPerPage")
    
    const dispositives = await prisma.dispositivo.findMany({
      skip: (Number(page) - 1) * Number(itemsPerPage),
      take: Number(itemsPerPage),
    })

    const total = await prisma.dispositivo.count({ })
    return new Response(JSON.stringify({ dispositives, total }), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: "INTERNAL_ERROR" }), {
      status: 500,
    })
  }
}