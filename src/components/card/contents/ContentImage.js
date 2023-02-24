import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageArea = styled.div`
  margin-top: 16px;
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  margin-top: 20px;

  .slick-list {
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .slick-dots {
    position: static;
    height: 6px;

    li {
      width: 6px;
      height: 100%;
    }

    button {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      border-radius: 100%;
      background-color: #e9e9ed;
      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: #fa3c89;
    }

    button:before,
    .slick-active button:before {
      position: static;
      width: 6px;
      height: 6px;
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
          return <Image key={image.id} src={image.src} alt="img" />;
        })}
      </StyledSlider>
    );
  } else {
    return (
      <ImageArea>
        <Image src={content_image[0].src} alt="img" />
      </ImageArea>
    );
  }
}

ContentImage.propTypes = {
  content_image: PropTypes.array,
  type: PropTypes.node,
};

export default ContentImage;
