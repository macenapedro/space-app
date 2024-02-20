import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () =>{
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo='/Icones/home-ativo.png'
                        iconteInativo='/Icones/home-inativo.png'
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo='/Icones/mais-vistas-inativo.png'
                        iconteInativo='/Icones/mais-vistas-inativo.png'
                    >
                        Mais Vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo='/Icones/mais-curtidas-inativo.png'
                        iconteInativo='/Icones/mais-curtidas-inativo.png'
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo='/Icones/novas-inativo.png'
                        iconteInativo='/Icones/novas-inativo.png'
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo='/Icones/surpreenda-me-inativo.png'
                        iconteInativo='/Icones/surpreenda-me-inativo.png'
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>       
            </nav>
            
        </aside>
    )
}

export default BarraLateral;