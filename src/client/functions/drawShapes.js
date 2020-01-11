import React from 'react'

import styled from 'styled-components'

const Shapes = styled.div`
    width: 10%;
    height: 5%;
    flex-shrink: 0;
    background-color: ${props => props.block === 0 
                        ? 'white' : props.color };
    outline: 1px solid white;
`

const drawShapes = (shapes) => {
    let htmlShapes = [];
    if (shapes) {
      shapes.shapes.map((line, index) => {
        line.map(block => {
          htmlShapes.push(<Shapes block={block} {...shapes} key={htmlShapes.length}/>)
        })
      })
    }
    return htmlShapes
}

export default drawShapes