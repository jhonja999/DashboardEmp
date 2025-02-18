import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const businesses = await prisma.business.findMany({
      where: { userId },
    })
    return NextResponse.json(businesses)
  } catch (error) {
    console.error('Failed to fetch businesses:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { name, description } = await req.json()

    const business = await prisma.business.create({
      data: {
        name,
        description,
        userId,
      },
    })

    return NextResponse.json(business)
  } catch (error) {
    console.error('Failed to create business:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}