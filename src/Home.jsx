import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
};

export default Home;
