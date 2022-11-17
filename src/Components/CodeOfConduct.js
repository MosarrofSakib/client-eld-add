import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Logo from "../Assets/Images/logoeld.png";

const CodeOfConduct = () => {
  return (
    <div>
      <div className="header">
        <div className="img-div">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <Link className="icon-header" to="/legal">
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
        </Link>
      </div>
      <div className="main-b">
        <div className="container-b">
          <h1 className="detail-h1">Code Of Conduct</h1>
          <span className="detail-h1-border"></span>
          <div className="details-main">
            <p>Last Updated: Wednesday, August 17, 2022</p>
            <p style={{ marginTop: "2.5rem" }}>
              Thank you for choosing Eld (
              <span className="bold-p">“we”, “us”, “our”</span>). Being a part
              of the Eld community means behaving with honesty, respect,
              kindness to fellow users.
            </p>
            <p>
              All users (<span className="bold-p">“user”, “you”, “your”</span>)
              are required to follow the terms of this Code of Conduct (
              <span className="bold-p">“Agreement”</span>). This Agreement is
              hereby through this reference, construed as a part of our Terms.
            </p>
            <p>You hereby agree to the following terms as follows:</p>
            <h5 className="details-h5">
              1<span className="head-tab"></span>BE COURTEOUS; PRUDENCE
            </h5>
            <p>
              You agree to be courteous and respectful of others. You shall not
              use words or share content which may be inflammatory or offensive.
            </p>
            <p>
              We strictly prohibit unlawful discrimination or harassment on the
              basis of race, color, religion, veteran status, national origin,
              ancestry, pregnancy status, sex, gender identity or expression,
              age, marital status, mental or physical disability, medical
              condition, sexual orientation, or any other characteristics
              protected by law.
            </p>
            <p>
              Communicating online through text can lead to misunderstandings,
              so it is important to give other people the benefit of the doubt
              and be kind in your interactions: sometimes it is difficult to
              know or fully appreciate the situation of the person you are
              communicating with.
            </p>
            <p>
              We encourage our users to take prudent decisions when you use our
              Platform. If you feel that anything listed on the Platform may be
              fraudulent or dangerous, please do not access such listed events
              or activities.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-2">
                <span className="head-tab"></span>HARASSMENT, DISCRIMINATION,
                AND BULLYING
              </span>
            </h5>
            <p>
              We strictly prohibit discrimination, harassment and other forms of
              bullying including without limits verbal, physical, or visual. If
              you believe that you are being bullied by anyone, whether by other
              users or by Eld personnel, we recommend you to immediately report
              the incident to us using the contact information given below or
              contact the appropriate authorities. We will take action against
              such persons at our sole discretion.
            </p>
            <h5 className="details-h5">
              3<span className="head-tab"></span>DRUGS AND ALCOHOL
            </h5>
            <p>
              We do not endorse consumption of any kinds of drugs, alcohol, or
              other psychotropic substances whether prohibited or regulated. We
              discourage users from interacting, meeting while under the
              influence of any substances including prohibited or regulated
              substances and alcohol. Also, we dissuade users from meeting for
              the purpose of consuming alcohol and other illegal or controlled
              substances.
            </p>
            <p>
              If a user suspects that a co-user of the Eld Platform is under
              influence of any substance or alcohol, we recommend you do not
              interact or meet with such user(s) and report such users to us
              using the contact information provided below. Should you choose to
              interact with such users you indemnify Eld from any and all
              disputes that arise from such interactions.
            </p>
            <p>
              DISCLAIMER: USE OF DRUGS AND ALCOHOL RESULTS IN IMPAIRED JUDGEMENT
              AND PERFORMANCE. THE FINAL DECISION IS OF THE USER, THEREFORE ELD
              WILL NOT BE HELD RESPONSIBLE FOR ANY ACTIVITY OF A USER SHOULD
              THEY CONSENSUALLY MEET WHEN UNDER THE INFLUENCE OR MEET FOR
              CONSUMPTION OF PROHIBITED OR REGULATED SUBSTANCES.
            </p>
            <h5 className="details-h5">
              4<span className="head-tab"></span>THREAT OF BODILY HARM
            </h5>
            <p>
              We strongly stand against users who send threats of bodily harm,
              whether through the Platform (if applicable) or otherwise via any
              method including, phone, email etc. Upon our discovery of such an
              event, we may terminate and permanently ban the user Accounts of
              such users.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-5">
                <span className="head-tab"></span>USE OF ANY PHYSICAL FORCE
                AGAINST ELD PERSONNEL AND OTHER USERS
              </span>
            </h5>
            <p>
              No person shall subject the directors, employees, affiliates,
              agents, representatives, or subcontractors of Eld and other users
              of the Eld Platform to any physical harassment, intimidation,
              threats, coercion, confinement or use of criminal force, during
              the course of their business or in connection with the business.
              Any such act would lead to the consequences mentioned in Section 8
              of this Agreement. This shall be in addition to and without
              prejudice to all our additional legal remedies.
            </p>
            <h5 className="details-h5">
              6<span className="head-tab"></span>COMPLIANCE WITH THE LAW
            </h5>
            <p>
              You are law-abiding and do not participate in, condone, or
              encourage unlawful or potentially harmful activity.
            </p>
            <p>
              This includes threatening or encouraging suicide or self-harm, as
              well as breach of copyright, defamation, or contempt of court.
            </p>
            <h5 className="details-h5">
              7<span className="head-tab"></span>MISUSE OF THE PLATFORM
            </h5>
            <p>
              You shall not use the Platform in a way which may be considered a
              misuse of the services provided by us through the Platform. Please
              contact us using the information given below if you discover any
              user misusing the Platform. In such event, we will investigate
              your report and take appropriate action in our sole discretion in
              accordance with Section 8 of this Agreement.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-8">
                <span className="head-tab"></span>EFFECTS OF VIOLATION OF THIS
                AGREEMENT
              </span>
            </h5>
            <p>
              Violations of this Agreement may result in a range of actions,
              including:
            </p>
            <ul className="list-order-2">
              <li className="list-81">Limits on account privileges</li>
              <li className="list-82">Account suspension</li>
              <li className="list-83">Account Cancellation</li>
              <li className="list-84">
                Permanent ban on the access and use of the Platform.
              </li>
            </ul>
            <p>
              The actions in this Section shall be in addition to and without
              prejudice to all our additional legal remedies.
            </p>
            <h5 className="details-h5">
              9<span className="head-tab"></span>NON-DISPARAGEMENT
            </h5>
            <p>
              The users shall not make any false, negative, critical, or
              disparaging statements, implied or expressed about Eld, including,
              but not limited to, management style, methods of doing business,
              the quality of services, role in the community, or treatment of
              employees. The users further agree to do nothing that would damage
              our reputation or good will;
            </p>
            <h5 className="details-h5">
              10<span className="head-tab"></span>NO SPAMMING
            </h5>
            <p>
              This Platform’s spam policy applies only to unsolicited commercial
              messages sent to you. You are not allowed to send spam messages
              such as pings etc. to other users. Users have the ability to mute
              messages from a specific user if receiving spam messages. You can
              report such spam messages by contacting us at the email address
              provided below in “Reporting Spam” Section 11.
            </p>
            <h5 className="details-h5">
              11<span className="head-tab"></span>REPORTING SPAM
            </h5>
            <p>
              You will help us by reporting comments that you believe have
              violated this Agreement. You can also report spam by sending us an
              email at:{" "}
              <span>
                <a href="mailto: support@eldapp.net">support@eldapp.net</a>
              </span>
              .
            </p>
            <h5 className="details-h5">
              12<span className="head-tab"></span>MINORS
            </h5>
            <p>
              You must be at least of the age of majority as applicable in your
              country or jurisdiction by law. We do not allow images of
              unaccompanied minors. If you want to post photos of your children,
              please make sure that you are in the photo as well. If you see a
              profile that includes an unaccompanied minor, encourages harm to a
              minor, or depicts a minor in a sexual or suggestive way, please
              report it immediately by sending us an email at{" "}
              <span>
                <a href="mailto: support@eldapp.net">support@eldapp.net</a>
              </span>
              .
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-13">
                <span className="head-tab"></span>CLAIMS OF COPYRIGHT
                INFRINGEMENT
              </span>
            </h5>
            <p>
              Claims of copyright infringements can be sent to
              support@eldapp.net. Please read our copyright policy for more
              details in our{" "}
              <span>
                <Link to="/legal/Terms Of Service">Terms and Conditions</Link>
              </span>
              .
            </p>
            <h5 className="details-h5">
              14<span className="head-tab"></span>SEVERABILITY
            </h5>
            <p>
              If one or more provisions of this Agreement is found to be
              unlawful, void, or unenforceable, such provision(s) shall be
              deemed severable and will not affect the validity and/or
              enforceability of the remaining provisions of the Agreement, which
              will remain in full force and effect.
            </p>
            <h5 className="details-h5">
              15<span className="head-tab"></span>CONTACT
            </h5>
            <p>
              Please reach out to us at:<br></br>
              <span>
                <a href="mailto: hello@eldapp.net">hello@eldapp.net</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
