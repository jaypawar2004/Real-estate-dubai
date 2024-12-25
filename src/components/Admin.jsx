import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Admin = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [propertyFormData, setPropertyFormData] = useState({
      title: '',
      value: '',
      location: '',
      category: 'Residential',
      type: 'Apartment',
      area: '',
      bedrooms: '',
      photo: null,
    });
    const [blogFormData, setBlogFormData] = useState({
      title: '',
      content: '',
      image: null,
    });
  
    const handlePropertyInputChange = (e) => {
      const { name, value } = e.target;
      setPropertyFormData({ ...propertyFormData, [name]: value });
    };
  
    const handleBlogInputChange = (e) => {
      const { name, value } = e.target;
      setBlogFormData({ ...blogFormData, [name]: value });
    };
  
    const handleFileChange = (e, formType) => {
      if (formType === 'property') {
        setPropertyFormData({ ...propertyFormData, photo: e.target.files[0] });
      } else if (formType === 'blog') {
        setBlogFormData({ ...blogFormData, image: e.target.files[0] });
      }
    };
  
    const handlePropertySubmit = (e) => {
      e.preventDefault();
      console.log('Property Form submitted:', propertyFormData);
    };
  
    const handleBlogSubmit = (e) => {
      e.preventDefault();
      console.log('Blog Form submitted:', blogFormData);
    };
    const users = [
        { id: 1, name: 'John Doe',  email: 'john.doe@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Doe',  email: 'jane.doe@example.com', phone: '987-654-3210' },
        { id: 3, name: 'Bob Smith',  email: 'bob.smith@example.com', phone: '456-789-1230' },
        { id: 4, name: 'Alice Smith',  email: 'alice.smith@example.com', phone: '654-321-0987' },
        { id: 5, name: 'Joe Johnson',  email: 'joe.johnson@example.com', phone: '321-654-9870' },
        { id: 6, name: 'Chris Martin',  email: 'chris.martin@example.com', phone: '111-222-3333' },
        { id: 7, name: 'Emma Watson',  email: 'emma.watson@example.com', phone: '444-555-6666' },
        { id: 8, name: 'Michael Brown',  email: 'michael.brown@example.com', phone: '777-888-9999' },
        { id: 9, name: 'Sophia Turner',  email: 'sophia.turner@example.com', phone: '000-123-4567' },
        { id: 10, name: 'Olivia Johnson',  email: 'olivia.johnson@example.com', phone: '890-123-4567' },
      ];
      const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Properties Sold',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'New Listings',
            data: [8, 11, 13, 15, 22, 8],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      };
    
      const pieData = {
        labels: ['Residential', 'Commercial', 'Off-Plane'],
        datasets: [
          {
            label: 'Property Types',
            data: [55, 30, 15],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
          },
        ],
      };
      const [showPropertyForm, setShowPropertyForm] = useState(false);

      const handleToggleForm = () => {
        setShowPropertyForm((prev) => !prev);
      };
      
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 5;
    
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    
      const totalPages = Math.ceil(users.length / usersPerPage);
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
  
    return (
        <div className="main w-full h-screen bg-zinc-900 flex flex-col md:flex-row">
       
        {/* <!-- Sidebar --> */}

        <div className="sidebar w-full md:w-[30vw] bg-zinc-700 p-3">
          <div className="flex flex-col items-center gap-3">
            <div className="admindp h-24 w-24 md:h-40 md:w-40  rounded-full">
                <img className='w-full h-full rounded-full' src="/src/assets/admin-icon-vector.jpg" alt="" />
            </div>
            <h3 className="text-white text-xl md:text-3xl font-semibold">Admin</h3>
            <div className="w-full h-1 bg-white"></div>
          </div>
          <h3
            onClick={() => setActiveSection('home')}
            className="text-lg md:text-2xl text-white font-medium mt-3 ml-2 hover:bg-blue-500 hover:p-1 cursor-pointer"
          >
            Home
          </h3>
          <h3
            onClick={() => setActiveSection('users')}
            className="text-lg md:text-2xl text-white font-medium mt-3 ml-2 hover:bg-blue-500 hover:p-1 cursor-pointer"
          >
            Users
          </h3>
          <h3
            onClick={() => setActiveSection('properties')}
            className="text-lg md:text-2xl text-white font-medium mt-3 ml-2 hover:bg-blue-500 hover:p-1 cursor-pointer"
          >
            Properties
          </h3>
          <h3
            onClick={() => setActiveSection('blogs')}
            className="text-lg md:text-2xl text-white font-medium mt-3 ml-2 hover:bg-blue-500 hover:p-1 cursor-pointer"
          >
            Blogs
          </h3>
          <h3 className="text-lg md:text-2xl text-white font-medium mt-6 md:mt-[10vw] ml-2 hover:bg-blue-500 hover:p-1 cursor-pointer">
            LogOut
          </h3>
        </div>
      
        {/* <!-- Main Content --> */}

        <div className="p-4 md:p-8 bg-gray-200 flex-1">
          {activeSection === 'users' && (
            <div className="bg-white shadow-md rounded-md p-4 max-w-full md:mx-auto">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Users</h2>
              <ul>
                {currentUsers.map((user) => (
                  <li key={user.id} className="flex flex-col py-4 border-b border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-sm md:text-lg font-semibold mr-4">{user.id}</span>
                        <img
                          src={`https://via.placeholder.com/48?text=${user.name.charAt(0)}`}
                          alt="User Avatar"
                          className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-4"
                        />
                        <span className="text-gray-800 font-semibold text-sm md:text-base">{user.name}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Email: {user.email}</p>
                      <p>Phone: {user.phone}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
      

            {/* <div>
      <button
        onClick={handleToggleForm}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {showPropertyForm ? "Hide Form" : "Add Property"}
      </button>

      {showPropertyForm && (
        <form
          onSubmit={handlePropertySubmit}
          className="bg-gray-800 relative text-white p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-[50vw] mx-auto mt-4"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-4">Add Property</h2>

          <div className="mb-4">
            <label className="block mb-2">Property Title</label>
            <input
              type="text"
              name="title"
              value={propertyFormData.title}
              onChange={handlePropertyInputChange}
              className="w-full p-2 rounded text-black border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Property Value (AED)</label>
            <input
              type="number"
              name="value"
              value={propertyFormData.value}
              onChange={handlePropertyInputChange}
              className="w-full p-2 rounded text-black border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={propertyFormData.location}
              onChange={handlePropertyInputChange}
              className="w-full p-2 rounded text-black border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select
              name="category"
              value={propertyFormData.category}
              onChange={handlePropertyInputChange}
              className="w-full p-2 text-black rounded border border-gray-400"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Off-Plane">Off-Plane</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Type</label>
            <select
              name="type"
              value={propertyFormData.type}
              onChange={handlePropertyInputChange}
              className="w-full p-2 text-black rounded border border-gray-400"
            >
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Office">Office</option>
            </select>
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Area (in sqft)</label>
              <input
                type="number"
                name="area"
                value={propertyFormData.area}
                onChange={handlePropertyInputChange}
                className="w-full p-2 text-black rounded border border-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2">No. of Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={propertyFormData.bedrooms}
                onChange={handlePropertyInputChange}
                className="w-full p-2 rounded text-black border border-gray-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "property")}
              className="w-full p-2 rounded border border-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div> */}
    {activeSection === 'properties' && (
  <div>
    <button
      onClick={handleToggleForm}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      {showPropertyForm ? "Hide Form" : "Add Property"}
    </button>

    {showPropertyForm && (
      <form
        onSubmit={handlePropertySubmit}
        className="bg-gray-800 relative text-white p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-[50vw] mx-auto mt-4"
      >
        <h2 className="text-lg md:text-2xl font-bold mb-4">Add Property</h2>

        <div className="mb-4">
          <label className="block mb-2">Property Title</label>
          <input
            type="text"
            name="title"
            value={propertyFormData.title}
            onChange={handlePropertyInputChange}
            className="w-full p-2 rounded text-black border border-gray-400"
            placeholder='Property Title'
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Property Value (AED)</label>
          <input
            type="number"
            name="value"
            value={propertyFormData.value}
            onChange={handlePropertyInputChange}
            className="w-full p-2 rounded text-black border border-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={propertyFormData.location}
            onChange={handlePropertyInputChange}
            className="w-full p-2 rounded text-black border border-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={propertyFormData.category}
            onChange={handlePropertyInputChange}
            className="w-full p-2 text-black rounded border border-gray-400"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Off-Plane">Off-Plane</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Type</label>
          <select
            name="type"
            value={propertyFormData.type}
            onChange={handlePropertyInputChange}
            className="w-full p-2 text-black rounded border border-gray-400"
          >
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Office">Office</option>
          </select>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Area (in sqft)</label>
            <input
              type="number"
              name="area"
              value={propertyFormData.area}
              onChange={handlePropertyInputChange}
              className="w-full p-2 text-black rounded border border-gray-400"
            />
          </div>
          <div>
            <label className="block mb-2">No. of Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={propertyFormData.bedrooms}
              onChange={handlePropertyInputChange}
              className="w-full p-2 rounded text-black border border-gray-400"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Upload Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "property")}
            className="w-full p-2 rounded border border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
        >
          Submit
        </button>
      </form>
    )}
  </div>
)}


      {/* Homes */}

          {activeSection === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg md:text-xl font-bold mb-4">Property Types Distribution</h2>
                <Pie data={pieData} />
              </div>
            </div>
          )}

      {/* Blogs */}
          
          {activeSection === 'blogs' && (
            <form
              onSubmit={handleBlogSubmit}
              className="bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-[70vw] mx-auto"
            >
              <h2 className="text-lg md:text-2xl font-bold mb-4">Add Blog</h2>
              <div className="mb-4">
                <label className="block mb-2">Blog Title</label>
                <input
                  type="text"
                  name="title"
                  value={blogFormData.title}
                  onChange={handleBlogInputChange}
                  className="w-full p-2 rounded text-black border border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Content</label>
                <textarea
                  name="content"
                  value={blogFormData.content}
                  onChange={handleBlogInputChange}
                  className="w-full p-2 rounded text-black border border-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'blog')}
                  className="w-full p-2 rounded border border-gray-400"
                />
              </div>

              {/* Submint button */}

              <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      
    );
  };
  
  export default Admin;
  