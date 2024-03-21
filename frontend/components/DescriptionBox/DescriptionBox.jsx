import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box'>

        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox">Description</div>
            <div className="descriptionbox-navbox-fade"></div>
        </div>

        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilate buying
               and selling of product or services over the internet serves as virtual marketplace
               where buisness and individual showcase their product, interact with customer and 
               conduct transaction without need for physical presence. E-commerce website have
               gained immense popularity due to their convience accesibility and global reach they offer.
            </p>

            <p>E-commerce website typically display product or services a detailed description,images, prices
                and any available variant (e.g size,color).Each product usually has its own design with relevant info
            </p>


        </div>
      
    </div>
  )
}

export default DescriptionBox
