import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import HeroeFightCard from '../components/molecules/cards/HeroeFightCard';
import { dispatchSetItem, dispatchGetHeroePatialDetails } from '../store/actions/heroes';
import FightResult from '../components/organisms/game/FightResult';
import { SET_OPPONENT, SELECT_ITEM, SET_STARED } from '../store/reducers/heroes';
import HeroeHabilities from '../components/molecules/forms/HeroeHabilities';
import SearchHeroe from '../components/organisms/game/SearchHeroe';
import CenteredContent from '../components/atoms/common/CenteredContent';
import Versus from '../components/atoms/images/Versus';
import OldFights from '../components/organisms/game/OldFights';

const Game = memo(({ dispatchSetItem, dispatchGetHeroePatialDetails, heroes }) => {
  const selectWinner = (winner) => {
    dispatchSetItem(winner, SELECT_ITEM);
  };

  // Similaire à componentDidMount et componentDidUpdate
  useEffect(() => {
    // at the creation of the component if the stared heroe is not set (for exemple on page refresh)
    // we retrieved it also
    if (!heroes.stared.id) {
      dispatchGetHeroePatialDetails(null, SET_STARED);
    }
    dispatchGetHeroePatialDetails(null, SET_OPPONENT);
  }, []); // Or [] if effect doesn't need props or state

  return (
    <>
      <SearchHeroe />
      <Row>
        <Col md={5}>
          <CenteredContent>
            <HeroeFightCard
              selected={heroes.selected.id}
              heroe={heroes.stared}
              win={selectWinner}
            />
          </CenteredContent>
        </Col>
        <Versus />
        <Col md={5}>
          <CenteredContent>
            <HeroeFightCard
              selected={heroes.selected.id}
              heroe={heroes.opponent}
              win={selectWinner}
            />
          </CenteredContent>
        </Col>
      </Row>
      <h2>
        Fight on criteria: <b>{heroes.criteria}</b>
      </h2>
      <FightResult />
      {heroes.selected.powerstats && (
        <>
          <h2>Power Stats</h2>
          <Row>
            <Col md={6}>
              <HeroeHabilities powerstats={heroes.stared.powerstats} />
            </Col>
            <Col md={6}>
              <HeroeHabilities powerstats={heroes.opponent.powerstats} />
            </Col>
          </Row>
        </>
      )}
      <OldFights fights={heroes.list} />
    </>
  );
});

const mapStateToProps = ({ heroes }) => ({
  heroes,
});

const mapDispatchToProps = {
  dispatchSetItem,
  dispatchGetHeroePatialDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
