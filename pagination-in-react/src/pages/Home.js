import { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import blogs from "../data.json";
import { paginate } from "../utils/paginate";
import FilterButton from "../components/FilterButton";
import PageHeading from "../components/PageHeading";

export default function Home() {
  const currentPageFromLastTime = window.localStorage.getItem("currentPage");
  const [state, setState] = useState({
    totalBlogs: blogs.length,
    blogPerPage: 15,
    currentPage: currentPageFromLastTime
      ? parseInt(currentPageFromLastTime)
      : 1,
    source: ["all", "news", "blog", "magazine"],
  });

  useEffect(() => {
    window.localStorage.setItem("currentPage", state.currentPage.toString());
  }, [state.currentPage]);

  const handlePageEvent = (page) => {
    setState({ ...state, currentPage: page });
  };

  const hangleSourceSelect = (tag) => {
    setState({ ...state, selectedSource: tag, currentPage: 1 });
  };

  const selectedSource = state.selectedSource;

  let filtered;

  if (selectedSource && selectedSource === "all") {
    filtered = blogs;
  } else {
    filtered = selectedSource
      ? blogs.filter((s) => s.source === selectedSource)
      : blogs;
  }

  const pages = paginate(filtered, state.currentPage, state.blogPerPage);

  const blogElement = pages.map((blog) => {
    return <Card key={blog.id} {...blog} />;
  });

  return (
    <div className="container">
      <PageHeading filtered={filtered} selectedSource={selectedSource} />
      <FilterButton
        tags={state.source}
        selectedItem={state.selectedSource}
        onItemSelect={hangleSourceSelect}
      />
      <div className="cards">{blogElement}</div>
      <Pagination
        count={filtered.length}
        pageSize={state.blogPerPage}
        currentPage={state.currentPage}
        handlePage={handlePageEvent}
      />
    </div>
  );
}
