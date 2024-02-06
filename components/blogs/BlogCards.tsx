import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const BlogCards = ({ blog }) => {
    const router = useRouter()
    return (
        <div className='mt-10 ml-3 cursor-pointer'>
            <div key={"bolg-cards-Simple" + blog._id} className='card flex flex-col'>
                <div className="image relative">
                    <li onClick={() => router.push(`/blogs/${blog._id}`)}>
                        <Image
                            src={blog.image}
                            alt="Picture"
                            className="shadow-md"
                            height={300} width={300}
                        />
                    </li>
                </div>
                <div className="card-body px-0 py-3 flex flex-col items-start w-full">
                    <div className="userDetail flex">
                        <p className='text-[#495057]/60 font-medium text-xs'>{blog.createdAt}</p>
                    </div>
                    <div className="blogHeading pt-3">
                        <h2 className='text-2xl font-bold'>{blog.title}</h2>
                    </div>
                    <div className="blogParagraph">
                        <p className='text-[#495057] font-medium text-xs'>{blog.content}</p>
                    </div>
                    <div className='w-full'>
                        <hr className='me-6 my-3' />
                    </div>
                    <div>
                        <p className='text-[#495057] font-medium text-xs'>By: Peter Rowardson</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
