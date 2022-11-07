const pixelToRem = (size) => `${size / 16}rem`;

export const fontSizes = {
  h1: pixelToRem(44),
  h2: pixelToRem(36),
  h3: pixelToRem(32),
  h4: pixelToRem(28),
  h5: pixelToRem(24),
  subtitle1: pixelToRem(20),
  subtitle2: pixelToRem(18),
  body1: pixelToRem(16),
  body2: pixelToRem(14),
  caption: pixelToRem(12),
};

export const lineHeights = {
  150: "150%",
  140: "140%",
};

const colorsPalette = {
  black: "#111",
  white: "#fff",
  gray50: "#F7F7FB",
  gray100: "#F1F1F5",
  gray200: "#F0F0F6",
  gray300: "#E9E9ED",
  gray400: "#E5E5EC",
  gray600: "#999999",
  gray700: "#767676",
  gray800: "#505050",
  pink50: "#FFE0EB",
  pink100: "#FFB1CD",
  pink200: "#FF7BAC",
  pink300: "#FA3C89",
  pink400: "#F3006E",
  pink500: "#ED0054",
  pink600: "#DD0052",
  pink700: "#C7004F",
  pink800: "#B2004C",
  pink900: "#8C0048",
  blue50: "#E2F2FF",
  blue100: "#B8DEFF",
  blue200: "#86CBFF",
  blue300: "#47B5FF",
  blue400: "#00A4FF",
  blue500: "#0093FF",
  blue600: "#0084FF",
  blue700: "#0070FF",
  blue800: "#0D5DF1",
  blue900: "#2537D2",
  red: "#D32F2F",
};

export const colors = (() => {
  return {
    ...colorsPalette,
    main: colorsPalette.pink300,
    sub: colorsPalette.blue800,
    disable: colorsPalette.gray600,
    lineDark: colorsPalette.black,
    lineMedium: colorsPalette.gray400,
    lineLight: colorsPalette.gray200,
    bgDark: colorsPalette.gray300,
    bgMedium: colorsPalette.gray100,
    bgLight: colorsPalette.gray50,
    fontDefault: colorsPalette.black,
    fontLight1: colorsPalette.gray800,
    fontLight2: colorsPalette.gray700,
    error: colorsPalette.red,
  };
})();

export const borderRadius = {
  small: pixelToRem(8),
  big: pixelToRem(200),
};
