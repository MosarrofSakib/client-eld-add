import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Logo from "../Assets/Images/logoeld.png";

const DataProsAg = () => {
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
          <h1 className="detail-h1">Data Processing Agreement</h1>
          <span className="detail-h1-border"></span>
          <div className="details-main">
            <p>Last Updated: Wednesday, August 17, 2022</p>
            <h5 className="details-h5">
              1<span className="head-tab"></span>INTRODUCTION
            </h5>
            <p>
              This Agreement between Eld (
              <span className="bold-p">“we”, “us”, “our”</span>) and you the
              users (<span className="bold-p">“users”, “you”, “your,”</span>)
              reflects the agreement with respect to the Controlling and
              Processing Personal Data on behalf of a Data Subject for the
              provision of the Platform and connected Services as may be
              applicable. This Agreement shall hereby, through this reference,
              be construed as a part of our{" "}
              <span>
                <Link to="/legal/Privacy Policy">Privacy Policy</Link>
              </span>
              .
            </p>
            <h5 className="details-h5">
              2<span className="head-tab"></span>DEFINITIONS
            </h5>
            <ul className="list-order-25">
              <li className="list-21">
                <span className="list-title">“Agreement”, “DPA” </span>means
                this Data Processing Agreement.
              </li>
              <li className="list-22">
                <span className="list-title">“Contracted Processor”</span>means
                a Subprocessor;
              </li>
              <li className="list-23">
                <span className="list-title">“Data Protection Laws” </span>
                means EU Directive 95/46/EC, as transposed into domestic
                legislation of each Member State, and as amended, replaced, or
                superseded from time to time, including by the GDPR and laws
                implementing or supplementing the GDPR and, to the extent
                applicable, the data protection or privacy laws of any other
                country.
              </li>
              <li className="list-24">
                <span className="list-title">“Data Transfer” </span>means a
                transfer of Personal Data to a Subprocessor as specified herein;
              </li>
              <li className="list-25">
                <span className="list-title">“EEA” </span>means the European
                Economic Area;
              </li>
              <li className="list-26">
                <span className="list-title">“GDPR” </span>means EU General Data
                Protection Regulation 2016/679;
              </li>
              <li className="list-27">
                <span className="list-title">“Permitted Affiliates” </span>means
                any of your Affiliates that (i) are permitted to use the
                Services pursuant to the Agreement but have not signed their own
                separate agreement with us and are not a Consumer as defined
                under the Agreement, (ii) qualify as a Controller of Personal
                Data Processed by us, and (iii) are subject to Data Protection
                Laws.
              </li>
              <li className="list-28">
                <span className="list-title">“Personal Data” </span>means any
                information about an identified or identifiable natural person.
                An identifiable person is one who can be identified, directly or
                indirectly, in particular by reference to an identification
                number, location data, online identifier, or to one or more
                factors specific to that person’s physical, physiological,
                genetic, mental, economic, cultural, or social identity.
              </li>
              <li className="list-29">
                <span className="list-title">“Personal Data Breach” </span>means
                a breach of security leading to the accidental or unlawful
                destruction, loss, alteration, unauthorized disclosure of, or
                access to, Personal Data transmitted, stored, or otherwise
                Processed by where applicable the Parties to this Agreement
                and/or our Sub-Processors in connection with the provision of
                the Services. “Personal Data Breach” will not include
                unsuccessful attempts or activities that do not compromise the
                security of Personal Data, including unsuccessful log-in
                attempts, pings, port scans, denial of service attacks, and
                other network attacks on firewalls or networked systems.
              </li>
              <li className="list-210">
                <span className="list-title">“Platform” </span>means our mobile
                application, website, and mobile website.
              </li>
              <li className="list-211">
                <span className="list-title">“Services” </span>means the
                services provided by us through the Platform.
              </li>
              <li className="list-212">
                <span className="list-title">“Special categories” </span>of
                personal data (sensitive personal data) relate to racial or
                ethnic origin, political opinions, religious or philosophical
                beliefs, trade union membership, genetic data, biometric data,
                data concerning health or data concerning a natural person’s sex
                life or sexual orientation. Special category data can include
                racial and ethnic origin, health records, criminal record check
                etc.
              </li>
              <li className="list-213">
                <span className="list-title">“Subprocessor” </span>means any
                person appointed by or on behalf of us to process Personal Data
                in connection with the Agreement.
              </li>
              <li className="list-214">
                The terms,{" "}
                <span className="list-title">
                  “Commission”, “Controller”, “Consumer”, “Processor”, “Data
                  Subject”, “Member State”, “Processing”{" "}
                </span>{" "}
                and
                <span className="list-title"> “Supervisory Authority” </span>
                shall have the same meaning as in the GDPR, and their cognate
                terms shall be construed accordingly.
              </li>
            </ul>
            <h5 className="details-h5">
              3<span className="head-tab"></span>TERM
            </h5>
            <p>
              The term of this Agreement commences as soon as you sign up for an
              online account on the Platform and subsists unless terminated by
              you or us in accordance with the terms and conditions of the
              applicable contract between us and you. Termination of this
              Agreement does not waive any obligations such as “confidentiality”
              and other terms of similar nature which ought to survive the
              termination of this Agreement. By clicking on “Accept” or other
              analogous terms when prompted, you agree to be bound by the terms
              of this DPA
            </p>
            <h5 className="details-h5">
              4<span className="head-tab"></span>STATEMENT ON DATA PROTECTION
            </h5>
            <p>
              We are the Data Controller and Processor and are committed to
              protecting your rights in line with the Data Protection Laws. We
              are committed to keeping your Personal Data and any other personal
              data collected, used, or stored by us as secure and private as
              possible. Where applicable, you shall also be bound by the same or
              stricter obligations applicable to us for personal data processing
              activities when you collect Personal Data of other users for any
              reason including without limits, creating events, activities,
              focused sub-groups, etc. You shall not use any Personal Data for
              any commercial activities and other activities in contravention of
              any applicable laws.
            </p>
            <h5 className="details-h5">
              5<span className="head-tab"></span>SCOPE AND APPLICATION
            </h5>
            <p>
              This Agreement governs how your Personal Data is shared. Our
              rights and obligations are specified herein.
            </p>
            <h5 className="details-h5">
              6<span className="head-tab"></span>PRINCIPLES
            </h5>
            <p className="list-61" style={{ marginLeft: "1.8rem" }}>
              {" "}
              In accordance with the requirements outlined in the Data
              Protection Laws, Personal Data will be:
            </p>
            <ul className="list-order-25">
              <li className="list-611">
                Processed lawfully, fairly, and in a transparent manner;
              </li>
              <li className="list-612">
                Collected for specified, explicit, and legitimate purposes and
                processed in a manner that is compatible with those purposes;
              </li>
              <li className="list-613">
                Adequate, relevant, and limited to what is necessary in relation
                to the purposes for which they are processed;
              </li>
              <li className="list-614">
                Accurate and, where necessary, kept up to date. Every reasonable
                step must be taken to ensure that Personal Data that is
                inaccurate, having regard to the purposes for which they are
                processed, erased, or rectified without delay;
              </li>
              <li className="list-615">
                Kept till the Data Subject requests deletion of Personal Data by
                email with the subject line “Request for Deletion of Data” to
                the email address: support@eldapp.net. Data Subject is required
                to share identifying information along with the request for
                deletion;
              </li>
              <li className="list-616">
                Processed in a manner that ensures appropriate security of the
                Personal Data, including protection against unauthorized or
                unlawful processing and against accidental loss, destruction, or
                damage, using appropriate technical or organizational measures.
              </li>
            </ul>
            <h5 className="details-h5">
              7<span className="head-tab"></span>SECURITY
            </h5>
            <ul className="list-order-27">
              <li className="list-71">
                Considering the state of the art, the costs of implementation
                and the nature, scope, context, and purposes of Processing, as
                well as the risk of varying likelihood and severity for the
                rights and freedoms of natural persons, Processor shall in
                relation to the Personal Data implement appropriate technical
                and organizational measures to ensure a level of security
                appropriate to that risk, including, as appropriate, the
                measures referred to in Article 32(1) of the GDPR.
              </li>
              <li className="list-72">
                In assessing the appropriate level of security, we shall
                consider, in particular, the risks that are presented by
                Processing, in particular from a Personal Data Breach.
              </li>
              <li className="list-73">
                Encryption methods such as web application firewall (WAF) are
                utilized to protect Personal Data. This Platform uses secure
                services and secure protocols to process data. All collected
                data is stored on AWS databases which are protected by access
                limitations only server and authorized personnel can access the
                data and it requires secure credentials to login which are not
                shared in any case. The next layer of security is that the data
                is transferred from the server to the application over secure
                https protocol and every request contains an identification
                token. This process involves the converting of information or
                data into a code to prevent unauthorised access. This is to
                ensure that if a request is generated outside the application
                then the data that does not have the token will not be shared or
                transferred to the application.
              </li>
              <li className="list-74">
                We utilize services of AWS, CloudClusters.io, Postmark.app,
                Firebase (FCM tokens for notifications) as Subprocessor who
                collect or have access to your Personal Data. Your login
                credentials are encrypted and stored as in an anonymized form or
                hash; therefore, your passwords are not completely accessible to
                us or any other users in case of a Personal Data Breach.
              </li>
            </ul>
            <h5 className="details-h5 head-space">
              <span className="head-8">
                <span className="head-tab"></span>DATA PROTECTION IMPACT
                ASSESSMENT AND PRIOR CONSULTATION
              </span>
            </h5>
            <p>
              Where applicable, you shall provide reasonable assistance to us
              with any data protection impact assessments and prior
              consultations with Supervising Authorities or other competent data
              privacy authorities, which we reasonably consider to be required
              by article 35 or 36 of the GDPR or equivalent provisions of any
              other Data Protection Law, in each case solely in relation to
              Processing of Company Personal Data by, and taking into account
              the nature of the Processing and information available to, the
              Contracted Processors.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-9">
                <span className="head-tab"></span>INFRASTRUCTURE AVAILABILITY
              </span>
            </h5>
            <p>
              We use commercially reasonable efforts to ensure a maximum uptime
              of our Platform and Services. Downtime does not include
              unavailability caused by one or more of the following:
            </p>
            <ul className="list-order-27">
              <li className="list-91">
                Maintenance, a suspension, or termination of the Platform and
                Services;
              </li>
              <li className="list-92">
                The failure of servers or Platform and Services outside of a
                datacentre on which the Platform and Services are dependent,
                including, but not limited to, inaccessibility on the Internet
                that is not caused by our Infrastructure or network providers;
              </li>
              <li className="list-93">
                A force majeure event such as an act of God, an act of war, an
                act of terrorism, fire, governmental action, labour dispute, and
                any other circumstances or events not in our direct control;
              </li>
              <li className="list-94">
                An attack on our Infrastructure, including a denial-of-service
                attack or unauthorized access (i.e., hacking);
              </li>
              <li className="list-95">
                Unavailability of Platform and Services not reported by you
                within five (5) of the days of the date on which the Uptime
                Percentage dropped below 95%;
              </li>
              <li className="list-96">
                Your use of a separate Subprocessor or service provider that is
                not subject to this Agreement or our{" "}
                <span>
                  <Link to="/legal/Privacy Policy">Privacy Policy</Link>
                </span>
                ;
              </li>
              <li className="list-97">
                Unavailability that is caused by your breach of this Agreement.
              </li>
            </ul>
            <h5 className="details-h5">
              10<span className="head-tab"></span>NETWORK SECURITY
            </h5>
            <p>
              We shall maintain policies and procedures around the network
              infrastructure used to process Personal Data, establish, and
              enforce safe network practices, and define service level
              agreements with internal and external network services.
            </p>
            <h5 className="details-h5">
              11<span className="head-tab"></span>ACCOUNTABILITY
            </h5>
            <p>
              We implement appropriate technical and organizational measures to
              demonstrate that data is processed in line with the principles set
              out in Data Protection Laws. Records of activities relating to
              higher risk processing will be maintained, such as the processing
              of special categories data or that in relation to criminal
              convictions and offences.
            </p>
            <h5 className="details-h5">
              12<span className="head-tab"></span>LAWFUL PROCESSING
            </h5>
            <p className="list-121" style={{ marginLeft: "2.5rem" }}>
              The legal basis for processing data will be identified and
              documented prior to data being processed. Under Data Protection
              Laws, data will be lawfully processed under the following
              conditions:
            </p>
            <ul className="list-order-6">
              <li className="list-1211">
                The consent of the data subject has been obtained.
              </li>
              <li className="list-1212">
                Processing is necessary for:
                <ul className="list-order-5">
                  <li className="list-a">
                    Compliance with a legal obligation;
                  </li>
                  <li className="list-b">
                    For the performance of a contract with the data subject or
                    to take steps to enter into a contract;
                  </li>
                  <li className="list-c">
                    Protecting the vital interests of a data subject or another
                    person;
                  </li>
                  <li className="list-d">
                    For the purposes of legitimate interests pursued by the
                    controller or a third party.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="list-122" style={{ marginLeft: "2.5rem" }}>
              Special category data will only be processed under the following
              conditions:
            </p>
            <ul className="list-order-6">
              <li className="list-1221">
                Explicit consent of the data subject,
              </li>
              <li className="list-1222">
                Processing relates to personal data manifestly made public by
                the data subject.
              </li>
              <li className="list-1223">
                Processing is necessary for:
                <ul className="list-order-5">
                  <li className="list-a">
                    Carrying out obligations under employment, social security
                    or social protection law, or a collective agreement.
                  </li>
                  <li className="list-b">
                    Protecting the vital interests of a data subject or another
                    individual where the data subject is physically or legally
                    incapable of giving consent.
                  </li>
                  <li className="list-c">
                    The establishment, exercise, or defence of legal claims or
                    where courts are acting in their judicial capacity.
                  </li>
                </ul>
              </li>
            </ul>
            <h5 className="details-h5">
              13<span className="head-tab"></span>ACCESS TO PERSONAL DATA
            </h5>
            <p>
              We strive to maintain the highest security standards with respect
              to the Personal Data of data subjects. As such, the Personal Data
              is shared strictly for the purposes for which it was collected.
              The Personal Data is not shared with any individual or entity not
              bound by strict confidentiality obligations in writing. As
              Personal Data is not shared by us with any party not bound by
              strict confidentiality obligations in writing, as applicable, all
              Processors shall not engage Subprocessors without our consent.
            </p>
            <h5 className="details-h5">
              14<span className="head-tab"></span>INDIVIDUAL’S RIGHTS
            </h5>
            <p className="list-141" style={{ marginLeft: "2.5rem" }}>
              Individuals have the following rights pertaining to their personal
              data:
            </p>
            <ul className="list-order-6">
              <li className="list-1411">
                <span className="list-title">To be informed. </span>That means
                an individual has the right to be informed about the collection
                and use of their personal data.
              </li>
              <li className="list-1412">
                <span className="list-title">
                  Rights to access and port data.{" "}
                </span>
                That means an individual has the right to access their personal
                data and supplementary information.
              </li>
              <li className="list-1413">
                <span className="list-title">To rectify. </span>That means an
                individual is entitled to have personal data rectified if it is
                inaccurate or incomplete.
              </li>
              <li className="list-1414">
                <span className="list-title">To erase. </span>This also known as
                ‘the right to be forgotten’. That means right is to enable an
                individual to request the deletion or removal of personal data
                where there is no compelling reason for its continued
                processing.
              </li>
              <li className="list-1415">
                <span className="list-title">
                  To restrict individual’s data.{" "}
                </span>
                This means an individual has a right to ‘block’ or suppress
                processing of personal data.
              </li>
              <li className="list-1416">
                <span className="list-title">To object to processing. </span>
              </li>
              <li className="list-1417">
                <span className="list-title">To withdraw consent </span>if
                processing is based on consent.
              </li>
            </ul>
            <h5 className="details-h5">
              15<span className="head-tab"></span>PRIVACY BY DESIGN
            </h5>
            <p>
              We will act in accordance with the Data Protection Laws by
              adopting a privacy by design approach and implementing technical
              and organizational measures which demonstrate how we have
              considered and integrated data protection into processing
              activities.
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-16">
                <span className="head-tab"></span>AFFILIATES AND THIRD PARTY
                SUBPROCESSORS
              </span>
            </h5>
            <p>
              To the extent we engage Third Party Subprocessors and/or our
              Affiliates to Process Personal Data, such entities shall be
              subject to the same level of data protection and security as us
              under this Agreement and our{" "}
              <span>
                <Link to="/legal/Privacy Policy">Privacy Policy</Link>
              </span>
              .
            </p>
            <h5 className="details-h5">
              17<span className="head-tab"></span>DATA BREACHES
            </h5>
            <p>
              We will strive to ensure that all our personnel are made aware of,
              and understand, what constitutes as a data breach as part of their
              training. Where a breach is likely to result in a risk to the
              rights and freedoms of individuals, the appropriate authorities
              will be informed. All notifiable breaches will be reported to the
              relevant supervisory authority within 72 hours of us becoming
              aware of it. The risk of the breach having a detrimental effect on
              the individual, and the need to notify the relevant supervisory
              authority, will be assessed on a case-by-case basis. In the event
              that a breach is likely to result in a high risk to the rights and
              freedoms of an individual, we will notify those concerned
              directly.
            </p>
            <h5 className="details-h5">
              18<span className="head-tab"></span>DATA TRANSFER
            </h5>
            <p>
              You may not transfer or authorize the transfer of Data to
              countries outside the EU and/or the European Economic Area (EEA)
              without our prior written consent.
            </p>
            <h5 className="details-h5">
              19<span className="head-tab"></span>AMENDMENTS
            </h5>
            <p>
              We shall have the right to make modifications or replace any of
              our policies, or suspend, change, or discontinue the Platform
              (including but not limited to, the availability of any featured
              content, or database,) at any time or instance by posting a notice
              through the Platform. We may also do so by sending you a notice
              via email, via the Platform, or by any other means of
              communication. We reserve the right to impose limits on certain
              features and services. We may if required to do so restrict your
              access to parts or all of the Platform without notice or
              liability. We endeavour to try and provide notice of modifications
              to this Agreement. However, you also agree that it is also your
              responsibility to make reasonable efforts to be aware of such
              modifications.
            </p>
            <h5 className="details-h5">
              20<span className="head-tab"></span>NOTICES
            </h5>
            <p>
              All notices under this Agreement shall be in writing unless
              otherwise specified in this Agreement. Notices to us shall be sent
              by email to{" "}
              <span>
                <a href="mailto: support@eldapp.net">support@eldapp.net</a>
              </span>{" "}
              You shall ensure written confirmation of receipt for notice to be
              effective. Notices to you shall be sent to your last known email
              address (or the email address of your successor, if any) and/or to
              any email address that would be reasonably likely to provide
              notice to you, and such notice shall be effective upon
              transmission.
            </p>
            <h5 className="details-h5">
              21<span className="head-tab"></span>NO WAIVER
            </h5>
            <p>
              Our failure to enforce any part of this Agreement shall not
              constitute a waiver of our right to later enforce that or any
              other part of this Agreement. Waiver of compliance in any
              particular instance does not mean that we will waive compliance in
              the future.
            </p>
            <h5 className="details-h5">
              22<span className="head-tab"></span>INTERPRETATION
            </h5>
            <p>
              The headers are provided only to make this agreement easier to
              read and understand.
            </p>
            <h5 className="details-h5">
              23<span className="head-tab"></span>GOVERNING LAW
            </h5>
            <p>
              You agree that the validity, operation, and performance of these
              Terms shall be governed by and interpreted in accordance with the
              laws of Sweden applicable therein (notwithstanding conflict of law
              rules). You expressly and irrevocably concede to the jurisdiction
              of courts located in Sweden with respect to any matter or claim,
              suit, action or proceeding arising under or related to this
              Agreement.
            </p>
            <h5 className="details-h5">
              24<span className="head-tab"></span>CONTACT
            </h5>
            <p>
              You may contact us through the address given below:<br></br>
              <span>
                Email: <a href="mailto: hello@eldapp.net">hello@eldapp.net</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProsAg;
