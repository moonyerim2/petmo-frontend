import { css } from "styled-components";

export const setStyledComponent = ({ theme, style }) => {
  if (style !== undefined) {
    return css`
      ${{ ...style(theme) }}
    `;
  }
};
