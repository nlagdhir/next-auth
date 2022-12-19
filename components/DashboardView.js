import React from "react";
import Footer from "./layout/Footer";

function DashboardView() {
  return (
    <>
      <div className="content-inner w-100">
        <header className="bg-white shadow-sm px-4 py-3 z-index-20">
          <div className="container-fluid px-0">
            <h2 className="mb-0 p-1">Dashboard</h2>
          </div>
        </header>
        <section className="pb-0">
          <div className="container-fluid">
            <div className="card mb-0">
              <div className="card-body">
                <div className="row gx-5 bg-white">
                  <div className="col-xl-3 col-sm-6 py-4 border-lg-end border-gray-200">
                    <div className="d-flex align-items-center">
                      <div className="mx-3">
                        <h6 className="h4 fw-light text-gray-600 mb-3">
                          New
                          <br />
                          Clients
                        </h6>
                        <div className="progress" style={{ height : "4px"  }}>
                            <div
                            className="progress-bar bg-violet"
                            role="progressbar"
                            style={{ width : "25%", height : "4px"}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="number">
                        <strong className="text-lg">25</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 py-4 border-lg-end border-gray-200">
                    <div className="d-flex align-items-center">
                      <div className="mx-3">
                        <h6 className="h4 fw-light text-gray-600 mb-3">
                          Work
                          <br />
                          Orders
                        </h6>
                        <div className="progress" style={{ height : "4px"}}>
                          <div
                            className="progress-bar bg-red"
                            role="progressbar"
                            style={{ width : "70%", height : "4px"}}
                           
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="number">
                        <strong className="text-lg">70</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 py-4 border-lg-end border-gray-200">
                    <div className="d-flex align-items-center">
                      <div className="mx-3">
                        <h6 className="h4 fw-light text-gray-600 mb-3">
                          New
                          <br />
                          Invoices
                        </h6>
                        <div className="progress" style={{ height : "4px"}}>
                          <div
                            className="progress-bar bg-green"
                            role="progressbar"
                            style={{ width : "40%", height : "4px"}}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="number">
                        <strong className="text-lg">40</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 py-4">
                    <div className="d-flex align-items-center">
                      <div className="mx-3">
                        <h6 className="h4 fw-light text-gray-600 mb-3">
                          Open
                          <br />
                          Cases
                        </h6>
                        <div className="progress" style={{ height : "4px"}}>
                          <div
                            className="progress-bar bg-orange"
                            role="progressbar"
                            style={{ width : "50%", height : "4px"}}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="number">
                        <strong className="text-lg">50</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Page Footer */}
        <Footer />
      </div>
    </>
  );
}

export default DashboardView;
