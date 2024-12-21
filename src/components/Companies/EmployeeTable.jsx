import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const employeeData = [
    { photo: "", empID: 200369, fname: "Carla", lname: "Dixon", email: "cdixon@example.com", department: "Accounting", status: "Full Time" },
    { photo: "", empID: 200336, fname: "John", lname: "Blanc", email: "jblanc@example.com", department: "Marketing", status: "Weekend" },
    { photo: "", empID: 200588, fname: "Sophia", lname: "Stevenson", email: "sstevenson@example.com", department: "Administration", status: "Part Time" },
    { photo: "", empID: 200114, fname: "Emma", lname: "Morrison", email: "emorrison@example.com", department: "Marketing", status: "Part Time" },
    { photo: "", empID: 200145, fname: "Tom", lname: "DaFoe", email: "tdafoe@example.com", department: "Sales", status: "Part Time" },
    { photo: "", empID: 200889, fname: "Hillary", lname: "Williams", email: "hwilliams@example.com", department: "Sales", status: "Weekend" },
    { photo: "", empID: 200698, fname: "Stewart", lname: "Watson", email: "swatson@example.com", department: "Accounting", status: "Full Time" },
    { photo: "", empID: 200135, fname: "Jane", lname: "Davies", email: "jdavies@example.com", department: "Accounting", status: "Full Time" },
    { photo: "", empID: 200367, fname: "Mark", lname: "Hill", email: "mhill@example.com", department: "Marketing", status: "Part Time" },
    { photo: "", empID: 200115, fname: "Marion", lname: "Anderson", email: "manderson@example.com", department: "Sales", status: "Part Time" },
    { photo: "", empID: 200839, fname: "Constance", lname: "Thompson", email: "cthompson@example.com", department: "Sales", status: "Weekend" },
    { photo: "", empID: 200019, fname: "Leila", lname: "Miller", email: "lmiller@example.com", department: "Marketing", status: "Full Time" },
    { photo: "", empID: 200362, fname: "Arthur", lname: "Collins", email: "acollins@example.com", department: "Marketing", status: "Full Time" },
    { photo: "", empID: 200182, fname: "William", lname: "Farrel", email: "wfarrel@example.com", department: "Administration", status: "Full Time" },
    { photo: "", empID: 200999, fname: "Christine", lname: "Malone", email: "cmalone@example.com", department: "Administration", status: "Full Time" },
    { photo: "", empID: 200001, fname: "Tommy", lname: "Hanon", email: "thanon@example.com", department: "Sales", status: "Full Time" },
    { photo: "", empID: 200277, fname: "Esther", lname: "Jones", email: "ejones@example.com", department: "Accounting", status: "Weekend" },
    { photo: "", empID: 200114, fname: "Angelique", lname: "Smith", email: "asmith@example.com", department: "Accounting", status: "Part Time" },
    { photo: "", empID: 200908, fname: "Ruby", lname: "Jolie", email: "rjolie@example.com", department: "Marketing", status: "Full Time" },
    { photo: "", empID: 200767, fname: "Bo", lname: "Johnson", email: "bjohnson@example.com", department: "Sales", status: "Full Time" },

];

const EmployeeTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchID, setSearchID] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(employeeData);

    const handleNameSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = employeeData.filter(
            (user) => user.fname.toLowerCase().includes(term) || user.lname.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    const handleIDSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchID(term);
        const filtered = employeeData.filter(
            (user) => user.empID.toString().includes(term)
        );
        setFilteredUsers(filtered);
    };

    const handleReset = () => {
        setSearchTerm("");
        setSearchID("");
    }

    return (
        <motion.div
            className='bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex flex-col justify-between mb-6'>
                <div>
                    <h2 className='text-xl font-semibold'>Employee</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='bg-white flex justify-between p-4'>
                    <div className='flex items-start gap-2'>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Filter by name'
                                className='placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 border-2 focus:ring-dusky-purple'
                                value={searchTerm}
                                onChange={handleNameSearch}
                            />
                            <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
                        </div>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Filter by ID'
                                className='placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-dusky-purple border-2'
                                value={searchID}
                                onChange={handleIDSearch}
                            />
                            <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
                        </div>
                    </div>

                    {/*  RESET BUTTON  */}
                    <button
                        className='bg-dusky-purple text-native px-8 py-2 rounded shadow-lg hover:bg-native hover:text-dusky-purple'
                        onClick={handleReset}>Reset
                    </button>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                    <tr className='bg-[#FAFAFA]'>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            Photo
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            Employee ID
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            First Name
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            Last Name
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            Email
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            Department
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                            Status
                        </th>
                    </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-700 bg-white'>
                    {filteredUsers.map((user) => (
                        <motion.tr
                            key={user.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}
                        >
                            <td className='px-3 py-2 whitespace-nowrap'>
                                <div className='flex items-center'>
                                    <div className='flex-shrink-0 h-10 w-10'>
                                        <div
                                            className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                            {user.fname.charAt(0)}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm'>{user.empID}</div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm'>{user.fname}</div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm'>{user.lname}</div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm'>{user.email}</div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <div
                                    className='text-sm'>
                                    {user.department}
                                </div>
                            </td>

                            <td className='px-6 py-4 whitespace-nowrap'>
									<span
                                        className={`px-2 py-0.5 inline-flex text-xs leading-5 font-thin rounded ${
                                            user.status === "Full Time" && "bg-dusky-purple"} ${user.status === "Part Time" && "bg-special-blue text-white"} ${user.status === "Weekend" && "bg-mustard text-white"}`}
                                    >
										{user.status}
									</span>
                            </td>
                        </motion.tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};
export default EmployeeTable;
