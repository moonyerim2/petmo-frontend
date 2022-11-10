import React from "react";
import styled from "styled-components";
import { BodyText2 } from "../../styled";

const mytownDescription = "지역은 1개 설정할 수 있어요.";

const Wrapper = styled.div`
  padding: 4px 0 16px 0;
`;

function Description() {
  return (
    <Wrapper>
      <BodyText2 color={"gray700"} lineHeight={140}>
        {mytownDescription}
      </BodyText2>
    </Wrapper>
  );
}

export default Description;
