import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageArea = styled.div`
  margin-top: 16px;
`;
const StyledSlider = styled(Slider)`
  width: 320px;
  height: 220px;
  border-radius: 4px;
  margin-bottom: 34px;
  margin-top: 20px;
  .slick-list {
    border-radius: 4px;
  }

  .slick-dots {
    display: flex;
    list-style-type: none;

    li {
      width: 6px;
      height: 6px;
    }

    button {
      display: block;
      width: 6px;
      height: 6px;
      padding: 0;

      border: none;
      border-radius: 100%;
      background-color: #e9e9ed;

      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: #fa3c89;
    }
  }
`;

function ContentImage({ content_image, type }) {
  if (type === "full") {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <StyledSlider {...settings}>
        {content_image.map((image) => {
          return <img key={image.id} src={image.src} alt="img"></img>;
        })}
      </StyledSlider>
    );
  } else {
    return (
      <ImageArea>
        <img src={content_image[0].src} alt="img"></img>
      </ImageArea>
    );
  }
}

export default ContentImage;

ContentImage.propTypes = {
  content_image: PropTypes.array,
  type: PropTypes.node,
};
