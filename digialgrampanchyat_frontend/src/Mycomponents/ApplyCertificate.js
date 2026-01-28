import React from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate, Outlet } from "react-router-dom";


const ApplyCertificate = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Apply for Services / Certificates
      </h2>

      <div className="row">

        {/* Birth Certificate */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Birth Certificate</h5>
              <p className="card-text">
                Apply for new birth certificate or get duplicate.
              </p>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/apply-certificate/birth")}
              >
                Apply Now →
              </button>
            </div>
          </div>
        </div>

        {/* Water Connection */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Water Connection</h5>
              <p className="card-text">
                Apply for new water connection for your home.
              </p>
              <button className="btn btn-outline-primary">
                Apply Now →
              </button>
            </div>
          </div>
        </div>

        {/* Property Tax */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Property Tax</h5>
              <p className="card-text">
                Check and pay your property tax online.
              </p>
              <button className="btn btn-outline-primary">
                Apply Now →
              </button>
            </div>
          </div>
        </div>

        {/* Ration Card */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Ration Card</h5>
              <p className="card-text">
                Apply for new ration card or update existing.
              </p>
              <button className="btn btn-outline-primary">
                Apply Now →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
{/* <Outlet /> */}


export default ApplyCertificate;
