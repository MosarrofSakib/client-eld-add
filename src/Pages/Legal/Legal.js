import React from "react";
import "./Legal.css";
import LegalItem from "../../Components/LegalItem";
import Logo from "../../Assets/Images/logoeld.png";

const Legal = () => {
  return (
    <div>
      <div className="header">
        <div className="img-div">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        {/* <Link className="icon-header" to="/legal">
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.60938 20.3906C9.86719 20.6484 10.1953 20.7891 10.582 20.7891C11.3555 20.7891 11.9766 20.1797 11.9766 19.4062C11.9766 19.0195 11.8125 18.668 11.543 18.3984L3.33984 10.3828L11.543 2.39062C11.8125 2.12109 11.9766 1.75781 11.9766 1.38281C11.9766 0.609375 11.3555 0 10.582 0C10.1953 0 9.86719 0.140625 9.60938 0.398438L0.492188 9.30469C0.164062 9.60938 0.0117188 9.98438 0 10.3945C0 10.8047 0.164062 11.1562 0.492188 11.4727L9.60938 20.3906Z"
              fill="#333333"
            />
          </svg>
        </Link> */}
      </div>
      <div className="main">
        <div className="container-main">
          <h1 className="legal-h1">Legal</h1>
          <span className="legal-h1-border"></span>
          <div className="legal-items">
            <LegalItem
              title="Terms of Service"
              to={`/legal/Terms Of Service`}
            />
            <LegalItem title="Privacy Policy" to={`/legal/Privacy Policy`} />
            <LegalItem
              title="Data Processing Agreement"
              to={`/legal/Data Processing Agreement`}
            />
            <LegalItem title="Code of Conduct" to={`/legal/Code of Conduct`} />
            <LegalItem
              title="Disclaimers and Limitation of Liability"
              to={`/legal/Disclaimers and Limitation of Liability`}
            />
            <LegalItem title="Acceptable use" to={`/legal/Acceptable Use`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
