export default function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}
