import React from "react";
import DashboardView from "../DashboardView";
import Avtar1 from "../../public/assets/img/avatar-1.jpg";

function Sidebar() {
  return (
    <>
      <div class="page-content d-flex align-items-stretch">
        <nav class="side-navbar z-index-40">
          <div class="sidebar-header d-flex align-items-center py-4 px-3">
            <img
              class="avatar shadow-0 img-fluid rounded-circle"
              src={Avtar1.src}
              alt="..."
            />
            <div class="ms-3 title">
              <h1 class="h4 mb-2">Mark Stephen</h1>
              <p class="text-sm text-gray-500 fw-light mb-0 lh-1">
                Web Designer
              </p>
            </div>
          </div>
          <span class="text-uppercase text-gray-400 text-xs letter-spacing-0 mx-3 px-2 heading">
            Main
          </span>
          <ul class="list-unstyled py-4">
            <li class="sidebar-item">
              <a class="sidebar-link" href="index.html">
                Home{" "}
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="tables.html">
                Tables{" "}
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="charts.html">
                Charts{" "}
              </a>
            </li>
            <li class="sidebar-item active">
              <a class="sidebar-link" href="forms.html">
                Forms{" "}
              </a>
            </li>
           
          </ul>
         
        </nav>
        <DashboardView />
      </div>
    </>
  );
}

export default Sidebar;
