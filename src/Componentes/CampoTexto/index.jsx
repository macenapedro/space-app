import { InputStyled, InputWrapper, SearchButton } from './Input.styled/index';

export const CampoTexto = () => {
  return (
    <InputWrapper>
      <InputStyled placeholder="O que você procura?" />
      <SearchButton>
        <img src="Icones/search.png" alt="icone de search" />
      </SearchButton>
    </InputWrapper>
  );
};

export default CampoTexto;