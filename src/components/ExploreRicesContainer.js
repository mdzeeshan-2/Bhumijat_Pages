import { useCallback } from "react";
import "./ExploreRicesContainer.css";

const ExploreRicesContainer = () => {
  const onGroupContainer16Click = useCallback(() => {
    // Please sync "Spice" to the project
  }, []);

  return (
    <div className="group-parent1">
      <div className="group-frame">
        <div className="group-frame">
          <div className="group-child7" />
        </div>
      </div>
      <div className="group-wrapper1" onClick={onGroupContainer16Click}>
        <div className="group-frame">
          <div className="group-child7" />
        </div>
      </div>
      <a className="explore-rices">Explore Rices</a>
      <a href="https://spices-landing-page.vercel.app/" target="_blank" className="explore-spices">Explore Spices</a>
    </div>
  );
};

export default ExploreRicesContainer;
