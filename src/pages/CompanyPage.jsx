import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SecondarySidebar from "../components/common/SecondarySidebar";

import EmployeeTable from "../components/Companies/EmployeeTable";
import Department from "../components/Companies/Department";
import Designation from "../components/Companies/Designation";
import ExitDetails from "../components/Companies/ExitDetails";
import OrganizationTree from "../components/Companies/OrganizationTree";

const companySidebar = [
  { title: "Employee", href: "/companies" },
  { title: "Department", href: "/companies/department" },
  { title: "Designation", href: "/companies/designation" },
  { title: "Exit Details", href: "/companies/exitdetails" },
  { title: "Organization Tree", href: "/companies/org-tree" },
];

export const CompanyPage = () => {
  // THIS ENSURES THAT COMPANIES IS THE DEFAULT ONE SELECTED
  const [selectedMenu, setSelectedMenu] = useState("/companies");
  const navigate = useNavigate();

  const handleMenuClick = (href) => {
    setSelectedMenu(href);
    navigate(href);
  };

  return (
    <div className="flex">
      <SecondarySidebar
        links={companySidebar}
        selected={selectedMenu}
        onMenuClick={handleMenuClick}
      />
      <div className="w-5/6">
        <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/department" element={<Department />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/exitdetails" element={<ExitDetails />} />
          <Route path="/org-tree" element={<OrganizationTree />} />
          {/* This will help the detailing */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};
//change
