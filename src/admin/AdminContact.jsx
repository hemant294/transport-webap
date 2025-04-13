import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiMoreVertical,
} from "react-icons/fi";
import { getAllContacts } from "../api/admin/adminApi";
import { useSelector } from "react-redux";

const AdminContact = () => {
  const token = useSelector((state) => state?.auth?.token);

  const [allContacts, setAllContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getAllContacts(token);
        setAllContacts(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [token]);

  const filteredContacts = allContacts.filter((contact) => {
    const matchesSearch =
      contact?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact?.message?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus ? contact?.status === filterStatus : true;

    return matchesSearch && matchesStatus;
  });

  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Contact Messages</h1>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : currentContacts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Name', 'Email', 'Message', 'Actions'].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentContacts.map((contact) => (
                  <tr key={contact?._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                      {contact?.name || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {contact?.email || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {contact?.message || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-gray-500 hover:text-gray-700">
                        <FiMoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-4">
              No contacts matching your search criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterStatus("");
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {!loading && filteredContacts.length > 0 && (
          <div className="flex items-center justify-between mt-6 px-4 py-3 bg-gray-50 text-sm rounded-lg">
            <p className="text-gray-700">
              Showing <span className="font-medium">{indexOfFirst + 1}</span> to{' '}
              <span className="font-medium">{Math.min(indexOfLast, filteredContacts.length)}</span> of{' '}
              <span className="font-medium">{filteredContacts.length}</span> results
            </p>
            <div className="flex space-x-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-2 py-1 border rounded-l ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FiChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 border rounded-r ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContact;
