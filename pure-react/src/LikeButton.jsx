export default function LikeButton({ count }) {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
}
