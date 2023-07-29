export default function FilterButton(props) {
  const { tags, selectedItem, onItemSelect } = props;
  return (
    <div className="filterbox">
      <div className="fliter-text">
        <h3 className="el-heading">Filter Based On :</h3>
      </div>
      <div className="filter-item">
        {tags.map((tag) => {
          return (
            <span
              onClick={() => onItemSelect(tag)}
              key={tag}
              className={`filter-btn ${selectedItem === tag ? "active" : ""}`}
            >
              {tag.substring(0, 1).toUpperCase() + tag.slice(1)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
