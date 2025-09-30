"use client"
import {use} from "react"
import { assets, blog_data } from "../../../../assets/assets"
import Image from "next/image"
import Footer from "../../../../components/Footer"
import Link from "next/link"

const Page = ({ params }) => {
  const { id } = use(params)
  const blog = blog_data.find((item) => item.id == id)

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
            <Link href={"/"}>
               <Image src={assets.logo} alt="..." className="w-[130px] sm:w-auto"/> 
            </Link>   
             <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
               Get Started <Image src={assets.arrow} alt="...." />
             </button>
            </div>
            <div className="text-center my-24">
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700] mx-auto">{blog.title}</h1>
             <Image className="mx-auto mt-6 border border-white rounded-full " src={blog.author_img} width={60} height={60}  alt="..." />
             <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{blog.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
         <Image src={blog.image} alt="..." width={1280} height={720} className="border-4 border-white" />
         <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
         <p className="">{blog.description}</p>
         <h3 className="my-5 text-[18px] font-semibold">Step:1 Self reflection and goal setting</h3>
         <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      
         <h3 className="my-5 text-[18px] font-semibold">Step:2 Self reflection and goal setting</h3>
         <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      
         <h3 className="my-5 text-[18px] font-semibold">Step:3 Self reflection and goal setting</h3>
         <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      
         <h3 className="my-5 text-[18px] font-semibold">Step:4 Self reflection and goal setting</h3>
         <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      

       <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
         <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer nec bibendum risus. Curabitur dapibus erat vel ante vestibulum, sed feugiat leo feugiat. Proin sit amet justo vel mauris posuere hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
       <div className="my-24 ">
        <p className="text-black  font-semibold my-4">Share this article</p>
       <div className="flex">
        <Image src={assets.facebook_icon} width={50} alt="...."/>
        <Image src={assets.twitter_icon} width={50} alt="...."/>
        <Image src={assets.googleplus_icon} width={50} alt="...."/>
       </div>
       </div>
     </div>
     <Footer/>
    </>
  )
}

export default Page
