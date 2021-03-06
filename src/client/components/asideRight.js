import React, { Fragment } from 'react'

import styled from 'styled-components'

import ContainerStagePhantom from '../components/ContainerStagePhantom'

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
    padding: 10px 0px;
`

const Text = styled.h1`
    font-family: Montserrat;
    text-align: center;
`

const Aside = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 80vh;
`

const TextInput = styled.h2`
    font-family: Montserrat;
`
const Score = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding: 10px 0px;
`

const ScoreText = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const AsideRight = ({scoreAdversary, boardAdversary, numberPlayer, name}) => {
    return (
    <Aside>
        {numberPlayer > 1 ?
        <Fragment>
            <Text>Adversaire</Text>
            <TextContainer>
                <ContainerStagePhantom boardAdversary={boardAdversary} name={name}/>
            </TextContainer>
        </Fragment>
          : null}
        <Score>
            {scoreAdversary && 
            <Text>SCORE FINAL</Text> && 
            numberPlayer > 1 ?
            scoreAdversary.map((player, index) => 
                <ScoreText key={index}>
                    <TextInput>{index + 1} - {player.name} - {player.score} points</TextInput>
                </ScoreText>
            ) : null}
        </Score>
    </Aside>
    )
}

export default AsideRight