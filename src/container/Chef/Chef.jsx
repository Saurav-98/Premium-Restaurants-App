import React from 'react';

import './Chef.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we Believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="p__opensans">
            Expedita at qui, beatae laboriosam voluptatem veritatis possimus,
            neque optio, repellendus velit exercitationem provident ut. Quisquam
            nostrum debitis ullam nesciunt ducimus expedita, vitae, culpa nam
            id, necessitatibus sapiente odio eaque explicabo temporibus.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
