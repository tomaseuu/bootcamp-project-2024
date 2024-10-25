"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs = [
    {
        title: "A Day In My Life at Cal Poly Slo",
        date: "October 8, 2022",
        description: "Join me as I share a glimpse into my life as a freshman at Cal Poly SLO! From morning classes to hanging out with friends, I take you through a typical day filled with learning, laughter, and beautiful campus views. Whether it’s grabbing coffee or studying for exams, come see what life is like at my college!",
        video: "./images/calpoly.png",
        slug: "a-day-in-my-life-cal-poly",
    },
    {
        title: "I Hosted A Jisoo Solo Watch Party",
        date: "April 12, 2023",
        description: "After years of waiting, Jisoo's solo debut finally arrived! In this video, I host a watch party to celebrate and share my thoughts on her new song 'Flower.' Join me as I fangirl over her performance and the choreography!",
        video: "./images/jisoo.png",
        slug: "jisoo-solo-watch-party",
    },
    {
        title: "The GREATEST Sophomore College Weekend at Cal Poly Slo",
        date: "July 6, 2024",
        description: "Join me for one of my favorite weekends at Cal Poly SLO, where we celebrated with a delicious hot pot gathering! 🍲 As part of the Chinese Student Association (CSA), we had a blast bonding over food and fun. From great conversations to unforgettable moments, this video captures all the highlights of our time together. You won’t want to miss it!",
        video: "./images/weekend.png",
        slug: "college-weekend-at-Cal-Poly-Slo",
    },
];
function appendBlogsToPage() {
    const blogContainer = document.getElementById("blog-container");
    if (!blogContainer) {
        console.error("Blog container not found");
        return;
    }
    // create a function to iterate over the list of blogs
    blogs.forEach((blog) => {
        // new post
        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        // title
        const blogTitle = document.createElement("h1");
        blogTitle.textContent = blog.title;
        blogPost.appendChild(blogTitle);
        //blog video
        const blogVideo = document.createElement("iframe");
        blogVideo.src = blog.video;
        blogVideo.width = "560";
        blogVideo.height = "315";
        blogVideo.frameBorder = "0";
        blogVideo.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        blogVideo.referrerPolicy = "strict-origin-when-cross-origin";
        blogVideo.allowFullscreen = true;
        blogPost.appendChild(blogVideo);
        const blogDescription = document.createElement("p");
        blogDescription.textContent = blog.description;
        blogPost.appendChild(blogDescription);
        blogContainer.appendChild(blogPost);
    });
}
exports.default = appendBlogsToPage;
