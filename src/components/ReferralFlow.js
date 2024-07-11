import React from 'react';
import { FaUserPlus, FaAward, FaWallet, FaArrowRight, FaArrowDown } from 'react-icons/fa';

const ReferralFlow = () => {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col gap-4 md:flex-row justify-around items-center md:space-x-8  space-y-8 md:space-y-0 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg border">
        
        {/* Submit Referrals */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-500 rounded-full text-white">
            <FaUserPlus className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-semibold">Submit Referrals</h2>
          <p className="text-gray-600 mt-2">Submit referrals easily via our website’s referral section.</p>
        </div>
        
        {/* Arrow for large screens */}
        <div className="hidden md:block  left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaArrowRight className="w-8 h-8 text-blue-500" />
        </div>
        {/* Arrow for small screens (between first and second step) */}
      <div className="md:hidden flex flex-col items-center mt-4">
        <FaArrowDown className="w-8 h-8 text-blue-500" />
      </div>



        {/* Earn Rewards */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-500 rounded-full text-white">
            <FaAward className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-semibold">Earn Rewards</h2>
          <p className="text-gray-600 mt-2">Earn rewards once your referral joins an Accredian program.</p>
        </div>

        {/* Arrow for large screens */}
        <div className="hidden md:block  left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaArrowRight className="w-8 h-8 text-blue-500" />
        </div>
         {/* Arrow for small screens (between first and second step) */}
      <div className="md:hidden flex flex-col items-center mt-4">
        <FaArrowDown className="w-8 h-8 text-blue-500" />
      </div>
        
        {/* Receive Bonus */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-500 rounded-full text-white">
            <FaWallet className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-semibold">Receive Bonus</h2>
          <p className="text-gray-600 mt-2">Both parties receive a bonus 30 days after program enrollment.</p>
        </div>
        

       
      </div>

      
    </div>
  );
}

export default ReferralFlow;
