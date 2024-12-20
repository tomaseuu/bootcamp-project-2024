import BlogPreview from "@/components/blogPreview";
import React from "react";
import styles from "./blog.module.css";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
      
	} catch (err) {
      console.log(err)
	    return null
	}
}

export default async function Blogs() {
  
  const list_of_blogs = await getBlogs();
  // console.log(list_of_blogs);
  if (!list_of_blogs){
    return <div> Blog Not Found </div>;
  }
  else{
    console.log("in else");
  return (
    <div className={styles.blogPage}>
      <section className={styles.intro}>
        <h1 className={styles.pageTitle}>My Blogs</h1>
      </section>

      <div className={styles.blogContainer}>
        {list_of_blogs.map((blog, index) => (
          // <BlogPreview {...blog} key={index} />
          <BlogPreview 
            key={index}
            name={blog.name}
            posted={blog.posted}
            slug={blog.slug}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>

      <section className={styles.subscribe}>
        <h2>Subscribe to Stay Updated</h2>  
        <p>Hope you enjoy!</p>
        <a
          href="https://www.youtube.com/@tomaseuu"
          target="_blank"
          className={styles.button}
          rel="noopener noreferrer"
        >
          Subscribe!
        </a>
      </section>
    </div>
  );
}
}
