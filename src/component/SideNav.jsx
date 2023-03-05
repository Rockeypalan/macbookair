import React from "react";
import "./Nav.css";
import Vector from "../assert/Vector.svg";
import New from "../assert/new.svg";
import Patient from "../assert/patient.svg";
import Folder from "../assert/folder.svg";
import Uplode from "../assert/uplode.svg";
import Report from "../assert/report.svg";
import Setting from "../assert/setting.svg";
import Logout from "../assert/logout.svg";

const SideNav = () => {
  return (
    <div className="container-nav">
      <div className="col align-items-start">
        <div className="col-nav" id="vector">
          <div>
            <img src={Vector} alt="icon" width="49.21px" height="24.6px" />
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={New} alt="icon" />
            <p>NEW</p>
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={Patient} alt="icon" />
            <p>PATIENT</p>
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={Folder} alt="icon" />
            <p>FOLDER</p>
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={Uplode} alt="icon" />
            <p>UPLODE</p>
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={Report} alt="icon" />
            <p>REPORT</p>
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={Setting} alt="icon" />
            <p>SETTING</p>
          </div>
        </div>
        <div className="col-nav">
          <div>
            <img src={Logout} alt="icon" />
            <p>LOGOUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
// sx={{ bgcolor: "#053C6D", width: 24, height: 24 }}
