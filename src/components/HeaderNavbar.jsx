

const HeaderNavbar = () => {
  const navbarLinks = [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Collectibles",
    "Videos",
    "Fans",
    "News",
    "Shop"
  ];
  return (
    <div className="col-75">
      <ul id="menu">
        {navbarLinks.map((link, index) => {
          return (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderNavbar;
