import { Link, usePage } from "@inertiajs/react";
// import Layout from "../Layout/Layout";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { useState } from "react";
import {Head} from '@inertiajs/react'



export default function Home({ posts }) {
    const route = useRoute();

    const { flash } = usePage().props
    const {component}=usePage()
    

    console.log(usePage());
    const [flashMsg,setFlashMsg]=useState(flash.message)

    setTimeout(()=>{
        setFlashMsg(null)
    },2000)

    return (
        <>
            <Head title={component}/>
                
            
            <h1 className="title">Hello</h1>
            {flashMsg &&(<div className="absolute top-24 right-6 
            bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                {flashMsg}
            </div>)}

            {flash.success &&(<div className="absolute top-24 right-6 
            bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                {flash.success}
            </div>)}

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`}
                            className="text-link">Read more...</Link> */}

                        <Link href={route('posts.show', post)}
                            className="text-link">Read more...</Link>
                    </div>

                ))}
            </div>
            <div className="py-12 px-4 flex gap-2">
                {posts.links.map((link, i) => (
                    link.url ? (
                        <Link
                            key={i}
                            href={link.url}
                            className={link.active ? "font-bold text-blue-600" : "text-gray-700"}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></Link>
                    ) : (
                        <span
                            key={i}
                            className="text-gray-400"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></span>
                    )
                ))}
            </div>




        </>
    );
}

// Home.layout = page => <Layout Children={page} />
// export default Home;



