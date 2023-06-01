import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
const ScoreCard = () => {
  const [gameData, updateGameData] = useState({
    score: 0,
    wicket: 0,
    balls: 0,
    extraBalls: 0
  })
  function updateScoreAndBall(score) {
    let newScore = gameData.score + score
    let balls = gameData.balls + 1;
    updateGameData({
      ...gameData,
      score: newScore,
      balls: balls,
    })
  }
  function addExtra() {
    let newScore = gameData.score + 1
    let extraBalls = gameData.extraBalls + 1;
    updateGameData({
      ...gameData,
      score: newScore,
      extraBalls: extraBalls,
    })
  }
  function addWicket() {
    let newWicket = gameData.wicket + 1;
    let balls = gameData.balls + 1;
    updateGameData({
      ...gameData,
      balls: balls,
      wicket: newWicket
    })
  }
  return (
    <Fragment>
      <h1>Score {gameData.score}</h1>
      <h1>Wickets {gameData.wicket}</h1>
      <h1>Balls {gameData.balls} + {gameData.extraBalls}</h1>
      <ButtonGroup variant="contained">
        <Button onClick={() => updateScoreAndBall(1)}>1</Button>
        <Button onClick={() => updateScoreAndBall(2)}>2</Button>
        <Button onClick={() => updateScoreAndBall(3)}>3</Button>
        <Button onClick={() => updateScoreAndBall(4)}>4</Button>
        <Button onClick={() => updateScoreAndBall(5)}>5</Button>
        <Button onClick={() => updateScoreAndBall(6)}>6</Button>
        <Button onClick={addExtra}>NB</Button>
        <Button onClick={addWicket}>W</Button>
      </ButtonGroup>
    </Fragment>
  );
}

export default ScoreCard;
