import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: auto;
`;

export const InputStyled = styled.input`
  width: 602px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-image: linear-gradient(174.61deg, #041833 4.16%, #041833),
    radial-gradient(circle at top left, #c98cf1, #7b78e5);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 12px 16px;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;