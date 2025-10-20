export const SITE = {
  website: "https://www.harveysingh.xyz/",
  author: "Harvey Singh",
  profile: "https://harveysingh.xyz/",


  desc: "Senior Software Engineer | Tech Blog & Portfolio", // Your professional tagline
  title: "Harvey Singh",
  ogImage: "harvey-singh-og.jpg", // Replace with your own OG image

  lightAndDarkMode: true, // Light/dark theme toggle
  postPerIndex: 4, // Number of posts on homepage
  postPerPage: 4, // Posts per page in pagination
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes buffer for scheduled posts
  showArchives: true, // Show archives page
  showBackButton: true, // Back button in post details

  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/harveylx/",
  },

  dynamicOgImage: true, // Auto-generate OG images for posts
  dir: "ltr", // Text direction (ltr = left-to-right)
  lang: "en", // HTML language code
  timezone: "Europe/London", // Update to your timezone (IANA format)
} as const;