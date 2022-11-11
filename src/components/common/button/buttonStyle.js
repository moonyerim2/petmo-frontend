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
