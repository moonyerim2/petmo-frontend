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

export const buttonStyle =
  ({
    isDisabled,
    fontColor,
    bgColor,
    size,
    fontSize,
    fontWeight,
    lineHeight,
    borderRadius,
  }) =>
  ({ fontSizes, sizes, colors, layout, lineHeights, borderRadiuses }) => {
    return {
      ...layout.flexCenter,
      ...sizes[size],
      ...buttonColors(isDisabled, fontColor, bgColor)({ colors }),
      fontSize: fontSizes[fontSize],
      fontWeight: fontWeight,
      lineHeight: lineHeights[lineHeight],
      borderRadius: borderRadiuses[borderRadius],
    };
  };
