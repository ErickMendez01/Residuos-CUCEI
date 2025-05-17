import { NextApiRequest } from "next"
import { z } from "zod"
import { prisma } from "@/lib/prisma"

const routeContextSchema = z.object({
  id: z.string(),
})
export async function DELETE(req: Request) {
  try {
    const json = await req.json()
    const body = routeContextSchema.parse(json)
    const deleteWithId = await prisma.user.findFirst({
        where: {
        id: Number(body.id),
      },
    })
    
    if(deleteWithId?.id) {

        const deleteUser = await prisma.user.delete({
            where: { id: Number(body.id) },
        });

       
        return new Response(JSON.stringify({ user: deleteUser, delete: true }), {
            status: 200,
        })
        
    }else{
        return new Response(
            JSON.stringify({ message: "USER_DELETE_ERROR", delete: false }),
            {
                status: 200,
            }
        )
    }
} catch (error) {
    return new Response(JSON.stringify({ message: "INTERNAL_ERROR" }), {
      status: 500,
    })
  }
}