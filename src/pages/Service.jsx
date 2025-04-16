import React from 'react';
import authentication from "../assets/authantication.png";
import intercty from "../assets/intercity.jpg";
import corparate from "../assets/corprate.jpg";
import frightDelivary from "../assets/frightDelivary.jpg";
import driverInfo from "../assets/driverInfo.jpg";
import payment from "../assets/payment.jpg";
import contact from "../assets/contact.png";
import admin from "../assets/admin.png";
import vehiclaServices from "../assets/vehiclaServices.png";

const services = [
  {
    title: "Authentication",
    description: "Our authentication system is designed to ensure the highest level of security and user convenience. It includes robust signup and login functionalities, using encrypted password handling with technologies like bcrypt and secure token-based session management through JWT (JSON Web Tokens). This ensures that all user data remains protected at all times. Users can register and log in seamlessly, and once authenticated, they gain access to key features such as vehicle booking, ride history, and payment options. We also implement refresh token mechanisms to maintain long-term sessions without compromising on security. Our system prevents unauthorized access, supports role-based access control (admin vs user), and ensures that all user actions are securely validated and logged. Whether you're a rider booking a trip or an admin managing the platform, our authentication system provides a reliable gateway for a safe and personalized experience.",
    image: authentication
  },  
  {
    title: "All Transport Vehicles",
    description: `We offer a wide range of transport vehicle options to cater to every travel and delivery need:
    
  • 🚲 **Two-Wheeler Rides** – Fast, economical, and ideal for solo travelers navigating through city traffic and narrow lanes.
  
  • 🛺 **Three-Wheeler Auto** – A reliable and affordable option for short city commutes, suitable for small families and daily use.
  
  • 🚚 **Truck Services** – Perfect for moving goods, packages, or handling logistics. Available in multiple capacities, from mini trucks to heavy-duty transport.
  
  Whether you're booking a quick ride or need to transport cargo, our platform ensures comfort, safety, and affordability with every option.`,
    image: vehiclaServices
  },  
  {
    title: "Intercity Travel",
    description: "Comfortable travel options between cities with professional drivers and clean vehicles.",
    image: intercty,
  },
  {
    title: "Corporate Travel",
    description: "Tailored ride solutions for companies, including employee pickup/drop and logistics.",
    image: corparate,
  },
  {
    title: "Freight & Delivery",
    description: "Book vans and trucks for delivery of packages or goods – both B2B and B2C options.",
    image: frightDelivary
  },
  {
    title: "Driver Information",
    description: "Once a ride is booked, users are provided with complete driver details including name, profile photo, contact number, vehicle number, and vehicle type. Each driver on our platform is professionally verified and trained to ensure a safe and smooth journey. Users can view driver ratings and reviews based on past trips, helping them make informed decisions and feel confident in their ride experience. Our rating system allows passengers to leave feedback after each trip, promoting service quality and accountability among drivers.",
    image: driverInfo
  },
  {
    title: "Payment Information",
    description: "Our payment system is transparent, secure, and user-friendly. After booking a ride, users can view the complete payment breakdown including the base fare, GST, applicable taxes, and any additional charges. We ensure there are no hidden fees, and all charges are clearly displayed before proceeding. Our platform offers rides at competitive and affordable prices, making daily commuting and logistics cost-effective. Users can pay using multiple options such as UPI, credit/debit cards, and digital wallets. Once the payment is successful, a detailed receipt is provided for records. Whether you're booking a two-wheeler for quick travel or a truck for cargo delivery, we ensure a fair and budget-friendly pricing model for all.",
    image: payment
  },
  {
    title: "Ride Cancel",
    description: "We understand that plans can change, so we offer a hassle-free ride cancellation policy. Users can cancel their ride at any time before pickup without incurring any cancellation charges. Whether it’s a change in schedule or an emergency, we ensure that you’re not penalized for canceling a booking. Our goal is to make your experience stress-free, and that's why we provide 100% free cancellations with no hidden fees. Just click on the 'Cancel Ride' button, and your booking will be updated instantly with a confirmation message.",
    image: intercty
  },
  {
    title: "Contact Information",
    description: "Need help or have a question? Our Contact Info page is designed to make it easy for users to connect directly with our support team or admin. Whether it’s about booking issues, feedback, driver concerns, or general inquiries, users can quickly reach out through our built-in contact form, email support, or helpline number. We’re committed to providing timely responses and helpful assistance to ensure a smooth experience on our platform. Communication is just a click away—your convenience and satisfaction are our top priority.",
    image: contact
  },
  {
    title: "Admin Console",
    description: "The Admin Console is a powerful dashboard designed to help administrators manage and monitor the platform efficiently. Admins have full access to view and manage all user information, including profiles and activity. They can also oversee all ride bookings, track payment statuses, and review cancellation records. Additionally, the console includes a dedicated section for contact submissions, enabling admins to respond to user queries or issues promptly. With advanced filtering options, admins can sort data in ascending or descending order, search using keywords, and gain deeper insights into user behavior and service performance. This centralized control panel ensures transparency, quick actions, and smooth management of the transport system.",
    image: admin
  }
];

const Service = () => {
  return (
<div className="min-h-screen bg-gray-100 py-12 px-4">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Our Services</h1>

    {services.map((service, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">{service.title}</h2>
          <p className="text-gray-700 text-base">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Service;
