import { NextResponse } from "next/server"
import { ConnectDB } from "../../../../lib/config/db"
import { writeFile } from "fs/promises"
import BlogModel from "../../../../lib/models/blogModel"

const LoadDb = async () => {
    await ConnectDB()
}

LoadDb();

export async function GET(req, res) {
    console.log("Blog Get Hit")
    return NextResponse.json({ msg: "API working" })
}


export async function POST(req) {
    const formData = await req.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    const imageUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imageUrl}`,
        authorImg: `${formData.get('authorImg')}`
    }

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Data added" })

}