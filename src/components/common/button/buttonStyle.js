export const buttonColors = (isDisabled, fontColor, bgColor) =>
  isDisabled ? disabledButtonStyle : abledButtonStyle(fontColor, bgColor);

export const abledButtonStyle =
  (fontColor, bgColor) =>
  ({ colors }) => {
    return {
      backgroundColor: bgColor ? colors[bgColor] : colors.main,
      color: fontColor ? colors[fontColor] : colors.white,
    };
  };

export const disabledButtonStyle = ({ colors }) => {
  return {
    color: colors.gray600,
    backgroundColor: colors.gray400,
  };
};

export const bigButtonStyle =
  (fontColor, bgColor) =>
  ({ layout, colors, fontSizes, size, borderRadius, lineHeights }) => {
    return {
      ...layout.flexCenter,
      ...size.size1,
      ...abledButtonStyle(fontColor, bgColor)({ colors }),
      fontSize: fontSizes.body1,
      fontWeight: 500,
      lineHeight: lineHeights[150],
      borderRadius: borderRadius.small,
    };
  };
