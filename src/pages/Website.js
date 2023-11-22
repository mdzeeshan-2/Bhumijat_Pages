import QualityForm from "../components/QualityForm";
import LovedByCustomersContainer from "../components/LovedByCustomersContainer";
import CardContainer from "../components/CardContainer";
import DeliverySection from "../components/DeliverySection";
import ExploreRicesContainer from "../components/ExploreRicesContainer";
import FormContainer from "../components/FormContainer";
import UnlimitedMembersSection from "../components/UnlimitedMembersSection";
import RiskFreeSection from "../components/RiskFreeSection";
import "./Website.css";

const Website = () => {
  return (
    <div className="website">
      <div className="homepage-wrapper">
        <div className="homepage">
          <div className="homepage-child" />
          <img className="roadmap-1-icon" alt="" src="/roadmap-1@2x.png" />
          <div className="homepage-item" />
          <img className="navbar-icon" alt="" src="/navbar.svg" />
          <img
            className="main-slider-1-1-1-icon"
            alt=""
            src="/mainslider11-1@2x.png"
          />
          <QualityForm />
          <img className="navbar-icon1" alt="" src="/navbar1.svg" />
          <LovedByCustomersContainer />
          <img className="navbar-icon2" alt="" src="/navbar2.svg" />
          <div className="group-parent">
            <div className="checkout-products-on-parent">
              <div className="checkout-products-on">{`Checkout products on  `}</div>
              <img className="image-3-icon" alt="" src="/image-3@2x.png" />
            </div>
            <div className="checkout-products-on-group">
              <div className="checkout-products-on">{`Checkout products on  `}</div>
              <img className="image-3-icon" alt="" src="/image-3@2x.png" />
            </div>
          </div>
          <div className="our-3ws">Our 3W’s</div>
          <div className="what-we-offer">What we offer</div>
          <div className="who">Who ?</div>
          <img className="homepage-inner" alt="" src="/group-13.svg" />
          <div className="rectangle-div" />
          <div className="who">Who ?</div>
          <div className="homepage-child1" />
          <div className="what">What ?</div>
          <div className="why">Why ?</div>
          <div className="homepage-child2" />
          <img className="underline-10-icon" alt="" src="/underline-10.svg" />
          <img className="group-icon" alt="" src="/group-13.svg" />
          <img className="homepage-child3" alt="" src="/group-16.svg" />
          <div className="homepage-child4" />
          <div className="is-the-aim-container">
            <span className="is-the">{`is the `}</span>
            <b>aim</b>
            <span className="is-the"> Bhumijat ?</span>
          </div>
          <div className="is-the-aim-container1">
            <span className="is-the">{`is the `}</span>
            <b>aim</b>
            <span className="is-the"> Bhumijat ?</span>
          </div>
          <div className="is-the-aim-container2">
            <span className="is-the">{`is the `}</span>
            <b>aim</b>
            <span className="is-the"> Bhumijat ?</span>
          </div>
          <img className="image-306-icon" alt="" src="/image-306@2x.png" />
          <div className="homepage-child5" />
          <div className="homepage-child6" />
          <div className="homepage-child7" />
          <div className="homepage-child8" />
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="group-item" />
            <div className="group-inner" />
          </div>
          <div className="homepage-child9" />
          <div className="homepage-child10" />
          <img className="suraj-chacha-2" alt="" src="/suraj-chacha-2@2x.png" />
          <img className="ellipse-icon" alt="" src="/ellipse-2.svg" />
          <div className="homepage-child11" />
          <img className="rectangle-icon" alt="" src="/rectangle-46.svg" />
          <div className="homepage-child12" />
          <div className="homepage-child13" />
          <img className="homepage-child14" alt="" src="/rectangle-46.svg" />
          <img className="homepage-child15" alt="" src="/rectangle-46.svg" />
          <img className="highlight-06-icon" alt="" src="/highlight-06.svg" />
          <img className="homepage-child16" alt="" src="/rectangle-50.svg" />
          <CardContainer />
          <img className="homepage-child17" alt="" src="/rectangle-50.svg" />
          <div className="group-div">
            <div className="vector-parent">
              <img className="group-child1" alt="" src="/rectangle-52.svg" />
              <div className="explore-screen">
                <img className="share-08-icon" alt="" src="/rectangle-50.svg" />
                <b className="from-farm-to">FROM FARM TO FORK</b>
              </div>
            </div>
          </div>
          <DeliverySection />
          <b className="well-make-you">{`we’ll make you `}</b>
          <b className="spoilt-for-choices">spoilt for choices</b>
          <ExploreRicesContainer />
          <div className="let-it-be-rice-or-spice-we-ha-parent">
            <div className="let-it-be">
              Let it be Rice or Spice, we have a unique and a huge variety
            </div>
            <div className="for-you-to">for you to choose from.</div>
          </div>
          <img className="suraj-chacha-3" alt="" src="/suraj-chacha-3@2x.png" />
          <div className="homepage-child18" />
          <div className="homepage-child19" />
          <div className="homepage-child20" />
          <div className="rectangle-group">
            <div className="group-child2" />
            <div className="download-brochure">DOWNLOAD BROCHURE</div>
            <img className="download-01-icon" alt="" src="/download01.svg" />
          </div>
          <FormContainer />
          <UnlimitedMembersSection />
          <div className="why-trust-us-container">
            <span className="us">{`Why `}</span>
            <b>trust</b>
            <span className="us"> us ?</span>
          </div>
          <div className="some-more-text">
            Some more text as a meta description
          </div>
          <div className="most-frequently-asked-question-parent">
            <b className="most-frequently-asked-container">
              <p className="most-frequently-asked-question">
                <span className="most">{`most `}</span>
                <span className="frequently">frequently</span>
                <span>{` asked questions `}</span>
              </p>
            </b>
            <b className="to-bhuvan-ji-container">
              <p className="most-frequently-asked-question">to Bhuvan Ji</p>
            </b>
            <img
              className="suraj-chacha-31"
              alt=""
              src="/suraj-chacha-31@2x.png"
            />
          </div>
        </div>
      </div>
      <RiskFreeSection />
    </div>
  );
};

export default Website;
