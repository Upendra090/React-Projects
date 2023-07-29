export default function Card(props) {
  return (
    <div className="card">
      <div className="card__item">
        <h2 className="el-title">{props.title.substring(0, 45)}</h2>
      </div>
      <div className="card__item">
        <p className="el-author">
          by <span className="el-name">{props.author}</span>
        </p>
      </div>
      <div className="card__item">
        <p className="el-description">
          {props.content.substring(0, 60)}
          <a className="el-readmore">Read More</a>
        </p>
      </div>
      <div className="card__item card__info">
        <span className="el-text">Publish date</span>
        <span className="el-date">{props.publishDate}</span>
      </div>
      <div className="card__item card__info">
        <span className="el-text">Read Time</span>
        <span className="el-readtime">{props.readTime} min</span>
      </div>
      <div className="card__item card__info">
        <span className="el-text">Source</span>
        <span className="el-source">{props.source}</span>
      </div>
    </div>
  );
}
