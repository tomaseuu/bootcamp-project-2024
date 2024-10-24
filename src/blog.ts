type Blog = {
  title: string;
  date: string;
  description: string;
  image: string; // Example: "./images/me.png"
  imageAlt: string;
  slug: string; // a slug is a url name use to direct to a specific page
};

const blogs: Blog[] = [
  {
    title: "A Day In My Life at Cal Poly Slo",
    date: "October 8, 2022",
    description:
      "Join me as I share a glimpse into my life as a freshman at Cal Poly SLO! From morning classes to hanging out with friends, I take you through a typical day filled with learning, laughter, and beautiful campus views. Whether it’s grabbing coffee or studying for exams, come see what life is like at my college!",
    image: "./images/calpoly.png",
    imageAlt: "Cal Poly SLO",
    slug: "a-day-in-my-life-cal-poly",
  },
  {
    title: "I Hosted A Jisoo Solo Watch Party",
    date: "April 12, 2023",
    description:
      "After years of waiting, Jisoo's solo debut finally arrived! In this video, I host a watch party to celebrate and share my thoughts on her new song 'Flower.' Join me as I fangirl over her performance and the choreography!",
    image: "./images/jisoo.png",
    imageAlt: "Jisoo Solo",
    slug: "jisoo-solo-watch-party",
  },
];

function appendBlogsToPage() {
  const blogContainer = document.getElementById("blog-container");

  if (!blogContainer) {
    console.error("Blog container not found");
    return;
  }

  blogs.forEach((blog) => {
    
    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    
    const blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogPost.appendChild(blogTitle);


    const blogDate = document.createElement("p");
    blogDate.classList.add("post-date");
    blogDate.textContent = blog.date;
    blogPost.appendChild(blogDate);


    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogPost.appendChild(blogImage);

    const blogDescription = document.createElement("p");
    blogDescription.textContent = blog.description;
    blogPost.appendChild(blogDescription);

    // Append the blog post to the blog container
    blogContainer.appendChild(blogPost);
  });
}

export default appendBlogsToPage;
