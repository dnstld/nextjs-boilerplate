import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um  átomo e React Avançado escrito ao lado"
    />

    <S.Title>React avançado</S.Title>

    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Compomponents
    </S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um desenvolvedor codando"
    />
  </S.Wrapper>
)

export default Main
