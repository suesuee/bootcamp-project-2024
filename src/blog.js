var blogs = [
  {
    title: "STREAM AESPA WHIPLASH",
    date: "10/23/2024",
    description: "GO STREAM AESPA WHIPLASH ",
    image: "./img/aespa_whiplash.jpg",
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
function addBlogs(blogs) {
  var blogContainer = document.getElementById("blog-container");
  blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    var blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    var blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;
    var blogLink = document.createElement("a");
    // link to blog page with a slug
    blogLink.href = `blogs/${blog.slug}.html`;
    blogLink.textContent = "Read More!";
    blogLink.classList.add("blog-link");
    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogImg);
    blogDiv.appendChild(blogDesc);
    blogDiv.appendChild(blogLink);
    blogContainer === null || blogContainer === void 0
      ? void 0
      : blogContainer.appendChild(blogDiv);
  });
}
addBlogs(blogs);
