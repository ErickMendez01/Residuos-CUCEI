import {prisma} from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from "next"
import  PrismaClient  from "@prisma/client"
import { z } from "zod"
import { NextRequest } from "next/server"


const routeContextSchema = z.object({
  params: z.object({
    id: z.number()
  }),
})

export async function GET(
  req: NextRequest
  
) {
  try {
    const idParam = req.nextUrl.searchParams.get("id")
    const id = idParam ? Number(idParam) : undefined

    if (typeof id !== "number" || isNaN(id)) {
      return new Response(JSON.stringify({ message: "Invalid or missing id parameter" }), {
        status: 400,
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    return new Response(JSON.stringify({ user }), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: "INTERNAL_ERROR" }), {
      status: 500,
    })
  }
}