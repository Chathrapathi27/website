import { Link } from "react-router-dom";

function Card({ id, title }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/assets/${id}.png`} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <Link to={`/vis/${id}`}>Explore</Link>
      </div>
    </div>
  );
}

export default Card;
