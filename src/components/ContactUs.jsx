import React, { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    msg: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://script.google.com/macros/s/AKfycbxSYT6jWEKQtQ78bvOQ3N7pRXOv2tuN6U4swnfCF3ZWTDLG0dPoQiV2MsQmuGaq6K0d/exec?name=${formData.name}&phone=${formData.phone}&email=${formData.email}&msg=${formData.msg}`)
      
      if (response.status === 200) {
        console.log('Form data submitted successfully!');
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          msg: ''
        });

        // success msg hide
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className='w-[85%]'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black block w-full shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-black block w-full shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-black block w-full shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="msg" className="block text-sm font-medium text-gray-700">msg</label>
          <textarea id="msg" name="msg" value={formData.msg} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-black block w-full shadow-sm"></textarea>
        </div>
        <button type="submit" className="inline-flex items-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="mt-6 p-4 bg-green-500 text-white text-center rounded-md transition-transform duration-300 ease-in-out transform translate-y-0">
          Submitted successfully!
        </div>
      )}
    </div>
  );
}

export default ContactUs;
