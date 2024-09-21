import React from 'react'
import Image from 'next/image';
import itemlogo from '/public/images/itemlogo.jpg';
import adbg from '/public/images/ad_bg.jpg';
export default function Jobs() {
  return (
    <div className='jobs-section'>
      <div className='jobs-section-one'>
        <div className='jobs-section-one-left'>
          <h1>Featured Jobs​</h1>
          <p>Know your worth and find the job that qualify your life</p>
        </div>
        <div className='jobs-section-one-right'>
          <span>Browse All Jobs<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1967d2"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg></span>
        </div>
      </div>
      <div className='jobs-section-two'>
        <div className='jobs-section-two-item'>
          <div className='jobs-section-two-item-image'>
            <Image src={itemlogo}/>
          </div>
          <div className='jobs-section-two-item-content'>
            <h1>Junior Graphic Designer (Web)<span>Featured</span></h1>
            <div className='jobs-section-two-item-content-one'>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Design, Development</h1>
              <h2><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h2>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M550-451.54q-41.92 0-70.96-29.04Q450-509.62 450-551.54q0-41.92 29.04-70.96 29.04-29.04 70.96-29.04 41.92 0 70.96 29.04Q650-593.46 650-551.54q0 41.92-29.04 70.96-29.04 29.04-70.96 29.04ZM286.15-327.69q-29.82 0-51.06-21.24-21.24-21.24-21.24-51.07v-303.08q0-29.82 21.24-51.06 21.24-21.24 51.06-21.24h527.69q29.83 0 51.07 21.24 21.24 21.24 21.24 51.06V-400q0 29.83-21.24 51.07-21.24 21.24-51.07 21.24H286.15Zm60-60h407.7q0-29.92 21.24-51.12Q796.33-460 826.15-460v-183.08q-29.92 0-51.11-21.24-21.19-21.24-21.19-51.06h-407.7q0 29.92-21.24 51.11-21.24 21.19-51.06 21.19V-460q29.92 0 51.11 21.24 21.19 21.24 21.19 51.07Zm420.77 200H146.16q-29.83 0-51.07-21.24Q73.85-230.17 73.85-260v-396.15h60V-260q0 4.61 3.84 8.46 3.85 3.85 8.47 3.85h620.76v60Zm-480.77-200h-12.3V-715.38h12.3q-5 0-8.65 3.65-3.65 3.65-3.65 8.65V-400q0 5 3.65 8.65 3.65 3.66 8.65 3.66Z"/></svg>$150 - $180 / week</h1>
            </div>
            <div className='jobs-section-two-item-content-two'>
              <div className='jobs-section-two-item-content-two-one'>Full Time</div>
              <div className='jobs-section-two-item-content-two-two'>Urgent</div>
            </div>
          </div>
          <div className='jobs-section-two-item-saved'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
          </div>
        </div>
        <div className='jobs-section-two-item'>
          <div className='jobs-section-two-item-image'>
            <Image src={itemlogo}/>
          </div>
          <div className='jobs-section-two-item-content'>
            <h1>Junior Graphic Designer (Web)<span>Featured</span></h1>
            <div className='jobs-section-two-item-content-one'>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Design, Development</h1>
              <h2><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h2>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M550-451.54q-41.92 0-70.96-29.04Q450-509.62 450-551.54q0-41.92 29.04-70.96 29.04-29.04 70.96-29.04 41.92 0 70.96 29.04Q650-593.46 650-551.54q0 41.92-29.04 70.96-29.04 29.04-70.96 29.04ZM286.15-327.69q-29.82 0-51.06-21.24-21.24-21.24-21.24-51.07v-303.08q0-29.82 21.24-51.06 21.24-21.24 51.06-21.24h527.69q29.83 0 51.07 21.24 21.24 21.24 21.24 51.06V-400q0 29.83-21.24 51.07-21.24 21.24-51.07 21.24H286.15Zm60-60h407.7q0-29.92 21.24-51.12Q796.33-460 826.15-460v-183.08q-29.92 0-51.11-21.24-21.19-21.24-21.19-51.06h-407.7q0 29.92-21.24 51.11-21.24 21.19-51.06 21.19V-460q29.92 0 51.11 21.24 21.19 21.24 21.19 51.07Zm420.77 200H146.16q-29.83 0-51.07-21.24Q73.85-230.17 73.85-260v-396.15h60V-260q0 4.61 3.84 8.46 3.85 3.85 8.47 3.85h620.76v60Zm-480.77-200h-12.3V-715.38h12.3q-5 0-8.65 3.65-3.65 3.65-3.65 8.65V-400q0 5 3.65 8.65 3.65 3.66 8.65 3.66Z"/></svg>$150 - $180 / week</h1>
            </div>
            <div className='jobs-section-two-item-content-two'>
              <div className='jobs-section-two-item-content-two-one'>Full Time</div>
              <div className='jobs-section-two-item-content-two-two'>Urgent</div>
            </div>
          </div>
          <div className='jobs-section-two-item-saved'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
          </div>
        </div>
        <div className='jobs-section-two-item'>
          <div className='jobs-section-two-item-image'>
            <Image src={itemlogo}/>
          </div>
          <div className='jobs-section-two-item-content'>
            <h1>Junior Graphic Designer (Web)<span>Featured</span></h1>
            <div className='jobs-section-two-item-content-one'>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Design, Development</h1>
              <h2><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h2>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M550-451.54q-41.92 0-70.96-29.04Q450-509.62 450-551.54q0-41.92 29.04-70.96 29.04-29.04 70.96-29.04 41.92 0 70.96 29.04Q650-593.46 650-551.54q0 41.92-29.04 70.96-29.04 29.04-70.96 29.04ZM286.15-327.69q-29.82 0-51.06-21.24-21.24-21.24-21.24-51.07v-303.08q0-29.82 21.24-51.06 21.24-21.24 51.06-21.24h527.69q29.83 0 51.07 21.24 21.24 21.24 21.24 51.06V-400q0 29.83-21.24 51.07-21.24 21.24-51.07 21.24H286.15Zm60-60h407.7q0-29.92 21.24-51.12Q796.33-460 826.15-460v-183.08q-29.92 0-51.11-21.24-21.19-21.24-21.19-51.06h-407.7q0 29.92-21.24 51.11-21.24 21.19-51.06 21.19V-460q29.92 0 51.11 21.24 21.19 21.24 21.19 51.07Zm420.77 200H146.16q-29.83 0-51.07-21.24Q73.85-230.17 73.85-260v-396.15h60V-260q0 4.61 3.84 8.46 3.85 3.85 8.47 3.85h620.76v60Zm-480.77-200h-12.3V-715.38h12.3q-5 0-8.65 3.65-3.65 3.65-3.65 8.65V-400q0 5 3.65 8.65 3.65 3.66 8.65 3.66Z"/></svg>$150 - $180 / week</h1>
            </div>
            <div className='jobs-section-two-item-content-two'>
              <div className='jobs-section-two-item-content-two-one'>Full Time</div>
              <div className='jobs-section-two-item-content-two-two'>Urgent</div>
            </div>
          </div>
          <div className='jobs-section-two-item-saved'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
          </div>
        </div>
        <div className='jobs-section-two-item'>
          <div className='jobs-section-two-item-image'>
            <Image src={itemlogo}/>
          </div>
          <div className='jobs-section-two-item-content'>
            <h1>Junior Graphic Designer (Web)<span>Featured</span></h1>
            <div className='jobs-section-two-item-content-one'>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700Zm400 330H580v70H380v-70H160v157.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-370Zm-360 10h80v-80h-80v80Zm-280-70h220v-70h200v70h220v-197.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-430Zm320 30Z"/></svg>Design, Development</h1>
              <h2><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/></svg>New York</h2>
              <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M550-451.54q-41.92 0-70.96-29.04Q450-509.62 450-551.54q0-41.92 29.04-70.96 29.04-29.04 70.96-29.04 41.92 0 70.96 29.04Q650-593.46 650-551.54q0 41.92-29.04 70.96-29.04 29.04-70.96 29.04ZM286.15-327.69q-29.82 0-51.06-21.24-21.24-21.24-21.24-51.07v-303.08q0-29.82 21.24-51.06 21.24-21.24 51.06-21.24h527.69q29.83 0 51.07 21.24 21.24 21.24 21.24 51.06V-400q0 29.83-21.24 51.07-21.24 21.24-51.07 21.24H286.15Zm60-60h407.7q0-29.92 21.24-51.12Q796.33-460 826.15-460v-183.08q-29.92 0-51.11-21.24-21.19-21.24-21.19-51.06h-407.7q0 29.92-21.24 51.11-21.24 21.19-51.06 21.19V-460q29.92 0 51.11 21.24 21.19 21.24 21.19 51.07Zm420.77 200H146.16q-29.83 0-51.07-21.24Q73.85-230.17 73.85-260v-396.15h60V-260q0 4.61 3.84 8.46 3.85 3.85 8.47 3.85h620.76v60Zm-480.77-200h-12.3V-715.38h12.3q-5 0-8.65 3.65-3.65 3.65-3.65 8.65V-400q0 5 3.65 8.65 3.65 3.66 8.65 3.66Z"/></svg>$150 - $180 / week</h1>
            </div>
            <div className='jobs-section-two-item-content-two'>
              <div className='jobs-section-two-item-content-two-one'>Full Time</div>
              <div className='jobs-section-two-item-content-two-two'>Urgent</div>
            </div>
          </div>
          <div className='jobs-section-two-item-saved'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M180-100v-530.77q0-29.92 21.19-51.11 21.2-21.2 51.12-21.2h301.15q29.92 0 51.12 21.2 21.19 21.19 21.19 51.11V-100L403.08-213.08 180-100Zm60-92.54 163.08-86.38 162.69 86.38v-438.23q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85v438.23Zm480-58.61v-536.54q0-5.39-3.46-8.85t-8.85-3.46H295.77v-60h411.92q29.92 0 51.12 21.19Q780-817.61 780-787.69v536.54h-60ZM240-643.08h325.77H240Z"/></svg>
          </div>
        </div>
      </div>
      <div className='jobs-section-three'>
        <div className='jobs-section-three-one'>
          <Image src={adbg}/>
          <div className='jobs-section-three-one-before'>
            <box-icon type='solid' name='right-arrow'></box-icon>
          </div>
        </div>
        <div className='jobs-section-three-two'>
          <h1>Video Job Ads: Our Top Pick</h1>
          <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <ul>
            <li><div className='jobs-section-three-two-ul-li-before'></div>Creative Study Pattern</li>
            <li><div className='jobs-section-three-two-ul-li-before'></div>Quick Crash Courses</li>
            <li><div className='jobs-section-three-two-ul-li-before'></div>Certification Awarded</li>
            <li><div className='jobs-section-three-two-ul-li-before'></div>Provided with Experimental Examples</li>
          </ul>
          <button>Watch Video</button>
        </div>    
      </div>
      <div className='jobs-section-four'>
        <div className='jobs-section-four-one'>
          <h1>4M</h1>
          <p>4 million daily active users</p>
        </div>
        <div className='jobs-section-four-one'>
          <h1>12K</h1>
          <p>Over 12k open job positions</p>
        </div>
        <div className='jobs-section-four-one'>
          <h1>20M</h1>
          <p>Over 20 million stories shared</p>
        </div>
      </div>
    </div>
  )
}