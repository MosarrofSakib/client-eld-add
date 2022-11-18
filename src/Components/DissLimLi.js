import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Logo from "../Assets/Images/logoeld.png";

const DissLimLi = () => {
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
          <h1 className="detail-h1">
            Disclaimers And Limitation Of Liability Statement
          </h1>
          <span className="detail-h1-border"></span>
          <div className="details-main">
            <p>Last Updated: Wednesday, August 17, 2022</p>
            <h5 className="details-h5">
              1<span className="head-tab"></span>INTRODUCTION
            </h5>
            <p>
              Thank you for choosing Eld (
              <span className="bold-p">“Eld” “we”, “us”, “our”</span>)! This
              Limitation of Liability Statement (
              <span className="bold-p">“Agreement”</span>) sets out the terms,
              threshold, and instances of our liabilities with respect to the
              services we provide you, the users (
              <span className="bold-p">“user”, “you”, “your”</span>) through the
              Eld mobile Application, website application (“hereinafter
              collectively referred to as the{" "}
              <span className="bold-p">“Platform”</span>). This Agreement is an
              integral part of our Terms.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-2">
                <span className="head-tab"></span>USING THE PLATFORM SERVICES
              </span>
            </h5>
            <p>
              This section covers the terms under which the Platform service is
              made available to you and the extent of our liability in their
              respect. You agree that:
            </p>
            <ul className="list-order-25">
              <li className="list-21">
                We are not obliged to ensure that the Platform is available to
                all users at all times. While we make all attempts to deny
                access only to those individuals who violate this Platform’s
                regulations, we are occasionally forced to use access denial
                methods that disrupt access for other users. We shall not be
                liable in this regard under any circumstances.
              </li>
              <li className="list-22">
                We are not responsible for a loss of access to this Platform’s
                services due to failure of networks connected to the Internet or
                any other temporary hardware or software failure.
              </li>
              <li className="list-23">
                We reserve the right at any time and from time to time to modify
                or discontinue, temporarily or permanently, any Platform service
                (or any part thereof) with or without notice.
              </li>
              <li className="list-24">
                There will always be a possibility that this Platform could
                include inaccuracies or errors. Additionally, a possibility
                exists that unauthorised additions, deletions and alterations
                could be made by third parties to the Platform. Although we
                attempt to ensure this Platform’s integrity and accuracy, we
                make no guarantees whatsoever regarding its correctness or
                accuracy. In the event that such an inaccuracy arises, please
                inform us by emailing us at{" "}
                <span>
                  <a href="mailto: support@eldapp.net">support@eldapp.net</a>
                </span>{" "}
                so that it can be corrected.
              </li>
              <li className="list-25">
                This Platform may contain links to other websites operated by
                third parties (“Linked Sites”). You acknowledge that when you
                click on a link to visit a linked site, a frame may appear that
                contains this Platform’s logo, advertisements and/or other
                content selected by this Platform. The Platform may also direct
                you to other websites, such as interactive maps from our partner
                service provider. You acknowledge that this Platform and its
                sponsors neither endorse nor are affiliated with the linked
                sites and are not responsible for any content that appears on
                the linked sites. This Platform has neither reviewed nor
                approved these sites and is not responsible for the contents or
                omissions of any linked site or any links contained in the
                linked sites.
              </li>
              <li className="list-26">
                We have not reviewed, and cannot review, all of the materials
                posted to the platform and cannot be responsible for that
                material and content, use or effects. By operating this
                Platform, we do not represent or imply that we endorse the
                posted material or that we believe such material to be accurate,
                useful, or non-harmful. You are responsible for taking
                precautions as necessary to protect yourself and your computer
                systems from viruses, worms, Trojan horses, and other harmful or
                destructive Content.
              </li>
              <li className="list-27">
                This Platform may contain content that is offensive, indecent,
                or otherwise objectionable, as well as content containing
                technical inaccuracies, typographical mistakes, and other
                errors. This Platform may also contain material that violates
                the privacy or publicity rights or infringes the intellectual
                property and other proprietary rights of third parties, or the
                downloading, copying or use of which is subject to additional
                terms and conditions, stated or unstated.
              </li>
            </ul>
            <p>
              We disclaim any responsibility for any harm resulting from the use
              by visitors of this Platform or any downloading by those visitors
              of content posted. Suppose you believe that material located on or
              linked to this Platform is offensive, indecent, violates your
              copyright or otherwise objectionable. In that case, you are
              encouraged to notify our team by emailing support@eldapp.net. This
              Platform will respond to all such notices, including as required
              or appropriate, by removing the offensive /
              objectionable/infringing material or disabling all links to the
              infringing material on the Platform. Please read our{" "}
              <span>
                <Link to="/legal/Terms Of Service">Terms and Conditions</Link>
              </span>{" "}
              to know more about our copyright policy.
            </p>
            <p>
              In the event a visitor may infringe or repeatedly infringe the
              copyrights or other intellectual property rights of Eld or others,
              we may, at our discretion, terminate or deny access to and use of
              the Platform.
            </p>
            <h5 className="details-h5">
              3<span className="head-tab"></span>ACKNOWLEDGEMENTS
            </h5>
            <p>You hereby acknowledge and agree that:</p>
            <ul className="list-order-2">
              <li className="list-3-1">
                The users registered on the Platform are completely responsible
                for any commitments and contracts made with each other. We are
                not responsible for any non-performance or breach of any
                contract entered into between the users.
              </li>
              <li className="list-3-2">
                The Platform is solely a place which connects the users. We are
                not liable in any regard with respect to any agreement or
                transaction which subsequently takes place between the users.
                All agreements and transactions between the users (the mentioned
                agreements and transactions are collectively referred to as
                “Relevant Contract”) are personal to them. We are not a party to
                such Relevant Contracts under any circumstance, and thus we
                disclaim any liability in this regard.
              </li>
              <li className="list-3-3">
                Users hereby agree that we shall not be required to mediate or
                resolve any dispute or disagreement arising between the parties
                out of the Relevant Contract(s).
              </li>
              <li className="list-3-4">
                Users are responsible for researching and complying with
                applicable laws, regulations or restrictions on items, services,
                or manner of sale or exchange that may pertain to the Relevant
                Contract(s) in which they participate.
              </li>
              <li className="list-3-5">
                Users are responsible for all applicable taxes and for all costs
                incurred by participating in the Relevant Contract. We shall in
                no event be liable in this regard.
              </li>
              <li className="list-3-6">
                We will not be liable for damages of any kind incurred to any
                parties as a result of the information contained on this
                Platform. You shall not use or manipulate the Platform for any
                fraudulent activity or purpose. Items or services offered for
                sale by any user must comply with applicable laws. We disclaim
                any and/or all responsibility and/or liability for any harm
                resulting from your use of third-party services. You hereby
                irrevocably waive any claim against us concerning the content
                available on the Platform or operation of any third-party
                services provided by any user.
              </li>
            </ul>
            <h5 className="details-h5 head-space">
              <span className="head-4">
                <span className="head-tab"></span>YOUR REPRESENTATIONS AND
                WARRANTIES
              </span>
            </h5>
            <p>You hereby represent and warrant that you will not:</p>
            <ul className="list-order-2">
              <li className="list-41">
                violate any law, contract, intellectual property, or other
                third-party right or commit a tort, and that you are solely
                responsible for your conduct while accessing or using the
                Platform.
              </li>
              <li className="list-42">
                provide false or misleading information to us or our affiliates.
              </li>
              <li className="list-43">
                use the Platform in a manner which may disrupt or inhibit others
                from accessing or enjoying the Platform fully or partially.
              </li>
              <li className="list-44">
                develop, utilise, or disseminate any software in any manner that
                could damage, harm, or impair the Platform.
              </li>
              <li className="list-45">
                access or attempt to access any feature or area of the Platform
                that you are not authorised to access.
              </li>
              <li className="list-46">
                use any robot, spider, crawler, scraper, script, browser
                extension, offline reader or other automated means or interface
                not authorised by us to access the Platform, extract data, or
                otherwise interfere with or modify the rendering Platform pages
                or functionality.
              </li>
              <li className="list-47">
                use data collected from our Platform for any direct marketing
                activity (including, without limitation, email marketing, SMS
                marketing, telemarketing, and direct marketing).
              </li>
              <li className="list-48">
                use the Platform for any illegal or unauthorised purpose, or
                engage in, encourage, or promote any activity that violates this
                Agreement, our{" "}
                <span>
                  <Link to="/legal/Terms Of Service">Terms and Conditions</Link>
                </span>
                ,{" "}
                <span>
                  <Link to="/legal/Privacy Policy">Privacy Policy</Link>
                </span>
                ,{" "}
                <span>
                  <Link to="/legal/Data Processing Agreement">
                    Data Processing Agreement
                  </Link>
                </span>
                ,{" "}
                <span>
                  <Link to="/legal/Code of Conduct">Code of Conduct</Link>
                </span>
                ,{" "}
                <span>
                  <Link to="/legal/Acceptable Use">Acceptable Use Policy</Link>
                </span>
                , and other documents we make available through the Platform.
              </li>
              <li className="list-49">
                use the Platform or its network to carry out any illegal
                activities or deliberately engage in activities designed to
                adversely affect the performance of the Platform or its network.
              </li>
            </ul>
            <h5 className="details-h5">
              5<span className="head-tab"></span>WARRANTY DISCLAIMER.
            </h5>
            <p>
              THE PLATFORM IS PROVIDED “AS IS”, “AS AVAILABLE” BASIS. THE USE OF
              THE PLATFORM IS AT THE USER’S SOLE RISK. THE PLATFORM IS PROVIDED
              WITHOUT WARRANTY, REPRESENTATION, OR GUARANTEE OF ANY KIND
              WHATSOEVER, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED
              TO, ANY WARRANTIES OF TITLE OR ACCURACY AND ANY IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT AND ANY WARRANTIES IMPLIED BY ANY COURSE OF
              PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY
              DISCLAIMED, WITH THE SOLE EXCEPTION OF WARRANTIES (IF ANY) WHICH
              CAN NOT BE EXPRESSLY EXCLUDED UNDER APPLICABLE LAW. ELD, OUR
              DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, PARTNERS, AND CONTENT
              PROVIDERS DO NOT WARRANT THAT: (I) THE PLATFORM IS OR WILL BE
              SECURE OR AVAILABLE AT ANY PARTICULAR TIME, INSTANCE OR LOCATION;
              (II) ANY DEFECTS MATERIAL OR NOT, OR ERRORS WILL BE CORRECTED;
              (III) ANY/ALL CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE
              PLATFORM IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; (IV)
              ANY/ALL INFORMATION IS COMPLETE, ACCURATE, UP-TO-DATE, OR
              RELIABLE; (V) ANY PARTICULAR SERVICE, CONTENT, OR PRODUCT REFERRED
              TO IN THE PLATFORM IS SAFE, APPROPRIATE, OR EFFECTIVE FOR YOUR
              AND/OR YOUR EMPLOYEES; (VI) THAT RESULTS OF USING THE SERVICES
              PROVIDED BY US WILL MEET YOUR REQUIREMENTS(VII) THE USE OF THE
              PLATFORM PROVIDED BY US SHALL COMPLY WITH ANY LAWS, RULES,
              REGULATIONS, REQUIREMENTS, POLICIES, QUALIFICATIONS, OR BEST
              PRACTICES, INCLUDING BUT NOT LIMITED TO PRIVACY LAWS, PROFESSIONAL
              LICENSURE, OR REIMBURSEMENT; (VIII) THE USE OF THE PLATFORM SHALL
              NOT RESULT IN LEGAL DUTIES OR LIABILITY. WE DO NOT GUARANTEE IN
              ANY INSTANCE THAT ANY PARTICULAR CONTENT OR MATERIAL SHALL BE MADE
              AVAILABLE THROUGH THE PLATFORM.
            </p>
            <h5 className="details-h5">
              6<span className="head-tab"></span>LIMITATION OF LIABILITY.
            </h5>
            <p>
              THE USE OF THE PLATFORM IS ENTIRELY AT YOUR OWN RISK. IN NO CASE
              SHALL WE, NOR OUR OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS,
              AGENTS, PARTNERS, SUPPLIERS, CONTENT PROVIDERS, OR ANY USERS BE
              LIABLE TO YOU UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE,
              OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH REGARDS TO THE
              PLATFORM FOR: (I) ANY LOST PROFITS, LOSS IN REVENUE, LOSS OF
              GOODWILL, ANY DATA LOSS, LOSS OF USE, COST OF PROCURING SUBSTITUTE
              GOODS OR SERVICES, OTHER INTANGIBLE LOSSES, OR INDIRECT,
              INCIDENTAL, SPECIAL, PUNITIVE, COMPENSATORY, EXEMPLARY, RELIANCE,
              PUNITIVE, LIQUIDATED, OR ANY SIMILAR CONSEQUENTIAL DAMAGES OF ANY
              TYPE WHATSOEVER (HOWEVER ARISING), (II) ANY, VIRUSES, BUGS, TROJAN
              HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGIN), (III)
              ANY PERSONAL INJURY OR HARM, INCLUDING DEATH, WHICH IS CAUSED BY
              YOUR USE OR MISUSE OF THE PLATFORM, (IV) ANY CLAIMS, DEMANDS, OR
              DAMAGES ARISING OUT OF OR RELATING TO ANY DISPUTE BETWEEN YOU AND
              ANY OTHER USER OF THE PLATFORM, OR (V) ANY DIRECT DAMAGES IN
              EXCESS OF (IN THE AGGREGATE) OF OR GREATER THAN ANY FEES PAID BY
              YOU FOR USING OF PARTICULAR SERVICES DURING THE IMMEDIATELY
              PREVIOUS THREE (3) MONTH PERIOD. REMEDIES, IF ANY, UNDER THE{" "}
              <span>
                <Link to="/legal/Terms Of Service">TERMS AND CONDITIONS</Link>
              </span>{" "}
              ARE EXCLUSIVE AND ARE LIMITED TO THOSE EXPRESSLY PROVIDED FOR IN
              THE TERMS AND CONDITIONS. NOTHING IN THE TERMS AND CONDITIONS
              SHALL BE DEEMED TO EXCLUDE OR LIMIT YOUR LIABILITY IN RESPECT OF
              ANY INDEMNITY GIVEN BY YOU UNDER THE TERMS AND CONDITIONS.
            </p>
            <h5 className="details-h5">
              7<span className="head-tab"></span>CONTACT
            </h5>
            <p>
              You may contact us through our Platform, or the address as given
              below:<br></br>
              <span>
                Eld: <br></br>
                <a href="mailto: hello@eldapp.net">hello@eldapp.net</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DissLimLi;
