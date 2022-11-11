import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ModalTitle } from "../../../styled";
import { tag } from "../../../constants";

const contentTitle = "어떤 이야기를 하고 싶나요?";

const TagList = styled.ul`
  padding-top: 8px;
`;

const TagListItem = styled.li`
  ${({
    theme: { fontSizes, colors, lineHeights, sizes, layout },
    isSelected,
  }) =>
    css`
      ${{
        ...layout.flex_aCenter_jBetween,
        ...sizes.size2,
        color: isSelected ? colors.main : colors.black,
        fontWeight: isSelected ? 700 : 400,
        fontSize: fontSizes.body1,
        lineHeight: lineHeights[150],
      }}
    `}
`;

function TopicModalContent({ selectedTag }) {
  const isSelected = (tag) => selectedTag === tag;

  return (
    <>
      <ModalTitle>{contentTitle}</ModalTitle>
      <TagList>
        {tag.topic.map((tag) => (
          <TagListItem key={tag} isSelected={isSelected(tag)}>
            {tag}
            {isSelected(tag) ? (
              <img src={`${process.env.PUBLIC_URL}/img/check.svg`} alt="선택" />
            ) : null}
          </TagListItem>
        ))}
      </TagList>
    </>
  );
}

TopicModalContent.propTypes = {
  selectedTag: PropTypes.string,
};

export default TopicModalContent;
