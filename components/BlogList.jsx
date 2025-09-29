import React from 'react'
import { blog_data } from '../assets/assets'
import BlogItem from "../components/BlogItem"

const BlogList = () => {
    return (
        <div>
            <div className='flex justify-center gap-6 my-10 '>
                <button className='bg-black text-white py-1 px--4 rounded-sm'>All</button>
                <button className=''>Technology</button>
                <button className=''>StartUp</button>
                <button className=''>Lifestyle</button>

            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.map((item , index) => {
                    return <BlogItem key={index} category={item.category} categoryImage={item.image} title={item.title} description={item.description}/>
                })}
            </div>
        </div>
    )
}

export default BlogList
