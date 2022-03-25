import "../SCSS/AuthorCard.scss";

const AuthorCard = (props) => {
  return (
    <div className="author-card">
      <h2>Author Card</h2>
      <p>
        This is your {props.type} Account, {props.name}
      </p>
    </div>
  );
};

export default AuthorCard;
