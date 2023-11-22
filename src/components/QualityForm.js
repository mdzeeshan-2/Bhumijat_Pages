import "./QualityForm.css";

const QualityForm = () => {
  return (
    <div className="section-one">
      <img className="section-one-child" alt="" src="/rectangle-26.svg" />
      <img className="section-one-item" alt="" src="/rectangle-50.svg" />
      <div className="quality">
        <span>{` `}</span>
        <b className="quality1">Quality</b>
      </div>
      <div className="delivering">Delivering</div>
      <div className="from-farm-to1">from farm to forks</div>
      <div className="section-one-inner">
        <div className="checkmark-circle-04-parent">
          <img
            className="checkmark-circle-04-icon1"
            alt=""
            src="/checkmarkcircle04.svg"
          />
          <b className="keypoint-001">KeyPoint 001</b>
          <img
            className="checkmark-circle-04-icon2"
            alt=""
            src="/checkmarkcircle04.svg"
          />
          <b className="keypoint-002">KeyPoint 002</b>
          <img
            className="checkmark-circle-04-icon3"
            alt=""
            src="/checkmarkcircle04.svg"
          />
          <b className="keypoint-003">KeyPoint 003</b>
        </div>
      </div>
      <div className="explore-screen1">
        <img className="share-08-icon2" alt="" src="/rectangle-50.svg" />
        <b className="take-a-tour">TAKE A TOUR</b>
      </div>
      <b className="some-text-goes">Some text goes here</b>
      <img className="group-icon1" alt="" src="/group.svg" />
      <div className="section-one-child1" />
    </div>
  );
};

export default QualityForm;
