import styled from "styled-components"


const ItemDeListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'} ;
    font-family: ${props => props.$ativo ? 'GhandiSansBold' : 'GhandiSansRegular'} ;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegacao = ({children, iconeAtivo, iconteInativo, ativo = false}) =>{
    return(
        <ItemDeListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconteInativo} alt=""></img>
            {children}
        </ItemDeListaEstilizado>
    )

}

export default ItemNavegacao