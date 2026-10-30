import { NextResponse } from 'next/server'
import React from 'react'

const users = [
    {
        id: 1, name: "Ali", src: "/ball.png"
    },
    {
        id: 2, name: "Reza", src: "/dog.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        message: "Helle From Next js API",
        users
    })
}

export const POST = async (request: Request) => {

    const body = await request.json();

    users.push(body)

    return NextResponse.json({
        message: "Successful Add User",
        user: body
    })

}


export const PUT = async (request: Request) => {

    const body = await request.json();

    users.push(body)

    return NextResponse.json({
        message: "Successful Add User",
        user: body
    })

}

export const DELETE = async (request: Request) => {

    const body = await request.json();

    users.push(body)

    return NextResponse.json({
        message: "Successful Add User",
        user: body
    })

}