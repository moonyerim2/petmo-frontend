/* eslint-disable react/prop-types */
import * as React from "react";
import styled from "styled-components";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  transform: ${({ open }) => (open ? "scaleY(-1)" : null)};
`;

const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      {ownerState.open ? (
        <Icon
          open={ownerState.open}
          src={`${process.env.PUBLIC_URL}/img/bottom.svg`}
          alt=""
        />
      ) : (
        <Icon
          open={ownerState.open}
          src={`${process.env.PUBLIC_URL}/img/bottom.svg`}
          alt=""
        />
      )}
    </button>
  );
});

const StyledButton = styled(Button)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.subtitle2};
  font-weight: 700;
  line-height: ${({ theme: { lineHeights } }) => lineHeights[150]};
  color: ${({ theme: { colors } }) => colors.black};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
`;

const StyledListbox = styled("ul")`
  width: 160px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.body1};
  font-weight: 500;
  line-height: ${({ theme: { lineHeights } }) => lineHeights[150]};
  color: ${({ theme: { colors } }) => colors.fontLight2};
  padding: 12px 0;
  margin: 12px 0;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const Select = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

export default Select;
