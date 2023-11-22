import "./UnlimitedMembersSection.css";

const UnlimitedMembersSection = () => {
  return (
    <div className="rectangle-parent1">
      <div className="group-child10" />
      <div className="pricing-frame">
        <div className="frame-div">
          <div className="unlimited-members-parent">
            <div className="unlimited-members">Unlimited Members</div>
            <div className="ellipse-div" />
          </div>
          <div className="gb-storage-parent">
            <div className="unlimited-members">100 gb Storage</div>
            <div className="ellipse-div" />
          </div>
          <div className="free-hosting-parent">
            <div className="unlimited-members">Free hosting</div>
            <div className="ellipse-div" />
          </div>
        </div>
        <div className="frame-div">
          <div className="file-sharing-parent">
            <div className="unlimited-members">File Sharing</div>
            <div className="ellipse-div" />
          </div>
          <div className="technical-support-parent">
            <div className="unlimited-members">Technical Support</div>
            <div className="ellipse-div" />
          </div>
          <div className="daily-backup-parent">
            <div className="unlimited-members">Daily Backup</div>
            <div className="ellipse-div" />
          </div>
        </div>
        <img className="mask-group-icon" alt="" src="/mask-group.svg" />
        <div className="group-parent3">
          <div className="month-parent">
            <div className="month">/month</div>
            <div className="div">$19</div>
          </div>
          <div className="get-started-now-wrapper">
            <div className="get-started-now">Get Started Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedMembersSection;
