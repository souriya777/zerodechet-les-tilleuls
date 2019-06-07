import React from 'react'
import Slider from 'react-slick'

// see https://react-slick.neostack.com/docs/api/
const settings = {
  arrows: false,
  dots: true,
  // lazyLoad: true,
  // infinite: false,
  // autoplay: true,
  // autoplaySpeed: 6000,
  speed: 500,
  // swipeToSlide: true,
  // vertical: true,
  // verticalSwiping: true,
  appendDots: dots => (
    <div>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  // customPaging: i => (
  //   <div
  //     style={{
  //       width: "30px",
  //     }}
  //   >
  //     {i + 1}
  //   </div>
  // ),
}

const SlickWrapper = ({ children }) =>
  <Slider {...settings}>
    {children}
  </Slider>

export default SlickWrapper