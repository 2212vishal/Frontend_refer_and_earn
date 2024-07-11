import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RefferForm = ({ setShowCreateForm }) => {
  const [formData, setFormData] = useState({
    referName: '',
    referEmail: '',
    referWorkid: '',
    refereeName: '',
    refereeEmail: '',
    description: '',
    resumepdf: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('referName', formData.referName);
    formDataToSend.append('referEmail', formData.referEmail);
    formDataToSend.append('referWorkId', formData.referWorkid);
    formDataToSend.append('refereeName', formData.refereeName);
    formDataToSend.append('refereeEmail', formData.refereeEmail);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('resume', formData.resumepdf);

    console.log(formDataToSend);

    const token = localStorage.getItem('token');
    console.log(token);

    try {
      const response = await fetch('https://backend-refer-and-earn.onrender.com/api/referrals/refer', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        toast.success("Referral submitted successfully!");
        console.log("Referral submitted successfully:", data);
      } else {
        const errorData = await response.json();
        toast.error("Referral submission failed: " + errorData.error);
        console.error("Referral submission failed:", errorData.error);
      }
    } catch (error) {
      toast.error("Error during referral submission: " + error.message);
      console.error("Error during referral submission:", error);
    }

    setFormData({
      referName: '',
      referEmail: '',
      referWorkid: '',
      refereeName: '',
      refereeEmail: '',
      description: '',
      resumepdf: null,
    });
    setShowCreateForm(false);
  };

  const handleCancel = () => {
    setShowCreateForm(false);
  };

  return (
    <div className="flex flex-col gap-2 bg-lightgray border rounded p-2">
      <ToastContainer />
      <div className='flex justify-between items-center p-3'>
        <h3 className='items-center'>Refer a Person:</h3>
        <button onClick={handleCancel}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <form className='flex flex-col gap-2 p-2' onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          <label htmlFor="referName">Referee Name:</label>
          <input
            type="text"
            id="referName"
            name="referName"
            value={formData.referName}
            onChange={handleChange}
            required
            className='border rounded p-1'
          />
        </div>
        
        <div className='flex justify-between'>
          <label htmlFor="referEmail">Referee Email:</label>
          <input
            type="email"
            id="referEmail"
            name="referEmail"
            value={formData.referEmail}
            onChange={handleChange}
            required
            className='border rounded p-1'
          />
        </div>
        
        <div className='flex justify-between'>
          <label htmlFor="referWorkid">Referee WorkID:</label>
          <input
            type="text"
            id="referWorkid"
            name="referWorkid"
            value={formData.referWorkid}
            onChange={handleChange}
            required
            className='border rounded p-1'
          />
        </div>

        <div className='flex justify-between'>
          <label htmlFor="refereeName">Refer Name:</label>
          <input
            type="text"
            id="refereeName"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            required
            className='border rounded p-1'
          />
        </div>

        <div className='flex justify-between'>
          <label htmlFor="refereeEmail">Refer Email:</label>
          <input
            type="email"
            id="refereeEmail"
            name="refereeEmail"
            value={formData.refereeEmail}
            onChange={handleChange}
            required
            className='border rounded p-1'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className='border rounded p-1'
          ></textarea>
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="resumepdf">Upload Resume (PDF):</label>
          <input
            type="file"
            id="resumepdf"
            name="resumepdf"
            accept=".pdf"
            onChange={handleChange}
            required
            className='border rounded p-1'
          />
        </div>

        <button className='bg-blue-500 p-2 border rounded' type="submit">Refer</button>
      </form>
    </div>
  );
};

export default RefferForm;
