import {Route, Routes} from 'react-router-dom'
import SecondarySidebar from "../components/common/SecondarySidebar";


import EmployeeTable from "../components/Companies/EmployeeTable";
import Department from "../components/Companies/Department";
import Designation from "../components/Companies/Designation";
import ExitDetails from "../components/Companies/ExitDetails";
import OrganizationTree from "../components/Companies/OrganizationTree";


const companySidebar = [
    {title: "Employee", href: '/companies'},
    {title: "Department", href:"/companies/department"},
    {title: "Designation", href:"/companies/designation"},
    {title: "Exit Details", href:"/companies/exitdetails"},
    {title: "Organization Tree", href:"/companies/org-tree"},
]

export const CompanyPage = () => {
    return (
        <div className='flex'>
            <SecondarySidebar name={companySidebar}/>
            <div className='w-5/6'>
                <Routes>
                    <Route path="/" element={ <EmployeeTable />} />
                    <Route path='/department' element={ <Department />} />
                    <Route path='/designation' element={<Designation />}/>
                    <Route path='/exitdetails' element={<ExitDetails />}/>
                    <Route path='/org-tree' element={<OrganizationTree />}/>
                </Routes>
            </div>


        </div>
    )
}