import { NextResponse } from "next/server"

export async function GET(req, res) {
    console.log("Blog Get Hit")
    return NextResponse.json({ msg: "API working" })
}