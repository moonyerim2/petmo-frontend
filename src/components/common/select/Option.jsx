import styled from "styled-components";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";

const Option = styled(OptionUnstyled)`
  list-style: none;
  padding: 11px 12px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.highlighted} {
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

export default Option;
