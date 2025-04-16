import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiMoreVertical,
} from "react-icons/fi";
import { getAllBookings } from "../api/admin/adminApi";
import { useSelector } from "react-redux";

const AdminBookings = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [allBookings, setAllBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc"); // or "asc"
  const bookingsPerPage = 20;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getAllBookings(token);
        setAllBookings(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter bookings based on search term
  const filteredBookings = allBookings.filter((booking) => {
    const customerName = booking?.user?.name || "";
    const pickupLocation = booking?.pickupLocation || "";
    const dropLocation = booking?.dropLocation || "";

    return (
      customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pickupLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dropLocation.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort logic
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    const getValue = (booking) => {
      if (sortBy === "name") return booking?.user?.name?.toLowerCase() || "";
      if (sortBy === "amount") return booking?.amount || 0;
      if (sortBy === "date") return new Date(booking?.createdAt);
      return "";
    };

    const valA = getValue(a);
    const valB = getValue(b);

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = sortedBookings.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(sortedBookings.length / bookingsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Bookings Management</h1>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          {/* Search */}
          <div className="relative max-w-md w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort Options */}
          <div className="flex gap-3">
            <select
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="name">Customer Name</option>
              <option value="amount">Amount</option>
            </select>
            <select
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Table or Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : currentBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Customer", "Pickup", "Destination", "Date", "Amount", "Status", "Actions"].map((head) => (
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
                {currentBookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                      {booking?.user?.name || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{booking?.pickupLocation || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{booking?.dropLocation || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {formatDate(booking?.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      ₹{booking?.bookingPayment?.toFixed(2) || "0.00"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {booking?.paymentStatus || "Pending"}
                      </span>
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
              No bookings matching your search criteria
            </div>
            <button
              onClick={() => setSearchTerm("")}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Pagination */}
        {!loading && sortedBookings.length > 0 && (
          <div className="flex items-center justify-between mt-6 px-4 py-3 bg-gray-50 text-sm rounded-lg">
            <p className="text-gray-700">
              Showing <span className="font-medium">{indexOfFirstBooking + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(indexOfLastBooking, sortedBookings.length)}
              </span>{" "}
              of <span className="font-medium">{sortedBookings.length}</span> results
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

export default AdminBookings;
