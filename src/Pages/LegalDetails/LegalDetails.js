import React from "react";
import { useLocation } from "react-router-dom";
import TermsOfService from "../../Components/TermsOfService";
import PrivacyPolicy from "../../Components/PrivacyPolicy";
import DataProsAg from "../../Components/DataProsAg";
import DissLimLi from "../../Components/DissLimLi";
import CodeOfConduct from "../../Components/CodeOfConduct";
import AcceptableUse from "../../Components/AcceptableUse";

const LegalDetails = () => {
  const path = useLocation();
  const mypath = path.pathname.split("/")[2];
  return (
    <div>
      {mypath === "Terms Of Service" && <TermsOfService />}
      {mypath === "Privacy Policy" && <PrivacyPolicy />}
      {mypath === "Data Processing Agreement" && <DataProsAg />}
      {mypath === "Disclaimers and Limitation of Liability" && <DissLimLi />}
      {mypath === "Code of Conduct" && <CodeOfConduct />}
      {mypath === "Acceptable Use" && <AcceptableUse />}
    </div>
  );
};

export default LegalDetails;
