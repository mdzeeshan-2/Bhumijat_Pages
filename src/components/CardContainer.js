import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="nav-menu">
      <div className="bmjt-logo-black-1-png-1-parent">
        <img
          className="bmjt-logo-black-1-png-1"
          alt=""
          src="/bmjt-logo-black-1-png-1@2x.png"
        />
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <div className="hovered">
          <div className="home">Home</div>
          <img className="hovered-child" alt="" src="/vector-2.svg" />
        </div>
        <div className="about">About</div>
        <div className="rice">Rice</div>
        <div className="spices">Spices</div>
        <div className="blogs">Blogs</div>
      </div>
    </div>
  );
};

export default CardContainer;
