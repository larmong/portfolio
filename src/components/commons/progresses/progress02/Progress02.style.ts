import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
  overflow: hidden;
`;

export const Progress = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;
