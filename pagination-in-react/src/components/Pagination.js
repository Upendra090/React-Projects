import _ from "lodash";

export default function Pagination(props) {
  const { count, pageSize, currentPage, handlePage } = props;

  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return;

  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination">
      {pages.map((page) => {
        return (
          <span
            key={page}
            className={`el-pg ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePage(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
}
