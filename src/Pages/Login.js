import React from "react";
import "../Assets/css/Login.css";
import Logo from "../Assets/Images/logoeld.png";
import Logo2 from "../Assets/Images/logo2.png";
import { AppleFilled } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import googlePlayIcon from "@iconify-icons/logos/google-play-icon";

const Login = () => {
  return (
    <div className="loginBg">
      <div>
        <div style={{ textAlign: "center" }}>
          <img className="logos" src={Logo} alt="logo" />
          <br />
          <img className="logos2" src={Logo2} alt="eld" />
        </div>
      </div>
      <div className="loginContainers">
        <div className="loginBox">
          <h2 className="loginNames">
            <span className="loginName">Sign-up</span> by downloading via
          </h2>
          <div className="page-content page-container" id="page-content">
            <div className="padding">
              <div className="">
                <div className="template-demo mt-2 mr-4 bgcontainer">
                  {" "}
                  <button className="btn btn-icon-text appbtn">
                    {" "}
                    <AppleFilled className="btn-icon-prepend mdi-36px" />{" "}
                    <span className="d-inline-block text-left appsto">
                      {" "}
                      <small className="font-weight-light d-block appstore">
                        Download on the
                      </small>{" "}
                      App Store{" "}
                    </span>{" "}
                  </button>{" "}
                  <button className="btn btn-icon-text appbtn">
                    {" "}
                    <Icon
                      className="btn-icon-prepend mdi-36px"
                      icon={googlePlayIcon}
                    />{" "}
                    <span className="d-inline-block text-left appsto">
                      {" "}
                      <small className="font-weight-light d-block appstore">
                        GET IT ON
                      </small>{" "}
                      Google Play{" "}
                    </span>{" "}
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="email_para">
            <p>
              Share your stories, send us feedback or just say hello! by sending
              us an e-mail to:
            </p>
            <div>
              <a className="link" href="mailto:hello@eldapp.net">
                hello@eldapp.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
