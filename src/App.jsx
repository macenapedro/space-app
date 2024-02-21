import styled from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from './Componentes/Banner'
import bannerBackground from './assets/fotoDoBanner.png'
import Galeria from "./Componentes/Galeria"
import fotos from './fotos.json'
import { useState } from "react"
import ModalDeZoom from "./Componentes/ModalDeZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, setfotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setfotoSelecionada] = useState(fotos[0])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setfotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setfotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria 
              aoFotoSelecionada={foto => setfotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalDeZoom 
        foto={fotoSelecionada}
        aoFechar={() => setfotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
