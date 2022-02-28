import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 15px;
  text-align: center;
  align-items: center;
  padding: 3rem 3rem 0 3rem;
  width: 550px;
  height: 300px;
  background-color: #313a49;
  box-shadow: 0 0 15px 3px #292828;
`;
export const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  color: #52ffa8;
  letter-spacing: 2.5px;
  justify-content: center;
  margin-bottom: 20px;
  font-weight: 700;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cee3e9;
  width: 80%;
  font-size: 30px;
  line-height: 1.3;
  text-align: center;
`;
export const Loading = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  //color: #cee3e9;
`;
export const RefreshBtn = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0;
  width: 60px;
  height: 60px;
  background-color: #52ffa8;
  bottom: -30px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
  }
  :hover {
    cursor: pointer;
    box-shadow: 0 1px 25px 1px #52ffa8;
  }
`;
export const ImageBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 20%;
  img {
  }
`;
