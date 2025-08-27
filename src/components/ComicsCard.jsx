const ComicsCard = ({ comic }) => {
  return (
    <div className="comics-card">
      <img src={comic.thumb} alt={comic.series} />
      <h3>{comic.series}</h3>
    </div>
  );
};

export default ComicsCard;
