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
        description: "GO STREA AESPA WHIPLASH ",
        image: "./img/aespa-whiplash.jpg",
        imageAlt: "WHIPLASH <3",
        slug: "Stream-Whiplash",
    },
    {
        title: "STREAM APT BY ROSE and BRUNO MARS",
        date: "10/23/2024",
        description: "STREAM APT BY ROSE and BRUNO MARS",
        image: "./img/APT.jpg",
        imageAlt: "APT <3",
        slug: "Stream-APT",
    },
];

const blogContainer = document.getElementById('blog-container');