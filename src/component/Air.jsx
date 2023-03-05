import React from "react";
import "./air.css";
import Photo from "../assert/Ellipse.svg";
import divider from "../assert/divider.svg";
import pdf from "../assert/path.svg";
import detailss from "../assert/detailss.svg";
import paths from "../assert/noteee.svg";

const Air = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="left col col-3">
          <div className="profile">
            <div>
              <img src={Photo} alt="icon" />
              <p className="name">Diane Cooper</p>
              <p className="email">diane.cooper@example.com</p>
            </div>
          </div>
          <div className="time">
            <div>
              <p className="num">15</p> <p className="num_name">Past</p>
            </div>
            <div>
              <img src={divider} alt="icon" />
            </div>
            <div>
              <p className="num">02</p> <p className="num_name">Upcoming</p>
            </div>
          </div>
          <div className="button_left">
            <button type="button" className="btn btn-outline-secondary ">
              Send Message
            </button>
          </div>
          <div className="files">
            <div className="text"> Files / Documents</div> <br />
            <div className="tab_pdf">
              <div className="pdf">
                {" "}
                <img src={pdf} width="13.5" height="15.75" alt="icon" /> {""}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Check Up Results.pdf
              </div>
              <div className="pdf">
                {" "}
                <img src={pdf} width="13.5" height="15.75" alt="icon" /> {""}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Check Up Results.pdf
              </div>
              <div className="pdf">
                {" "}
                <img src={pdf} width="13.5" height="15.75" alt="icon" /> {""}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Medical Prescription.pdf
              </div>
              <div className="pdf">
                {" "}
                <img src={pdf} width="13.5" height="15.75" alt="icon" /> {""}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dental X-Ray Result.pdf
              </div>
            </div>
          </div>
        </div>
        <div className="right col-9">
          <div className="container">
            <div className="row">
              <div className="details col">
                <p className="num_name_detail">Gender</p>
                <p className="num_detail">Female</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
              <div className="col">
                <p className="num_name_detail">Birthday</p>
                <p className="num_detail">Feb 24th, 1997</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
              <div className="col">
                <p className="num_name_detail">Phone Number</p>
                <p className="num_detail">(239) 555 -0108</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
              <div className="col">
                <p className="num_name_detail">Registered Date</p>
                <p className="num_detail">Feb 24th, 1997</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="num_name_detail">Street Address</p>
                <p className="num_detail">JL. Diponegoro No. 21</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
              <div className="col">
                <p className="num_name_detail">City</p>
                <p className="num_detail">Cilacap</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
              <div className="col">
                <p className="num_name_detail">Zip Code</p>
                <p className="num_detail">655849</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
              <div className="col">
                <p className="num_name_detail">Member Status</p>
                <p className="num_detail">Active Member</p>
                <img src={detailss} alt="icon" className="hr" />
              </div>
            </div>
            <div className="tab container">
              <div className="tab_bar ">
                <button type="button" className="btn_tab btn-outline-light ">
                  Upcoming Appointments
                </button>
              </div>
              <div className="tab_bar ">
                <button type="button" className="btn_tab btn-outline-light ">
                  Past Appointments
                </button>
              </div>
              <div className="tab_bar ">
                <button type="button" className="btn_tab btn-outline-light ">
                  Medical Records
                </button>
              </div>
            </div>
            <div className="container_treatment">
              <div className="treat_header">
                <div className="root">Root Canal Treatment</div>
                <div className="show">Show Previous Treatments</div>
              </div>
              <hr className="hr_treat" />
              <br />
              <div className="treat_details">
                <div className="one">
                  <div>
                    <p className="one_1">26 Nov ‘19</p>{" "}
                    <p className="one_1_1">09.00 - 10.00</p>
                  </div>
                  <div className="treat_div">
                    <img src={divider} alt="icon" />
                  </div>
                  <div>
                    <p className="one_2">Treatment</p>{" "}
                    <p className="one_2_1">Open Access</p>
                  </div>
                  <div className="treat_div">
                    <img src={divider} alt="icon" />
                  </div>
                  <div>
                    <p className="one_2">Dentist</p>{" "}
                    <p className="one_2_1">Drg. Adam H.</p>
                  </div>
                  <div>
                    <p className="one_2">Nurse</p>{" "}
                    <p className="one_2_1">Jessicamila</p>
                  </div>
                  <div className="not">
                    <img src={paths} width="13.5" height="15.75" alt="icon" />{" "}
                    Note
                  </div>
                </div>{" "}
                <br />
                <br />
                <div className="one">
                  <div>
                    <p className="one_1">26 Nov ‘19</p>{" "}
                    <p className="one_1_1">09.00 - 10.00</p>
                  </div>
                  <div className="treat_div">
                    <img src={divider} alt="icon" />
                  </div>
                  <div>
                    <p className="one_2">Treatment</p>{" "}
                    <p className="one_2_1">Open Access</p>
                  </div>
                  <div className="treat_div">
                    <img src={divider} alt="icon" />
                  </div>
                  <div>
                    <p className="one_2">Dentist</p>{" "}
                    <p className="one_2_1">Drg. Adam H.</p>
                  </div>
                  <div>
                    <p className="one_2">Nurse</p>{" "}
                    <p className="one_2_1">Jessicamila</p>
                  </div>
                  <div className="not">
                    <img src={paths} width="13.5" height="15.75" alt="icon" />{" "}
                    Note
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Air;
