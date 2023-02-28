import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import Logo from "../Assets/Images/logoeld.png";

const PrivacyPolicy = () => {
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
          <h1 className="detail-h1">Privacy Policy</h1>
          <span className="detail-h1-border"></span>
          <div className="details-main">
            <p>Last Updated: Wednesday, August 17, 2022</p>
            <h5 className="details-h5">
              1<span className="head-tab">INTRODUCTION</span>
            </h5>
            <p>
              We are delighted that you have shown interest in the services of
              Eld (hereinafter referred to as{" "}
              <span className="bold-p">“Eld”, “we”, “us”, “our”</span>) which
              are provided via our mobile website and mobile application linked,
              or otherwise connected thereto (collectively the{" "}
              <span className="bold-p">“Platform”</span>). Data protection is a
              particularly high priority for Eld. The use of the Platform of Eld
              is possible without any indication of personal data; however, if a
              data subject wants to use special services via our Platform,
              processing of personal data may become necessary. If the
              processing of personal data is necessary, and there is no
              statutory basis for such processing, we generally obtain consent
              from the data subject.
            </p>
            <p>
              The processing of personal data, such as the name, address, email
              address, or telephone number of a data subject shall always be in
              line with the General Data Protection Regulation (GDPR), and in
              accordance with the country-specific data protection regulations
              applicable to Eld. Utilizing this data protection declaration, our
              enterprise would like to inform the general public of the nature,
              scope, and purpose of the personal data we collect, use and
              process. Furthermore, data subjects are informed through this data
              protection declaration, of the rights to which they are entitled.
            </p>
            <p>
              As the controller, Eld has implemented numerous technical and
              organizational measures to ensure the complete protection of
              personal data processed through this Platform. However,
              Internet-based data transmissions may, in principle, have security
              gaps, so absolute protection may not be guaranteed. For this
              reason, every data subject is free to transfer personal data to us
              via alternative means, e.g., by telephone.
            </p>
            <h5 className="details-h5">
              2<span className="head-tab">DEFINITIONS</span>
            </h5>
            <p>
              The data protection declaration of Eld is based on the terms used
              by the European legislator for the adoption of the General Data
              Protection Regulation (GDPR). Our data protection declaration
              should be legible and understandable for the general public, as
              well as our customers and business partners. To ensure this, we
              would like to first explain the terminology used. In this data
              protection declaration, we use, among other things, the following
              terms:
            </p>
            <ul className="list-order-5">
              <li className="list-A">
                <span className="list-title space-a">Personal data.</span>{" "}
                Personal data means any information relating to an identified or
                identifiable natural person (“Data Subject”). An identifiable
                natural person is one who can be identified, directly or
                indirectly, in particular by reference to an identifier such as
                a name, an identification number, location data, an online
                identifier or to one or more factors specific to the physical,
                physiological, genetic, mental, economic, cultural, or social
                identity of that natural person.
              </li>
              <li className="list-B">
                <span className="list-title space-a">Data subject.</span> Data
                subject is any identified or identifiable natural person, whose
                personal data is processed by the controller responsible for the
                processing.
              </li>
              <li className="list-C">
                <span className="list-title space-a">Processing.</span>{" "}
                Processing is any operation or set of operations which is
                performed on personal data or on sets of personal data, whether
                or not by automated means, such as collection, recording,
                organization, structuring, storage, adaptation or alteration,
                retrieval, consultation, use, disclosure by transmission,
                dissemination or otherwise making available, alignment or
                combination, restriction, erasure, or destruction.
              </li>
              <li className="list-D">
                <span className="list-title space-a">
                  Restriction of processing.
                </span>{" "}
                Restriction of processing is the marking of stored personal data
                with the aim of limiting their processing in the future.
              </li>
              <li className="list-E">
                <span className="list-title space-a">Profiling.</span> Profiling
                means any form of automated processing of personal data
                consisting of the use of personal data to evaluate certain
                personal aspects relating to a natural person, in particular to
                analyze or predict aspects concerning that natural person’s
                performance at work, economic situation, health, personal
                preferences, interests, reliability, behavior, location or
                movements.
              </li>
              <li className="list-F">
                <span className="list-title space-a">Pseudonymization.</span>{" "}
                Pseudonymization is the processing of personal data in such a
                manner that the personal data can no longer be attributed to a
                specific data subject without the use of additional information,
                provided that such additional information is kept separately and
                is subject to technical and organizational measures to ensure
                that the personal data are not attributed to an identified or
                identifiable natural person.
              </li>
              <li className="list-G">
                <span className="list-title space-a">
                  Controller or controller responsible for the processing.
                </span>{" "}
                Controller or controller responsible for the processing is the
                natural or legal person, public authority, agency, or other body
                which, alone or jointly with others, determines the purposes and
                means of the processing of personal data; where the purposes and
                means of such processing are determined by Union or Member State
                law, the controller or the specific criteria for its nomination
                may be provided for by Union or Member State law.
              </li>
              <li className="list-H">
                <span className="list-title space-a">Processor.</span> Processor
                is a natural or legal person, public authority, agency, or other
                body which processes personal data on behalf of the controller.
              </li>
              <li className="list-I">
                <span className="list-title space-a">Sub-processor.</span> A
                sub-processor is a third party data processor engaged by
                Processor who has or will have access to or process personal
                data from Controller.{" "}
              </li>
              <li className="list-J">
                <span className="list-title space-a">Recipient.</span> Recipient
                is a natural or legal person, public authority, agency, or
                another body, to which the personal data are disclosed, whether
                a third party or not. However, public authorities which may
                receive personal data in the framework of a particular inquiry
                in accordance with Union or Member State law shall not be
                regarded as recipients; the processing of those data by those
                public authorities shall be in compliance with the applicable
                data protection rules according to the purposes of the
                processing.
              </li>
              <li className="list-K">
                <span className="list-title space-a">Third-party.</span>{" "}
                Third-party is a natural or legal person, public authority,
                agency, or body other than the data subject, controller,
                processor, and persons who, under the direct authority of the
                controller or processor, are authorized to process personal
                data. Few Third-party service providers to whom data may be
                transferred are AWS; CloudClusters.io; Postmarks.app; Firebase
                (FCM tokens for notifications); and Google analytics in the
                future.
              </li>
              <li className="list-L">
                <span className="list-title space-a">Term.</span> The Term of
                processing and storing any data is until the Data Subject
                requests to delete the data through an email with the subject
                line “Request for Deletion of Data” to the email address:
                support@eldapp.net. Data Subject is required to share
                identifying information along with the request for deletion.
              </li>
              <li className="list-M">
                <span className="list-title space-a">Consent.</span> Consent of
                the Data Subject is any freely given, specific, informed, and
                unambiguous indication of the data subject’s wishes by which he
                or she, by a statement or by a clear affirmative action,
                signifies agreement to the processing of personal data relating
                to him or her. Such Consent by the Data Subject shall have the
                same effect as a consent received in writing.{" "}
              </li>
            </ul>
            <h5 className="details-h5 head-space">
              <span className="head-3">
                <span className="head-tab"></span>NAME AND ADDRESS OF THE
                CONTROLLER
              </span>
            </h5>
            <p>
              Controller for the General Data Protection Regulation (GDPR),
              other data protection laws applicable in Member states of the
              European Union and other provisions related to data protection is:
            </p>
            <p>
              <span>Eld </span>
              <br></br>
              <span>
                <a href="mailto: support@eldapp.net ">support@eldapp.net </a>
              </span>
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-4">
                <span className="head-tab"></span>COLLECTION OF GENERAL DATA AND
                INFORMATION
              </span>
            </h5>
            <p>
              The Platform of Eld collects a series of general data and
              information when a data subject or automated system calls up the
              Platform. This general data and information are stored by
              Sub-processors. The general data collected may be (1) first and
              last names, (2) email address, (3) date of birth, (4) information
              about events/activities created by you which includes event name,
              description, address, geolocation information, max capacity,
              starting time and ending time, (5) information about groups such
              as group name, description (if public not collected if private),
              address and geolocation information if public and not if private,
              maximum capacity and group creation date if public and, (6) any
              other similar data and information that may be used in the event
              of attacks on our information technology systems. All personal
              information that you provide to us must be true, complete, and
              accurate, and you must notify us of any changes to such personal
              information.
            </p>
            <p>
              When using these general data and information, Eld does not draw
              any conclusions about the data subject. Rather, this information
              is needed to (1) deliver the content, services and functionality
              of our Platform correctly, (2) optimize the content of our
              Platform as well as its advertisement, (3) ensure the long-term
              viability of our information technology systems, (4) for analytics
              purposes, (5) to facilitate account creation and login process,
              (6) request feedback (7) as necessary for basic functionality of
              the Platform and, (8) provide law enforcement authorities with the
              information necessary for criminal prosecution in case of a
              cyber-attack as well as information about illegal acts by users.
              Therefore, Eld analyses anonymously collected data and information
              statistically, with the aim of increasing the data protection and
              data security of our enterprise and to achieve an optimal level of
              protection for the personal data we process. The anonymous data of
              the server log files are stored separately from all personal data
              provided by a data subject.
            </p>
            <p>
              If you have given us access to your location in your device
              settings, when you use your mobile, we will collect information
              about Wi-Fi access points as well as other location information
              about your longitude and latitude and may save your device’s
              coordinates to offer certain features to you. This information
              helps us identify your physical location and we use it to
              personalise the Platform and make it easier for you to interact
              with other users, by enabling the general locality information to
              be displayed to users seeing your profile and showing you the
              profiles of other users who are near you.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-5">
                <span className="head-tab"></span>CONTACT POSSIBILITY VIA THE
                PLATFORM
              </span>
            </h5>
            <p>
              The Platform of Eld contains information that enables a quick
              electronic contact to our enterprise, as well as direct
              communication with us, which also includes a general address of
              the so-called electronic mail (email address). If a data subject
              contacts the controller by email or via a contact form, the
              personal data transmitted by the data subject are automatically
              stored. Such personal data transmitted on a voluntary basis by a
              data subject to the data controller are stored for the purpose of
              processing or contacting the data subject. There is no transfer of
              this personal data to third parties.
            </p>
            <h5 className="details-h5">
              6<span className="head-tab">SECURITY</span>
            </h5>
            <p>
              This Platform uses secure services and secure protocols to process
              data. All collected data is stored on AWS databases which are
              protected by access limitations only server and authorized
              personnel can access the data and it requires secure credentials
              to login which are not shared in any case. The next layer of
              security is that the data is transferred from the server to the
              application over secure https protocol and every request contains
              an identification token. This process involves the converting of
              information or data into a code to prevent unauthorised access.
              This is to ensure that if a request is generated outside the
              application then the data that does not have the token will not be
              shared or transferred to the application.
            </p>
            <p>
              Whilst we do everything within our power to ensure that personal
              data is protected at all times from our Platform, we cannot
              guarantee the security and integrity of the information that has
              been transmitted to our Platform.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-7">
                <span className="head-tab"></span>ROUTINE ERASURE AND BLOCKING
                OF PERSONAL DATA
              </span>
            </h5>
            <p>
              The data controller shall process and store the personal data of
              the data subject only for the period necessary to achieve the
              purpose of storage, or as far as this is granted by the European
              legislator or other legislators in laws or regulations to which
              the controller is subject.
            </p>
            <p>
              If the storage purpose is not applicable, or if a storage period
              prescribed by the European legislator or another competent
              legislator expires, the personal data are routinely blocked or
              erased in accordance with legal requirements.
            </p>
            <h5 className="details-h5 head-space">
              <span className="head-8">
                <span className="head-tab"></span>RIGHTS OF THE DATA SUBJECT
              </span>
            </h5>
            <ul className="list-order-5">
              <li className="list-A">
                <span className="list-title space-a">
                  Right of confirmation.
                </span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator to obtain from the controller the confirmation as
                  to whether or not personal data concerning him or her are
                  being processed. If a data subject wishes to avail himself of
                  this right of confirmation, he or she may, at any time,
                  contact us or another employee of the controller.
                </p>
              </li>
              <li className="list-B">
                <span className="list-title space-a">Right of access.</span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator to obtain from the controller free information
                  about his or her personal data stored at any time and a copy
                  of this information. Furthermore, the European directives and
                  regulations grant the data subject access to the following
                  information: the purposes of the processing; the categories of
                  personal data concerned; the recipients or categories of
                  recipients to whom the personal data have been or will be
                  disclosed, in particular recipients in third countries or
                  international organizations; where possible, the envisaged
                  period for which the personal data will be stored, or, if not
                  possible, the criteria used to determine that period; the
                  existence of the right to request from the controller
                  rectification or erasure of personal data, or restriction of
                  processing of personal data concerning the data subject, or to
                  object to such processing; the existence of the right to file
                  a complaint with a supervisory authority; where the personal
                  data are not collected from the data subject, any available
                  information as to their source; the existence of automated
                  decision-making, including profiling, referred to in Article
                  22(1) and (4) of the GDPR and, at least in those cases,
                  meaningful information about the logic involved, as well as
                  the significance and envisaged consequences of such processing
                  for the data subject.
                  <br></br>
                  Furthermore, the data subject shall have a right to obtain
                  information as to whether personal data are transferred to a
                  third country or an international organization. Where this is
                  the case, the data subject shall have the right to be informed
                  of the appropriate safeguards relating to the transfer.
                  <br></br>
                  If a data subject wishes to avail himself of this right of
                  access, he or she may at any time contact us or another
                  employee of the controller.
                </p>
              </li>
              <li className="list-C">
                <span className="list-title space-a">
                  Right to rectification.
                </span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator to obtain from the controller without undue delay
                  the rectification of inaccurate personal data concerning him
                  or her. Taking into account the purposes of the processing,
                  the data subject shall have the right to have incomplete
                  personal data completed, including by means of providing a
                  supplementary statement.<br></br>If a data subject wishes to
                  exercise this right to rectification, he or she may, at any
                  time, contact us or another employee of the controller.
                </p>
              </li>
              <li className="list-D">
                <span className="list-title space-a">
                  Right to erasure (Right to be forgotten)
                </span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator to obtain from the controller the erasure of
                  personal data concerning him or her without undue delay, and
                  the controller shall have the obligation to erase personal
                  data without undue delay where one of the following grounds
                  applies, as long as the processing is not necessary:
                </p>
                <ul className="list-order-5">
                  <li className="list-a-1">
                    The personal data is no longer necessary in relation to the
                    purposes for which they were collected or otherwise
                    processed.
                  </li>
                  <li className="list-b-1">
                    The data subject withdraws consent to which the processing
                    is based according to point (a) of Article 6(1) of the GDPR,
                    or point (a) of Article 9(2) of the GDPR, and where there is
                    no other legal ground for the processing.
                  </li>
                  <li className="list-c-1">
                    The data subject objects to the processing in accordance
                    with Article 21(1) of the GDPR, and there are no overriding
                    legitimate grounds for the processing, or the data subject
                    objects to the processing pursuant to Article 21(2) of the
                    GDPR.
                  </li>
                  <li className="list-d-1">
                    The personal data have been unlawfully processed.
                  </li>
                  <li className="list-e-1">
                    The personal data must be erased for compliance with a legal
                    obligation in Union or Member State law to which the
                    controller is subject.
                  </li>
                  <li className="list-f-1">
                    The personal data have been collected in relation to the
                    offer of information society services referred to in Article
                    8(1) of the GDPR.
                  </li>
                </ul>
                If one of the aforementioned reasons applies, and a data subject
                wishes to request the erasure of personal data stored by Eld, he
                or she may at any time contact us or another employee of the
                controller. Eld or another employee shall promptly ensure that
                the erasure request is complied with immediately.<br></br>Where
                the controller has made personal data public and is obliged
                pursuant to Article 17(1) to erase the personal data, the
                controller, taking account of available technology and the cost
                of implementation, shall take reasonable steps, including
                technical measures, to inform other controllers processing the
                personal data that the data subject has requested erasure by
                such controllers of any links to, or copy or replication of,
                those personal data, as far as processing is not required. Eld
                or another employee will arrange the necessary measures in
                individual cases.
              </li>
              <li className="list-E">
                <span className="list-title space-a">
                  Right of restriction of processing.
                </span>
                <div>
                  Each data subject shall have the right granted by the European
                  legislator to obtain from the controller restriction of
                  processing where one of the following applies:
                  <ul className="list-order-5">
                    <li className="list-a-1">
                      The accuracy of the personal data is contested by the data
                      subject, for a period enabling the controller to verify
                      the accuracy of the personal data.
                    </li>
                    <li className="list-b-1">
                      The processing is unlawful, and the data subject opposes
                      the erasure of the personal data and requests the
                      restriction of their use instead.
                    </li>
                    <li className="list-c-1">
                      The controller no longer needs the personal data for the
                      processing, but they are required by the data subject for
                      the establishment, exercise, or Defense of legal claims.
                    </li>
                    <li className="list-d-1">
                      The data subject has objected to processing pursuant to
                      Article 21(1) of the GDPR pending the verification whether
                      the legitimate grounds of the controller override those of
                      the data subject.
                    </li>
                  </ul>
                  If one of the conditions as mentioned above is met, and a data
                  subject wishes to request the restriction of the processing of
                  personal data stored by Eld, he or she may at any time contact
                  us or another employee of the controller. Eld or another
                  employee will arrange the restriction of the processing.
                </div>
              </li>
              <li className="list-F">
                <span className="list-title space-a">
                  Right to data portability
                </span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator, to receive the personal data concerning him or
                  her, which was provided to a controller, in a structured,
                  commonly used, and machine-readable format. He or she shall
                  have the right to transmit those data to another controller
                  without hindrance from the controller to which the personal
                  data have been provided. As long as the processing is based on
                  consent pursuant to point (a) of Article 6(1) of the GDPR or
                  point (a) of Article 9(2) of the GDPR, or on a contract
                  pursuant to point (b) of Article 6(1) of the GDPR, and the
                  processing is carried out by automated means, as long as the
                  processing is not necessary for the performance of a task
                  carried out in the public interest or in the exercise of
                  official authority vested in the controller.<br></br>
                  Furthermore, in exercising his or her right to data
                  portability pursuant to Article 20(1) of the GDPR, the data
                  subject shall have the right to have personal data transmitted
                  directly from one controller to another, where technically
                  feasible and when doing so does not adversely affect the
                  rights and freedoms of others.<br></br>In order to assert the
                  right to data portability, the data subject may at any time
                  contact Eld or another employee.
                </p>
              </li>
              <li className="list-G">
                <span className="list-title space-a">Right to object.</span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator to object, on grounds relating to his or her
                  particular situation, at any time, to processing of personal
                  data concerning him or her, which is based on point (e) or (f)
                  of Article 6(1) of the GDPR. This also applies to profiling
                  based on these provisions.<br></br>Eld shall no longer process
                  the personal data in the event of the objection, unless we can
                  demonstrate compelling legitimate grounds for the processing
                  which override the interests, rights, and freedoms of the data
                  subject, or for the establishment, exercise, or defense of
                  legal claims.<br></br>If Eld processes personal data for
                  direct marketing purposes, the data subject shall have the
                  right to object at any time to the processing of personal data
                  concerning him or her for such marketing. This applies to
                  profiling to the extent that it is related to such direct
                  marketing. If the data subject objects to Eld to the
                  processing for direct marketing purposes, Eld will no longer
                  process the personal data for these purposes.<br></br>In
                  addition, the data subject has the right, on grounds relating
                  to his or her particular situation, to object to processing of
                  personal data concerning him or her by Eld for scientific or
                  historical research purposes, or for statistical purposes
                  pursuant to Article 89(1) of the GDPR, unless the processing
                  is necessary for the performance of a task carried out for
                  reasons of public interest.<br></br>In order to exercise the
                  right to object, the data subject may directly contact Eld or
                  another employee. In addition, the data subject is free in the
                  context of the use of information society services, and
                  notwithstanding Directive 2002/58/EC, to use his or her right
                  to object by automated means using technical specifications.
                </p>
              </li>
              <li className="list-H">
                <span className="list-title space-a">
                  Automated individual decision-making, including profiling
                </span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator not to be subject to a decision based solely on
                  automated processing, including profiling, which produces
                  legal effects concerning him or her, or similarly
                  significantly affects him or her, as long as the decision (1)
                  is not is necessary for entering into, or the performance of,
                  a contract between the data subject and a data controller, or
                  (2) is not authorized by Union or Member State law to which
                  the controller is subject and which also lays down suitable
                  measures to safeguard the data subject’s rights and freedoms
                  and legitimate interests, or (3) is not based on the data
                  subject’s explicit consent.<br></br>If the decision (1) is
                  necessary for entering into, or the performance of, a contract
                  between the data subject and a data controller, or (2) it is
                  based on the data subject’s explicit consent, Eld shall
                  implement suitable measures to safeguard the data subject’s
                  rights and freedoms and legitimate interests, at least the
                  right to obtain human intervention on the part of the
                  controller, to express his or her point of view and contest
                  the decision.<br></br>If the data subject wishes to exercise
                  the rights concerning automated individual decision-making, he
                  or she may at any time directly contact Eld or another
                  employee of the controller.
                </p>
              </li>
              <li className="list-I">
                <span className="list-title space-a">
                  Right to withdraw data protection consent
                </span>
                <p>
                  Each data subject shall have the right granted by the European
                  legislator to withdraw his or her consent to the processing of
                  his or her personal data at any time.<br></br>If the data
                  subject wishes to exercise the right to withdraw the consent,
                  he or she may at any time directly contact Eld or another
                  employee of the controller.
                </p>
              </li>
            </ul>
            <h5 className="details-h5 head-space">
              <span className="head-9">
                <span className="head-tab"></span>DATA PROTECTION PROVISIONS
                ABOUT THE USE OF THE SERVICE PROVIDER POSTMARK
              </span>
            </h5>
            <p>
              Our emails are sent by the email service provider Postmark, a
              mailing platform of the U.S. provider Wildbit, LLC, 2400 Market
              Street, Suite 235B, Philadelphia, PA 19103, USA (
              <span className="bold-p">"Postmark"</span>).
            </p>
            <p>
              Postmark can use the data of the recipients in pseudonymized form,
              i.e., the data is not assigned to a specific user, to optimize or
              improve its own services, such as to technically optimize mailing
              and for the presentation of the transactional emails or for
              statistical purposes. However, Postmark does not use the data of
              our email recipients to write to them itself or to transmit the
              data to third parties.
            </p>
            <p>
              We use Postmark to send emails to users. Sending out emails is
              necessary in order to provide services to our users. This may
              include emails with invitations, invoice receipts, important
              notifications about the Platform usage or when users need to
              recover their password.
            </p>
            <p>
              When transferring data outside of the EU into the USA, the
              adequate means of protection is ensured by the European
              Commission’s approved model contract clauses.
            </p>
            <p>
              We use Postmark on the basis of our legitimate interests in
              accordance with Article 6 (1) sentence 1 f) GDPR. If you withdraw
              your consent to receive any newsletter, we instruct Postmark to
              erase your data. You can find Postmark's Privacy Policy at:{" "}
              <span>
                <a href="https://postmarkapp.com/privacy-policy&sa=D&ust=1564540791850000.">
                  https://postmarkapp.com/privacy-policy&sa=D&ust=1564540791850000.
                </a>
              </span>
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-10">
                <span className="head-tab"></span>LEGAL BASIS FOR THE PROCESSING
              </span>
            </h5>
            <p>
              Art. 6(1) lit. a GDPR serves as the legal basis for processing
              operations for which we obtain consent for a specific processing
              purpose. If the processing of personal data is necessary for the
              performance of a contract to which the data subject is party, as
              is the case, for example, when processing operations are necessary
              for the supply of goods or to provide any other service, the
              processing is based on Article 6(1) lit. b GDPR. The same applies
              to such processing operations which are necessary for carrying out
              pre-contractual measures, for example, in the case of inquiries
              concerning our services. If we are subject to a legal obligation
              by which processing of personal data is required, such as for the
              fulfilment of tax obligations, the processing is based on Art.
              6(1) lit. c GDPR. In rare cases, the processing of personal data
              may be necessary to protect the vital interests of the data
              subject or another natural person. Then the processing would be
              based on Art. 6(1) lit. d GDPR. Finally, processing operations
              could be based on Article 6(1) lit. f GDPR. This legal basis is
              used for processing operations which are not covered by any of the
              abovementioned legal grounds, if the processing is necessary for
              the purposes of the legitimate interests pursued by us or by a
              third party, except where such interests are overridden by the
              interests or fundamental rights and freedoms of the data subject
              which require protection of personal data. Such processing
              operations are particularly permissible because they have been
              specifically mentioned by the European legislator. He considered
              that a legitimate interest could be assumed if the data subject is
              a client of the controller (Recital 47 Sentence 2 GDPR).
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-11">
                <span className="head-tab"></span>THE LEGITIMATE INTERESTS
                PURSUED BY THE CONTROLLER OR BY A THIRD PARTY
              </span>
            </h5>
            <p>
              Where the processing of personal data is based on Article 6(1)
              lit. f GDPR our legitimate interest is to carry out our business
              in favor of the well-being of all our employees and the
              shareholders.
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-12">
                <span className="head-tab"></span>PERIOD FOR WHICH THE PERSONAL
                DATA WILL BE STORED
              </span>
            </h5>
            <p>
              The criteria used to determine the period of storage of personal
              data is the respective statutory retention period. After
              expiration of that period, the corresponding data is routinely
              deleted, as long as it is no longer necessary for the fulfilment
              of the contract or the initiation of a contract. If the data
              subject requests for termination or terminates his Eld Account,
              the personal data shall be retained for a period of 1 year from
              date of termination.
            </p>
            <h5 className="details-h5 head-space-1">
              <span className="head-13">
                <span className="head-tab"></span>PROVISION OF PERSONAL DATA AS
                STATUTORY OR CONTRACTUAL REQUIREMENT; REQUIREMENT NECESSARY TO
                ENTER INTO A CONTRACT; OBLIGATION OF THE DATA SUBJECT TO PROVIDE
                THE PERSONAL DATA; POSSIBLE CONSEQUENCES OF FAILURE TO PROVIDE
                SUCH DATA
              </span>
            </h5>
            <p>
              We clarify that the provision of personal data is partly required
              by law (e.g., tax regulations) or can also result from contractual
              provisions (e.g., information on the contractual partner).
              Sometimes it may be necessary to conclude a contract that the data
              subject provides us with personal data, which must subsequently be
              processed by us. The Data Subject is, for example, obliged to
              provide us with Personal Data when we sign a contract with them.
              The non-provision of the Personal Data would have the consequence
              that the contract could not be concluded. Before personal data is
              provided by the data subject, the data subject must contact us. We
              will clarify to the data subject whether the provision of the
              personal data is required by law, contract or is necessary for the
              conclusion of the contract, whether there is an obligation to
              provide the personal data and the consequences of non-provision of
              the personal data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
