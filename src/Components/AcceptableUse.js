import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Logo from "../Assets/Images/logoeld.png";

const AcceptableUse = () => {
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
          <h1 className="detail-h1">Acceptable Use Policy</h1>
          <span className="detail-h1-border"></span>
          <div className="details-main">
            <p>Last Updated: Wednesday, August 17, 2022</p>
            <h5 className="details-h5">
              1<span className="head-tab"></span>INTRODUCTION
            </h5>
            <p>
              Thank you for choosing Eld (
              <span className="bold-p">“Eld” “we”, “us”, “our”</span>)! This
              Acceptable Use Policy (<span className="bold-p">“Agreement”</span>
              ) is an integral part of the Terms. This Agreement is between us
              and you the users (
              <span className="bold-p">“user” “you” “your”</span>) who avail our
              services through the Eld mobile Application and website
              application (“hereinafter collectively referred to as the{" "}
              <span className="bold-p">“Platform”</span>).
            </p>
            <h5 className="details-h5">
              2<span className="head-tab"></span>INTERACTIVE SERVICES
            </h5>
            <ul className="list-order-2">
              <li className="list-21">
                The Platform may contain message boards, chat rooms, personal
                web pages or profiles, forums, bulletin boards, and other
                interactive features (collectively,{" "}
                <span className="bold-p">“Interactive Services”</span>) that
                allow users to post, submit, publish, display, or transmit and
                talk to other users or other persons (hereinafter,{" "}
                <span className="bold-p">“post”</span>) content or materials
                (collectively,{" "}
                <span className="bold-p">“User Contributions”</span>) on or
                through the Platform. All User Contributions must comply with
                the User Contribution Standards set out below in Section 3.
              </li>
              <li className="list-22">
                Any User Contribution you post on the Platform will be
                considered non-confidential and non-proprietary. By providing
                any User Contribution on the Platform, you grant us and our
                affiliates and service providers, and each of their and our
                respective licensees, successors, and assigns the right to use,
                reproduce, modify, perform, display, distribute, and otherwise
                disclose to third parties any such material for any
                purpose/according to your account settings.
              </li>
              <li className="list-23">
                You represent and warrant that:
                <ul className="list-order-5">
                  <li className="list-a">
                    You own or control all rights in and to the User
                    Contributions and have the right to grant the license
                    granted above to us and our affiliates and service
                    providers, and each of their and our respective licensees,
                    successors, and assigns;
                  </li>
                  <li className="list-b">
                    All of your User Contributions do and will comply with this
                    Agreement; and
                  </li>
                  <li className="list-c">
                    You understand and acknowledge that you are responsible for
                    any User Contributions you submit or contribute, and you,
                    not us, have full responsibility for such content, including
                    its legality, reliability, accuracy, and appropriateness.
                  </li>
                </ul>
              </li>
              <li className="list-24">
                We are not responsible or liable to any third party for the
                content or accuracy of any User Contributions posted by you or
                any other user of the Platform.
              </li>
              <li className="list-25">
                To the maximum possible extent, you hereby grant to us a fully
                paid, royalty-free, perpetual, irrevocable, worldwide,
                non-exclusive, and fully transferable and sublicensable right
                (through multiple tiers) and license to use, reproduce, perform,
                display, distribute, adapt, modify, re-format, create derivative
                works of, and otherwise commercially or non-commercially exploit
                in any manner, any and all User Contributions, and to sublicense
                the foregoing rights; and you irrevocably waive, and cause to be
                waived, against us and its users any claims and assertions of
                any moral rights contained in such User Contributions. This
                section shall survive any termination of your Account or the
                Agreement.
              </li>
            </ul>
            <h5 className="details-h5 head-space">
              <span className="head-3">
                <span className="head-tab"></span>USER CONTRIBUTION STANDARDS
              </span>
            </h5>
            <p className="list-3-1" style={{ marginLeft: "1.8rem" }}>
              These User Contribution Standards apply to any and all User
              Contributions and use of Interactive Services. User Contributions
              must in their entirety comply with all applicable central,
              federal, state, local, and international laws, and regulations.
              Without limiting the foregoing, User Contributions must not:
            </p>
            <ul className="list-order-2" style={{ marginLeft: "3.5rem" }}>
              <li className="list-a">
                contain any material that is defamatory, obscene, indecent,
                abusive, offensive, harassing, violent, hateful, hurtful,
                inflammatory, or otherwise objectionable;
              </li>
              <li className="list-b">
                promote sexually explicit or pornographic material, violence, or
                discrimination based on race, sex, religion, nationality,
                disability, sexual orientation, or age;
              </li>
              <li className="list-c">
                infringe any patent, trademark, trade secret, copyright, or
                other intellectual property or other rights of any other person;
              </li>
              <li className="list-d">
                violate the legal rights (including the rights of publicity and
                privacy) of others or contain any material that could give rise
                to any civil or criminal liability under applicable laws or
                regulations or that otherwise may be in conflict with these
                Terms.
              </li>
              <li className="list-e">
                contain images or videos of persons without such person’s
                consent;
              </li>
              <li className="list-f">be likely to deceive any person;</li>
              <li className="list-g">
                involve drugs, narcotics, steroids, controlled substances,
                pharmaceuticals or similar products or therapies that are either
                illegal, prohibited, or enjoined by an applicable regulatory
                body; legal substances that provide the same effect as an
                illegal drug; or other products, medical practices, or any
                related equipment or paraphernalia that have been found by an
                applicable regulatory body to cause consumer harm;
              </li>
              <li className="list-h">
                promote any illegal activity, or advocate, promote, or assist
                any unlawful act;
              </li>
              <li className="list-i">
                cause annoyance, inconvenience, or needless anxiety or be likely
                to upset, embarrass, alarm, or annoy any other person;
              </li>
              <li className="list-j">
                funding a ransom, human trafficking or exploitation,
                vigilantism, bribes, or bounty;
              </li>
              <li className="list-k">
                impersonate any person or misrepresent your identity or
                affiliation with any person or organization;
              </li>
              <li className="list-l">
                involve or promote terrorism or, any activity that promote war,
                genocide, knives, explosives, ammunition, firearms, or other
                weaponry or accessories;
              </li>
              <li className="list-m">
                involve annuities, investments, loans, equity or lottery
                contracts, lay-away systems, off-shore banking or similar
                transactions, money service businesses (including currency
                exchanges, check cashing or the like), pyramid schemes, “get
                rich quick schemes” (i.e., Investment opportunities or other
                services that promise high rewards), network marketing and
                referral marketing programs, debt collection or
                crypto-currencies;
              </li>
              <li className="list-n">
                involve circumventing the designated method of payment as
                provided by us;
              </li>
              <li className="list-o">
                involve credit repair or debt settlement services
              </li>
              <li className="list-p">
                involve products or services that directly infringe or
                facilitate infringement upon the trademark, patent, copyright,
                trade secrets, or proprietary or privacy rights of any third
                party
              </li>
              <li className="list-q">
                involve illegal sale or resale of brand name or designer
                products or services;
              </li>
              <li className="list-r">
                any other activity that we may deem in our sole discretion to be
                in support of individuals and/or entities associated with
                alleged financial crimes including but not limited to
                corruption, bribery, tax evasion, fraud, and activities of a
                similar nature; or
              </li>
              <li className="list-s">
                involve any election campaigns that are not run by a registered
                organization within the supported country;
              </li>
              <li className="list-t">
                give the impression that they emanate from or are endorsed by us
                or any other person or entity if this is not the case;
              </li>
              <li className="list-u">
                involve any other activity that we may deem in our sole
                discretion to be unacceptable
              </li>
            </ul>
            <h5 className="details-h5 head-space">
              <span className="head-4">
                <span className="head-tab"></span>MONITORING AND ENFORCEMENT
              </span>
            </h5>
            <ul className="list-order-27">
              <li className="list-41">
                We have the right to:
                <ul className="list-order-2">
                  <li className="list-a">
                    remove or refuse to post any User Contributions for any or
                    no reason in our sole discretion;
                  </li>
                  <li className="list-b">
                    take any action with respect to any User Contribution that
                    we deem necessary or appropriate in our sole discretion,
                    including if we believe that such User Contribution violates
                    the Terms, including the User Contribution Standards,
                    infringes any intellectual property right or other rights of
                    any person or entity, threatens the personal safety of users
                    of the Platform or the public, or could create liability for
                    us;
                  </li>
                  <li className="list-c">
                    disclose your identity or other information about you to any
                    third party who claims that material posted by you violates
                    their rights, including their intellectual property rights
                    or their right to privacy;
                  </li>
                  <li className="list-d">
                    take appropriate legal action, including without limitation,
                    referral to law enforcement, for any illegal or unauthorized
                    use of the Platform; or
                  </li>
                  <li className="list-e">
                    terminate or suspend your access to all or part of the
                    Platform for any or no reason, including without limitation,
                    any violation of this Agreement.
                  </li>
                </ul>
              </li>
              <li className="list-42">
                Without limiting the foregoing, we have the right to cooperate
                fully with any law enforcement authorities or court order
                requesting or directing us to disclose the identity or other
                information of anyone posting any materials on or through the
                Platform or otherwise accessing or using our Platform.
              </li>
              <li className="list-43">
                YOU HEREBY IRREVOCABLY AND UNCONDITIONALLY WAIVE AND HOLD US AND
                OUR AFFILIATES, LICENSEES, AND SERVICE PROVIDERS HARMLESS FROM
                ANY AND ALL CLAIMS, DAMAGES, LIABILITIES AND COSTS RESULTING
                FROM ANY ACTION TAKEN BY US/ANY OF THE FOREGOING PARTIES DURING,
                OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER US/SUCH
                PARTIES OR LAW ENFORCEMENT AUTHORITIES.
              </li>
              <li className="list-44">
                We do not undertake to review any material before it is posted
                on the Platform and cannot ensure prompt removal of
                objectionable material after it has been posted. Accordingly, we
                assume no liability for any action or inaction regarding
                transmissions, communications, or content provided by any user
                or third party. We have no liability or responsibility to anyone
                for performance or non-performance of the activities described
                in this section.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptableUse;
