type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "STREAM AESPA WHIPLASH",
    date: "10/23/2024",
    description: "GO STREAM AESPA WHIPLASH ",
    image: "./img/aespa-whiplash.jpg",
    imageAlt: "WHIPLASH <3",
    slug: "stream-whiplash",
  },
  {
    title: "STREAM APT BY ROSE and BRUNO MARS",
    date: "10/23/2024",
    description: "GO STREAM APT BY ROSE and BRUNO MARS",
    image: "./img/APT.jpeg",
    imageAlt: "APT <3",
    slug: "stream-APT",
  },
];

function addBlogs(blogs: Blog[]) {
  const blogContainer = document.getElementById("blog-container");
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    const blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;

    const blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;

    const blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;

    const blogLink = document.createElement("a");
    // link to blog page with a slug
    blogLink.href = `/blogs/${blog.slug}.html`;
    blogLink.textContent = "Read More!";
    blogLink.classList.add("blog-link");

    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogImg);
    blogDiv.appendChild(blogDesc);
    blogDiv.appendChild(blogLink);
    blogContainer?.appendChild(blogDiv);
  });
}

addBlogs(blogs);
