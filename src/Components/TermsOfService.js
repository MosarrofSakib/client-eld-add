import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Logo from "../Assets/Images/logoeld.png";

const TermsOfService = () => {
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
          <h1 className="detail-h1">Terms Of Service</h1>
          <span className="detail-h1-border"></span>
          <div className="details-main">
            <p>Last Updated: Wednesday, August 17, 2022</p>
            <h5 className="details-h5">
              1<span className="head-tab">INTRODUCTION</span>
            </h5>
            <p>
              Welcome to our mobile application and our interconnected website
              <span> </span>
              <Link className="detail-link" to="/">
                www.eldapp.net
              </Link>
              , which is run and managed by{" "}
              <span className="bold-p">Adam Abraha</span>. These Terms of
              Service regulate the use and access of the mobile application,
              mobile website linked, or otherwise connected thereto
              (collectively the <span className="bold-p">"Platform"</span>). For
              the sake of convenience, the term "Services" shall be included in
              the term "Platform" wherever used throughout this document unless
              specified otherwise.
            </p>
            <p>
              These Terms of Service, our<span> </span>
              <Link to="/legal/Privacy Policy">Privacy Policy</Link>,
              <span> </span>
              <Link
                to="/legal/Data
              Processing Agreement"
              >
                Data Processing Agreement
              </Link>
              ,<span> </span>
              <Link to="/legal/Code of Conduct">Code of Conduct</Link>,
              <span> </span>
              <Link to="/legal/Acceptable Use">Acceptable Use Policy</Link>,
              <span> </span>{" "}
              <Link to="/legal/Disclaimers and Liability Waivers">
                Disclaimers and Liability Waivers
              </Link>
              , and other additional terms we make available on the Platform
              from time to time (collectively{" "}
              <span className="bold-p">“Terms”</span>) set out the legal
              obligation vis-à-vis terms and conditions for your interaction and
              usage of the Platform. This document includes a mandatory
              arbitration provision and regulates the resolution of any dispute
              which may arise between you and us as a result of using our
              Platform. By clicking “Accept” when prompted or making an Account
              or, using or accessing the Platform, you understand that you
              acknowledge and agree to adhere to these Terms and all other
              operating rules, policies, and procedures that may be issued
              periodically on the Platform by us, each of which is incorporated
              by reference herein. If you do not agree to any of these Terms,
              including the compulsory arbitration provision, you must promptly
              stop the use of Platform.
            </p>
            <p>
              By accepting these Terms, you agree that the Terms constitute a
              binding contract, effective as on the date of first acceptance by
              you, between Adam Abraha (hereinafter referred to as{" "}
              <span className="bold-p">“Eld”, “we”, “us”, or “our”</span>) and
              you the users (hereinafter referred to as (
              <span className="bold-p">“you”, “your”</span>) (each a{" "}
              <span className="bold-p">“Party”</span> to the contract and
              collectively, the <span className="bold-p">“Parties”</span>).
            </p>
            <h5 className="details-h5">
              2<span className="head-tab">THE SERVICE</span>
            </h5>
            <p>
              The Platform is free to use and allows you to create public and
              private events. Public events will be viewable and available to
              all users of the Platform subject to the settings and terms you
              select such as number of attendees, etc. Private events will not
              be viewable to other users of the Platform, and{" "}
              <span style={{ backgroundColor: "yellow" }}>
                you may send an invite to the users you wish to invite
              </span>
              . You will be able to set terms of the events that you may create
              via the Platform such as specifying activities which will be done
              in such events. You may also be able to create groups and focused
              sub-groups for creating an environment suitable for your
              attendees. Other users of our Platform can choose to go to events
              you create and socialise with you and other users of our Platform
              if you choose to make such event public. When the users arrive at
              the location of an event, they will be able to view and Chat
              (defined below in Section 8) with users who are present at the
              location of the event on the Platform. You can also create groups
              on the Platform for planning and informing such group participants
              of events and gatherings and such groups can be public or private
              depending upon your profile settings.
            </p>
            <p>
              The types of events you may be able to create shall be as
              specified on the Platform. We may choose to cancel or terminate
              events which we may find inappropriate or if we are requested to
              do so by appropriate authorities. You will be able to interact
              with other users of the Platform through our Platform subject to
              our{" "}
              <span>
                <Link to="/legal/Acceptable Use">Acceptable Use Policy</Link>
              </span>{" "}
              and our{" "}
              <span>
                <Link to="/legal/Code of Conducts">Code of Conducts</Link>
              </span>
              .
            </p>
            <h5 className="details-h5">
              3<span className="head-tab">ELIGIBILITY</span>
            </h5>
            <p>3.1 To use our Platform, you must:</p>
            <ul className="detail-list-items list-order-1">
              <li className="list-31">
                Be at least the age of majority and not disqualified from
                entering into contracts under any law;
              </li>
              <li className="list-32">complete the registration process; </li>
              <li className="list-33">agree to our Terms; and</li>
              <li className="list-34">
                provide true, complete, and up to date legal and recent contact
                information.
              </li>
              <li className="list-35">
                You represent and warrant that you have the authority to accept
                these Terms on behalf of the company you may be affiliated with
                or a representative of.
              </li>
              <li className="list-36">
                By using Platform, you represent and warrant that you will use
                Platform only for purposes strictly in accordance with these
                Terms.
              </li>
              <li className="list-37">
                By using Platform, you represent and warrant that you meet all
                the requirements listed above and that you will not use Platform
                in a way that violates any laws or regulations. We may refuse
                Service, close Accounts of any users, and change eligibility
                requirements at any time.
              </li>
              <li className="list-38">
                <span>
                  By accepting these terms, you represent and warrant that you
                  are qualified concerning the conditions stated herein,
                  therefore, are permitted to use the Platform. If you do not
                  meet any of the conditions stated herein, you shall not
                  access/use the Platform and must cease to be a user.
                </span>
              </li>
            </ul>
            <h5 className="details-h5">
              4<span className="head-tab"></span>PERSONAL DATA
            </h5>
            <p>
              To provide you with the Platform as mentioned in these Terms it is
              required that we collect your basic information which may include
              your first name, last name, email, password, date of birth,
              information about the events you create and make public such as
              including without limits, start and end times, location, and
              number of participants etc. (
              <span className="bold-p">“Personal Data”</span>). You agree that
              your Personal Data is collected by us through your consent. For
              additional information please read our Privacy Policy and Data
              Processing Agreement.
            </p>
            <h5 className="details-h5">
              5<span className="head-tab"></span>TERM
            </h5>
            <p>
              The Term begins as soon as you access the Platform and continues
              as long as you use the Service. Clicking the button and entering
              your email/username means that you have officially “signed” these
              Terms.
            </p>
            <h5 className="details-h5">
              6<span className="head-tab">ACCOUNT REGISTRATION</span>
            </h5>
            <ul className="list-order-2">
              <li className="list-61">
                To access the Platform, you need to register for a user account
                on the Platform (<span className="bold-p">“Account”</span>). For
                continuous access to our Platform, it is suggested that you
                provide us with accurate, complete, and updated information
                wherever applicable. Failing to meet the aforesaid condition may
                result in the suspension of the respective user Account.
              </li>
              <li className="list-62">
                You agree not to (1) misrepresent yourself as someone else by
                selecting or using a username a name, email, or phone number of
                another person; (2) use, as a username, an offensive, vulgar, or
                obscene name; (3) use as a username a fictitious name or
                pseudonym.
              </li>
              <li className="list-63">
                You are solely liable and responsible for any activity that
                occurs on your Account. You agree and understand that you shall
                not share your user Account password or one time password with
                anybody or do any such act which promotes unauthorized use of
                your user Account. You shall take all measures to protect your
                password, including but not limited to, restricting the use of
                your personal device.
              </li>
              <li className="list-64">
                You must notify us immediately on our Platform of any change in
                your eligibility to use the Platform, breach of security, or
                unauthorized use of your Account. You shall have the ability to
                delete your Account, either through the Platform or through a
                request made on our Platform.
              </li>
              <li className="list-65">
                You understand and agree that by creating a user Account, you
                agree to receive communication concerning marketing emails and
                SMS from us. You understand and agree that any communication or
                notification you receive from us electronically shall qualify as
                legal notice and shall meet all legal notice requirements.
              </li>
            </ul>
            <h5 className="details-h5">
              7<span className="head-tab">PROHIBITED ACTIVITIES</span>
            </h5>

            <p>7.1 As a user of the Platform, you agree not to:</p>
            <ul className="detail-list-items list-order-3">
              <li className="list-71">
                <span style={{ marginLeft: "0.5rem" }}> </span>systematically
                retrieve data or other content (“Content”) from the Platform to
                create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li className="list-72">
                <span style={{ marginLeft: "0.5rem" }}> </span>make any
                unauthorized use of the Platform, including collecting usernames
                and/or email addresses of users by electronic or other means for
                the purpose of sending unsolicited email, or creating user
                Accounts by automated means or under false pretenses.
              </li>
              <li className="list-73">
                <span style={{ marginLeft: "0.5rem" }}> </span>use a buying
                agent or purchasing agent to make purchases on the Platform.
              </li>
              <li className="list-74">
                <span style={{ marginLeft: "0.5rem" }}> </span>circumvent,
                disable, or otherwise interfere with security-related features
                of the Platform, including features that prevent or restrict the
                use or copying of any Content or enforce limitations on the use
                of the Platform and/or the Content contained therein.
              </li>
              <li className="list-75">
                <span style={{ marginLeft: "0.5rem" }}> </span>engage in
                unauthorized framing of or linking to the Platform.
              </li>
              <li className="list-76">
                <span style={{ marginLeft: "0.5rem" }}> </span>trick, defraud,
                or mislead us and other users of the Platform, especially in any
                attempt to learn sensitive account information such as user
                passwords;
              </li>
              <li className="list-77">
                <span style={{ marginLeft: "0.5rem" }}> </span>make improper use
                of our support services or submit false reports of abuse or
                misconduct.
              </li>
              <li className="list-78">
                <span style={{ marginLeft: "0.5rem" }}> </span>engage in any
                automated use of the system, such as using scripts to send
                comments or messages, or using any data mining, robots, or
                similar data gathering and extraction tools.
              </li>
              <li className="list-79">
                <span style={{ marginLeft: "0.5rem" }}> </span>interfere with,
                disrupt, or create an undue burden on the Platform or the
                networks or services connected to the Platform.
              </li>
              <li className="list-710">
                attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li className="list-711">
                sell or otherwise transfer your profile.
              </li>
              <li className="list-712">
                use any information obtained from the Platform in order to
                harass, abuse, or harm another person.
              </li>
              <li className="list-713">
                use the Platform as part of any effort to compete with us or
                otherwise use the Platform and/or the Content for any
                revenue-generating endeavor or commercial enterprise. Nothing in
                these Terms shall function to preclude you to sell products and
                services at an event site or premises however, such sale of
                items and services are personal to you and your customers. We
                shall not be liable for any transaction made by you or your
                customers and nor are we a party to such an agreement between
                you and your customers/buyers. We shall not be liable for any
                claims, disputes, damages etc. arising out of such transactions
                between you and your customers/buyers.
              </li>
              <li className="list-714">
                attempt to bypass any measures of the Platform designed to
                prevent or restrict access to the Platform, or any portion of
                the Platform.
              </li>
              <li className="list-715">
                harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Platform to you.
              </li>
              <li className="list-716">
                delete the copyright or other proprietary rights notice from any
                Platform Content.
              </li>
              <li className="list-717">
                copy or adapt the Platform's software, including but not limited
                to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li className="list-718">
                upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Platform or modifies, impairs,
                disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Platform.
              </li>
              <li className="list-719">
                upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats (
                <span className="bold-p">“gifs”</span>
                ), 1×1 pixels, web bugs, cookies, or other similar devices
                (sometimes referred to as{" "}
                <span className="bold-p">“spyware”</span> or{" "}
                <span className="bold-p">“passive collection mechanisms”</span>{" "}
                or <span className="bold-p">“pcms”</span>).
              </li>
              <li className="list-720">
                except as may be the result of a standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Platform, or using or launching any unauthorized script or
                other software.
              </li>
              <li className="list-721">
                disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Platform.
              </li>
              <li className="list-722">
                use the Platform in a manner inconsistent with any applicable
                laws or regulations.
              </li>
            </ul>

            <h5 className="details-h5 head-space">
              <span className="head-8">
                <span className="head-tab"></span>INTERACTION WITH OTHER USERS
              </span>
            </h5>
            <ul className="detail-list-items">
              <li>
                The Platform allows you to interact with other users of the
                Platform using the in-built chat messaging feature (
                <span className="bold-p">“Chat”</span>).
              </li>
              <li>
                You must use Chat at your own discretion and risk. Although we
                try our best to maintain a user-friendly and safe Platform, you
                hereby acknowledge and agree that we cannot and do not review
                the background of our users. You are advised to run your own
                background checks before meeting any stranger in real life.
              </li>
              <li>
                We and our subsidiaries, affiliates, successors, assigns,
                employees, agents, directors, officers, and shareholders hereby
                exclude, to the fullest extent permitted by law, any and all
                liability which may arise from interaction among its Members.
                You agree that the use of our Chat functionality is subject to
                our{" "}
                <span>
                  <Link to="/legal/Acceptable Use">Acceptable Use Policy</Link>
                </span>{" "}
                and our{" "}
                <span>
                  <Link to="/legal/Code of Conduct">Code of Conduct</Link>
                </span>
                .
              </li>
            </ul>
            <h5 className="details-h5">
              9<span className="head-tab">COPYRIGHT POLICY</span>
            </h5>
            <p>
              If you are a copyright owner or an agent thereof and believe that
              any content made available via the Platform infringes upon your
              copyright, you may submit a notification pursuant to the Swedish
              Copyright Laws or the “Act On Copyright In Literary And Artistic
              Works” (the <span className="bold-p">“Act”</span>) as amended from
              time to time by providing us with the following information in
              writing: (a) identification of the copyrighted work claimed to
              have been infringed, or, if multiple copyrighted works are covered
              by a single notification, a representative list of such works; (b)
              identification of the claimed infringing material and information
              reasonably sufficient to permit us to locate the material on the
              Platform (providing the URL(s) of the claimed infringing material
              satisfies this requirement); (c) information reasonably sufficient
              to permit us to contact you, such as an address, telephone number,
              and, if available, an email address; (d) a statement by you that
              you have a good faith belief that the disputed use is not
              authorized by the copyright owner, its agent, or the law; (e) a
              statement by you, made under penalty of perjury, that the above
              information in your notification is accurate and that you are the
              copyright owner or are authorized to act on the copyright owner’s
              behalf; and (f) your physical or electronic signature. Please send
              us all notices in connection with copyright infringements to:
              support@eldapp.net
            </p>
            <p>9.1 Counter-Notice:</p>
            <p>
              If you feel that any of your Content was improperly removed or
              made unavailable to other users, please contact us via the contact
              information set forth below.
            </p>
            <h5 className="details-h5">
              10<span className="head-tab">LICENSE</span>
            </h5>
            <p>
              Subject to the Terms, Eld gives you a limited, revocable,
              non-sublicensable, non-exclusive, and non-transferable license to
              the Platform (and other items displayed on the Platform for
              download) only for purposes of using the Platform in accordance
              with these Terms. It is expressly prohibited without the prior
              express permission from Eld to use, reproduce, modify, distribute,
              or store any Platform Content for purposes other than using the
              Platform consistent with these Terms.
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-11">
                <span className="head-tab"></span>INTELLECTUAL PROPERTY RIGHTS
              </span>
            </h5>
            <ul className="list-order-45">
              <li className="list-111">
                The Platform contains Intellectual Property of Eld in the form
                of content, graphics, videos, audios, text, and any other
                digital content (
                <span className="bold-p">“Platform Content”</span>). This is an
                agreement for the use of Platform, and you are not granted a
                license to any Platform Content under this Terms. Except to the
                extent that applicable laws prevent us from doing so, you will
                not, directly or indirectly: (i) reverse engineer, decompile,
                disassemble, or otherwise attempt to discover the source code,
                object code, or underlying structure, ideas, or algorithms of,
                or found at or through the Platform; (ii) remove any proprietary
                notices or labels from the Platform Content; reproduce or copy
                the Platform Content or any part thereof; (iii) modify,
                translate, or create derivative works based on the Platform
                Content; (iv) copy, distribute, pledge, assign, or otherwise
                transfer or encumber rights to the Platform Content; (v) create
                any derivative product from any of the foregoing; (vi) without
                our express written permission, introduce automated agents or
                scripts to the Platform so as to produce multiple accounts,
                generate automated searches, requests and queries, or to strip
                or mine data from the Platform; or (vii) allow third parties to
                gain access to the Platform or to Platform Content in any manner
                other than as expressly permitted in this Terms of Service.
              </li>
              <li className="list-112">
                You acknowledge and agree that the Platform, the names and logos
                and all related product and names, design marks and slogans, and
                all other material comprising the Platform, are the property of
                the Eld or its affiliates (collectively, the{" "}
                <span className="bold-p">“Marks”</span>). Unless stated
                otherwise, all Marks are protected as the copyright, trade
                dress, trademarks and/or other intellectual properties owned by
                us or by other parties that have licensed their material to us.
                You are not authorized to use any of the Marks in any
                advertising, publicity, or any other commercial manner without
                the prior written consent of Eld. Your use of the Platform
                confers no title or ownership in the Platform or the Marks and
                is not a sale of any rights in the Platform or the Marks. All
                ownership rights remain in Eld or its third-party suppliers, as
                the case may be.
              </li>
              <li className="list-113">
                You are solely responsible for any content and other material
                that you submit, publish, transmit, or display on, through, or
                with our Platform (<span className="bold-p">“Content”</span>).
                You grant us a non-exclusive, worldwide, royalty-free, and fully
                paid license to use the Content, as necessary, for purposes of
                providing the Platform to you and other users of the Platform.
                All rights in and to the Content not expressly granted to us in
                these Terms are reserved by you.
              </li>
              <li className="list-114">
                You acknowledge and agree that any comments, ideas and/or
                reports provided to us (
                <span className="bold-p">“Feedback”</span>) shall be the
                property of Eld and you hereby irrevocably transfer and assign
                to Eld such Feedback, and all associated intellectual property
                rights, provided however that you shall be free to use such
                Feedback in the ordinary conduct of your business.
              </li>
              <li className="list-115">
                It is our policy to limit access to our Platform of users who
                infringe the intellectual property rights of others, as a
                consequence of which we may terminate your Account. If you find
                that anything on our Platform infringes any copyright that you
                own or control, please contact us using the information provided
                in section 18.
              </li>
            </ul>
            <h5 className="details-h5">
              12<span className="head-tab">TERMINATION</span>
            </h5>
            <p>
              We reserve the right to terminate your access to all or any part
              of the Platform at any point of time, without providing any cause,
              with or without notice, effective immediately, which may result in
              the forfeiture and destruction of all information associated with
              your membership. You may terminate your Account if you wish to do
              so by placing a request on our Platform. Any such termination
              shall immediately revoke the license granted under Section 10, and
              you shall effective immediately be prohibited from accessing or
              using the Platform or Content for any reason. The provisions of
              these Terms which by their nature should survive termination shall
              survive termination, including but not limited to Licenses,
              warranty disclaimers, ownership provisions, limitations of
              liability and indemnification.
            </p>
            <h5 className="details-h5">
              13<span className="head-tab">RELEASE</span>
            </h5>
            <p>
              To the maximum extent permissible by applicable law, you hereby
              absolutely release Eld and its affiliates as well as all other
              users of the Platform from responsibilities including but not
              limited to, claims, causes of action, liability, expenses,
              demands, and/or damages (actual and consequential) of all kinds
              and nature, known and unknown and claims of negligence that may
              arise from the use of or inability to use, or in relation to your
              use of and/or reliance on the Platform, including any disputes
              which may arise between users and the acts or omissions of third
              parties.
            </p>
            <h5 className="details-h5">
              14<span className="head-tab">INDEMNIFICATION</span>
            </h5>
            <p>
              You acknowledge and agree that you shall at all times defend,
              indemnify, and hold harmless us, our affiliates and each of our
              and our affiliates’ including but not limited to, respective
              officers, directors, contractors, employees, agents, suppliers,
              and representatives against all liabilities, claims, fees, costs,
              penalties or sanctions, losses, expenses, and interest of any
              nature, including reasonable attorneys’ fees, arising out of or
              which may relate to: (a) your use or misuse of, or access to, the
              Platform; (b)your violation of any privacy, professional, ethics,
              licensing, or consumer protection laws, rules, or regulations; (c)
              your misuse of anyone’s private, proprietary, or Personal Data;
              (d) infringement by you (or any third party using your Account or
              identity in the Platform) of any intellectual property or other
              rights of any person or entity; or (e) otherwise in violation of
              these Terms in any way. It is our right to assume the exclusive
              defence and control of any matter otherwise subject to
              indemnification by you, in which event you shall assist and
              cooperate with us in asserting any available defences at your
              expense, including reasonable attorneys’ fees incurred by us.
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-15">
                <span className="head-tab"></span>GOVERNING LAW AND DISPUTE
                RESOLUTION
              </span>
            </h5>
            <p>
              The parties agree that the validity, operation, and performance of
              these Terms shall be governed by and interpreted in accordance
              with the laws of Sweden applicable therein (notwithstanding
              conflict of law rules). The Parties do expressly and irrevocably
              concede to the jurisdiction of courts located in Sweden with
              respect to any matter or claim, suit, action or proceeding arising
              under or related to these Terms.
            </p>
            <p>
              Any dispute concerning the subject matter of these Terms, or the
              breach, termination, or validity thereof (a{" "}
              <span className="bold-p">“Dispute”</span>) will be settled
              exclusively in accordance with the procedures set forth herein.
              The party seeking resolution of a Dispute will first give notice
              in writing of the Dispute to the other party, setting forth the
              nature of the Dispute and a concise statement of the issues to be
              resolved. If the Dispute has not been resolved through good faith
              efforts and negotiations of senior officers or representatives of
              the parties within nineteen (19) days of receipt by the relevant
              party of the notice of Dispute, such notice will be deemed to be a
              notice of arbitration and the parties agree to submit the Dispute
              to a single arbitrator mutually agreeable to both parties. The
              venue of such arbitration shall be Sweden. In the event that the
              Parties cannot agree on a sole arbitrator, the arbitrator will be
              appointed by a judge of the appropriate court on application by
              either party to the Dispute. All decisions and awards rendered by
              the arbitrator will be final and binding upon the parties for all
              questions submitted to such arbitrator, and the costs associated
              with such submission shall be shared equally by the parties
              involved in the Dispute unless the arbitrator decides otherwise.
              The parties waive all rights of appeal, therefore to any court or
              tribunal, and agree that the only recourse by any party to any
              court will be for the purpose of enforcing an arbitration award.
            </p>
            <h5 className="details-h5">
              16<span className="head-tab">MODIFICATION.</span>
            </h5>
            <p>
              We shall have the right to make modifications or replace any of
              the Terms, or suspend, change, or discontinue the Platform
              (including but not limited to, the availability of any featured
              content, or database,) at any time or instance by posting a notice
              through the Platform. We may also do so by sending you a notice
              via email, via the Platform, or by any other means of
              communication. We reserve the right to impose limits on certain
              features and services. We may if required to do so restrict your
              access to parts or all of the Platform without notice or
              liability. We endeavour to try and provide notice of modifications
              to these Terms. However, you also agree that it is also your
              responsibility to make reasonable efforts to be aware of such
              modifications.
            </p>
            <p>
              When you continue to use the Platform after notification of any
              modifications to the Terms shall mean acceptance of those
              modifications, and those modifications shall apply to your
              continued use of the Platform going forward. Your use of the
              Platform is subject to the Terms in effect at the time of such
              use.
            </p>
            <h5 className="details-h5">
              17<span className="head-tab">MISCELLANEOUS</span>
            </h5>
            <ul className="list-order-4">
              <li className="list-171">
                <span className="list-title">
                  Entire agreement and severability.
                </span>{" "}
                These Terms are the entire agreement between you and us with
                regards to the Platform. These Terms supersede all prior,
                contemporaneous communications and proposals made (whether oral,
                written, or electronic) between you and us with regards to the
                Platform. If any provisions mentioned in these Terms are found
                to be unenforceable or invalid, that particular provision or
                provisions will be limited or eliminated to the minimum extent
                necessary so that these Terms will otherwise remain in full
                force and effect and enforceable. In the event of the failure of
                either Party to exercise in any respect, any right provided for
                herein shall not be deemed a waiver of any further rights
                hereunder.
              </li>
              <li className="list-172">
                <span className="list-title">Relationship of the parties.</span>{" "}
                You and we are independent contractors. These Terms shall not
                and do not create a partnership, franchise, joint venture,
                agency, fiduciary, or employment relationship of any kind
                between the Parties. You shall not have any authority of any
                kind to bind us in any respect. Unless expressly stated
                otherwise in these Terms, there are no third-party beneficiaries
                to the Terms. We do not have any special relationship to you nor
                any fiduciary duty.
              </li>
              <li className="list-173">
                <span className="list-title">Force majeure.</span> We will not
                be liable in any case for any failure or delay in the
                performance of our obligations for any reason hereunder if such
                failure results from: (a) any cause beyond our reasonable
                control, including but not limited to, mechanical, electronic or
                communications failure or degradation, denial-of-service
                attacks, (b) any failure by a third-party hosting provider or
                utility provider, (c) strikes, shortages, riots, fires, acts of
                God, war, terrorism, and governmental action.
              </li>
              <li className="list-174">
                <span className="list-title">Assignment.</span> You agree that
                these Terms are personal to you, and are not assignable,
                transferable or sublicensable by you. We reserve the right to
                assign, transfer or delegate any of our rights and obligations
                hereunder without obtaining consent.
              </li>
              <li className="list-175">
                <span className="list-title">Notices.</span> All notices under
                these Terms shall be in writing Unless otherwise specified in
                these Term of Service. Notices to us shall be sent by email to
                support@eldapp.net. You shall ensure written confirmation of
                receipt for notice to be effective. Notices to you shall be sent
                to your last known email address (or the email address of your
                successor, if any) and/or to any email address that would be
                reasonably likely to provide notice to you, and such notice
                shall be effective upon transmission.
              </li>
              <li className="list-176">
                <span className="list-title">No waiver.</span> Our failure to
                enforce any part of these Terms shall not constitute a waiver of
                our right to later enforce that or any other part of these
                Terms. Waiver of compliance in any particular instance does not
                mean that we will waive compliance in the future.
              </li>
              <li className="list-177">
                <span className="list-title">Interpretation.</span> The headers
                are provided only to make this agreement easier to read and
                understand.
              </li>
            </ul>
            <h5 className="details-h5">
              18<span className="head-tab">CONTACT</span>
            </h5>
            <p>
              You may get in touch with us through our Platform or the address
              given below:
            </p>
            <p>
              <span>Eld</span>
              <br></br>
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

export default TermsOfService;
