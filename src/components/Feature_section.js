import React from 'react';
// import { FaGraduationCap } from 'react-icons/fa';
import { GiProfit } from "react-icons/gi";

function Feature() {
  return (
    <div>
      <section className="w-full bg-[url('/src/assets/core-features-sectionBg.svg')] bg-no-repeat bg-cover bg-center mt-4 py-14 relative corefeaturesection">
        <div className="relative w-11/12 max-w-[1080px] mx-auto py-8">
          <h2 className="font-mullish font-bold text-2xl text-center text-black">What Are The Referral Benefits?</h2>
          <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
          <p className="font-mullish text-center max-w-[450px] text-black mx-auto">
            Perks List
          </p>

          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8">
            {/* card1 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">Professional Certificate Program in Product Management</h3>
              <p className="font-mullish text-white opacity-80 text-center">
                <li>Referre Bonus : $70 </li>
                <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card2 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">PG Certificate Program in Strategic Product Management</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card3 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">Executive Program in Data Driven Product Management</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card4 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">Executive Program in Product In Product Management and Digital Transformation</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card5 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">Executive Program in Product Management</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card6 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">Advanced Cetification in Product Management</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card7 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">Execitve Program in Product Management and Project Management</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
            {/* card8 */}
            <div>
              <GiProfit className="text-greenLight text-5xl mx-auto" />
              <h3 className="font-mullish text-white text-lg font-bold my-4 text-center">UG Certificate Program in Strategic Product Management.</h3>
              <p className="font-mullish text-white opacity-80 text-center">
              <li>Referre Bonus : $70 </li>
              <li>Referee Bonus : $80 </li>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
