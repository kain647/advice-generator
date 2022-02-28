import React, { useState, useEffect } from "react";
import { GiDiceSixFacesFive } from "react-icons/gi";
import {
  Container,
  Content,
  Title,
  Description,
  Loading,
  RefreshBtn,
  ImageBox,
} from "./styled";

const Generator = () => {
  const [data, setData] = useState();
  const getAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    //console.log("got data", data);
    setData(data.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  if (!data) {
    return (
      <Loading>
        <img src={`images/pulse.svg`} />
      </Loading>
    );
  }
  return (
    <Container>
      <Content>
        <Title>ADVICE #{data.id}</Title>
        <Description>{data.advice}</Description>
        <ImageBox>
          <img src={`images/pattern-desktop.svg`} />
        </ImageBox>
        <RefreshBtn onClick={getAdvice}>
          <GiDiceSixFacesFive />
        </RefreshBtn>
      </Content>
    </Container>
  );
};
export default Generator;
