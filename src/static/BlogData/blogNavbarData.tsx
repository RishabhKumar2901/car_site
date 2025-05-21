import { blogContentData } from "./blogContentData";
import { blogContentData2 } from "./blogContentData2";

export const blogNavbarData = [
    {
        to: "Home",
        link: "/blog",
        data: blogContentData
    },
    {
        to: "Maintenance",
        link: "/blog/maintenance",
        data: blogContentData2,
        category: "Maintenance"
    },
    {
        to: "Wheel Care",
        link: "/blog/wheel-care",
        data: blogContentData,
        category: "Wheel Care",
    },
    {
        to: "Cleaning And Detailing",
        link: "/blog/cleaning-and-detailing",
        data: blogContentData2,
        category: "Cleaning And Detailing",
    },
    {
        to: "Batteries",
        link: "/blog/batteries",
        data: blogContentData,
        category: "Batteries",
    },
    {
        to: "Q&As",
        link: "/blog/interesting-reads",
        data: blogContentData2,
        category: "Q&As",
    },
    {
        to: "Auto News",
        link: "/blog/auto-news",
        data: blogContentData,
        category: "Auto News",
    },
    {
        to: "Fun Reads",
        link: "/blog/fun-reads",
        data: blogContentData2,
        category: "Fun Reads",
    },
]