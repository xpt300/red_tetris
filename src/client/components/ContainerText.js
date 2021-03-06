import React from 'react'

const container = {
    display: "flex",
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40vh',
    height: '80vh',
    border: '2px solid black',
    backgroundColor: 'black',
  }

const styleText = {
    color: 'white',
    margin: '20px',
    textAlign: 'center'
}

const ContainerText = ({text}) => {
    return (
        <div style={container}>
            <span style={styleText}>{text}</span>
        </div>
    )
}

export default ContainerText