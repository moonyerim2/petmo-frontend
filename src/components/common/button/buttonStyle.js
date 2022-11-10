export const bigButtonStyle =
  (fontColor, bgColor) =>
  ({ layout, colors, fontSizes, size, borderRadius, lineHeights }) => {
    return {
      ...layout.flexCenter,
      ...size.bigButtonSize,
      backgroundColor: colors[bgColor],
      color: colors[fontColor],
      fontSize: fontSizes.body1,
      fontWeight: 500,
      lineHeight: lineHeights[150],
      borderRadius: borderRadius.small,
    };
  };
