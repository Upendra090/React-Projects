import { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import blogs from "../data.json";
import { paginate } from "../utils/paginate";

export default function Home() {
  const currentPageFromLastTime = window.localStorage.getItem("currentPage");
  const [state, setState] = useState({
    totalBlogs: blogs.length,
    blogPerPage: 12,
    currentPage: currentPageFromLastTime
      ? parseInt(currentPageFromLastTime)
      : 1,
  });

  useEffect(() => {
    window.localStorage.setItem("currentPage", state.currentPage.toString());
  }, [state.currentPage]);

  const handlePageEvent = (page) => {
    setState({ ...state, currentPage: page });
  };

  const pages = paginate(blogs, state.currentPage, state.blogPerPage);

  const blogElement = pages.map((blog) => {
    return <Card key={blog.id} {...blog} />;
  });

  return (
    <div className="container">
      <div className="container__heading">
        <h3 className="el-heading">All published blogs</h3>
      </div>
      <div className="cards">{blogElement}</div>
      <Pagination
        count={state.totalBlogs}
        pageSize={state.blogPerPage}
        currentPage={state.currentPage}
        handlePage={handlePageEvent}
      />
    </div>
  );
}
