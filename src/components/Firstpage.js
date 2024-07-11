import React, { useState } from 'react';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import paymentSuiteImg from '../assets/first_1.png';
import RefferForm from './RefferForm';

function Firstpage() {
  const [showReferForm, setShowReferForm] = useState(false);

  // Event handler to toggle the visibility of the RefferForm
  const toggleReferForm = () => {
    setShowReferForm((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
      <div className="flex flex-col justify-between w-full">
        <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
          Let's Learn & Earn Through{' '}
          <span className="text-lightBlue">Refer & Earn</span>
        </h3>
        <ul className="space-y-2">
          <li className="font-mullish flex items-center space-x-2">
            <FaCheck className="text-greenLight" />
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <FaCheck className="text-greenLight" />
            <span>Consectetur adipiscing elit</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <FaCheck className="text-greenLight" />
            <span>Sed do eiusmod tempor</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <FaCheck className="text-greenLight" />
            <span>Ut labore et dolore magna</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <FaCheck className="text-greenLight" />
            <span>Aliqua enim ad minim veniam</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <FaCheck className="text-greenLight" />
            <span>Quis nostrud exercitation ullamco</span>
          </li>
        </ul>

        <div className="flex flex-col-reverse md:flex-row items-center space-x-4 mt-4">
          <button
            className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200"
            onClick={toggleReferForm}
          >
            Reffer now
          </button>

          {/* Conditional rendering of RefferForm */}
          {showReferForm && (
            <div className="fixed top-0 -left-4 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50">
              <RefferForm setShowCreateForm={setShowReferForm} />
            </div>
          )}

          <div className="flex self-start md:items-center cursor-pointer group">
            <a
              href="#"
              className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
            >
              Know More
            </a>
            <FaChevronRight className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200" />
          </div>
        </div>
      </div>
      <img
        src={paymentSuiteImg}
        alt="Payment Suite"
        className="max-w-[600px] absolute right-0 bottom-0 hidden md:block lg:block"
      />
    </div>
  );
}

export default Firstpage;
