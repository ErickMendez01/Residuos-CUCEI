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
    const deleteWithId = await prisma.dispositivo.findFirst({
        where: {
        id_dispositivo: Number(body.id),
      },
    })
    
    if(deleteWithId?.id_dispositivo) {

        const deleteDispositive = await prisma.dispositivo.delete({
            where: { id_dispositivo: Number(body.id) },
        });

       
        return new Response(JSON.stringify({ dispositive: deleteDispositive, delete: true }), {
            status: 200,
        })
        
    }else{
        return new Response(
            JSON.stringify({ message: "DISPOSITIVE_DELETE_ERROR", delete: false }),
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