import styled from 'styled-components'
import tags from './tags.json'

const TagsEstilizadas = styled.h3`
    display: flex;
    font-family: 'Ghandi Sans Regular';
    color: #D9D9D9;
    width: 75%;
    gap: 24px;

`

const ButtonEstilizado = styled.button`    
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }    

`


const Tags = () => {
    return(
        <TagsEstilizadas>
        <p>Busque por Tags:</p>
        {tags.map(tag  => <ButtonEstilizado key={tag.id}>{tag.titulo}</ButtonEstilizado>)}
        </TagsEstilizadas>
    )
}

export default Tags