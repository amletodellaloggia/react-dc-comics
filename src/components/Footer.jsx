import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-100">
              <div className="icons-list">
                <div>
                  <img
                    src="/img/buy-comics-digital-comics.png"
                    alt="Digital Comics"
                  />
                  <span>DIGITAL COMICS</span>
                </div>
                <div>
                  <img
                    src="/img/buy-comics-merchandise.png"
                    alt="Merchandise"
                  />
                  <span>DC MERCHANDISE</span>
                </div>
                <div>
                  <img
                    src="/img/buy-comics-subscriptions.png"
                    alt="Subscription"
                  />
                  <span>SUBSCRIPTION</span>
                </div>
                <div>
                  <img
                    src="/img/buy-comics-shop-locator.png"
                    alt="Shop Locator"
                  />
                  <span>COMIC SHOP LOCATOR</span>
                </div>
                <div>
                  <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
                  <span>DC POWER VISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-footer">
        <div className="container">
          <div className="row-footer">
            <div className="col-50-footer">
              <div className="col-33-footer">
                <ul>
                  <b>DC COMICS</b>
                  <li>Characters</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>TV</li>
                  <li>Games</li>
                  <li>Videos</li>
                  <li>News</li>
                </ul>
                <ul>
                  <b>SHOP</b>
                  <li>Shop DC</li>
                  <li>Shop DC Collectibles</li>
                </ul>
              </div>

              <div className="col-33-footer">
                <ul>
                  <b>DC</b>
                  <li>Terms Of Use</li>
                  <li>Privacy Policy (New)</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Jobs</li>
                  <li>Subscriptions</li>
                  <li>CPSC Certificates</li>
                  <li>Ratings</li>
                  <li>Shop Help</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-33-footer">
                <ul>
                  <b>SITES</b>
                  <li>DC</li>
                  <li>MAD Magazine</li>
                  <li>DC Kids</li>
                  <li>DC Universe</li>
                  <li>DC Power Visa</li>
                </ul>
              </div>
            </div>
            <div className="middle-footer-dc-logo">
		<img src="/public/img/dc-logo-bg.png" alt="Footer DC Logo" />
			</div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container-center">
          <span>© DC Comics</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
