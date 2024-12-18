export interface Blog {
  name: string;
  description: string;
  posted: string;
  image: string; // embed link (youtube)
  slug: string;
}

const blogs: Blog[] = [
  {
    name: "A Day In My Life at Cal Poly Slo",
    description:
      "Join me as I share a glimpse into my life as a freshman at Cal Poly SLO! From morning classes to hanging out with friends, I take you through a typical day filled with learning, laughter, and beautiful campus views. Whether it’s grabbing coffee or studying for exams, come see what life is like at my college!",
    image: "https://www.youtube.com/embed/CcYRiYAsLyw?si=JetIb-f59PLTvpou",
    posted: "October 8, 2022",
    slug: "a-day-in-my-life-at-cal-poly-slo",
  },
  {
    name: "Jisoo's Solo Debut Watch Party",
    description:
      "After years of waiting, Jisoo solo debut finally arrived! In this video, I host a watch party to celebrate and share my thoughts on her new song Flower. The MV is stunning, showcasing her incredible visuals and creativity. Join me as I fangirl over her performance, the choreography, and why I can’t stop listening to it! Hope you enjoy the vibe!",
    image: "https://www.youtube.com/embed/Jawszsk-uM8",
    posted: "April 12, 2023",
    slug: "jisoo-s-solo-debut-watch-party",
  },
  {
    name: "The GREATEST Sophomore College Weekend",
    description:
      "Join me for one of my favorite weekends at Cal Poly SLO, where we celebrated with a delicious hot pot gathering! As part of the Chinese Student Association (CSA), we had a blast bonding over food and fun. From great conversations to unforgettable moments, this video captures all the highlights of our time together. You won’t want to miss it!",
    image: "https://www.youtube.com/embed/hlmBHxL76kY",
    posted: "July 6, 2024",
    slug: "the-greatest-sophomore-college-weekend",
  },
];

export default blogs;
