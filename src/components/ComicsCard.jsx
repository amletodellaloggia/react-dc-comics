const ComicsCard = () => {
  return (
    <div>
      <div className="comics-card">
        <img src={comic.thumb} alt={comic.series} />
        <h3>{comic.series}</h3>
      </div>
    </div>
  );
};

export default ComicsCard;
