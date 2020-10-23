import React, { memo } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Alert, Row } from 'react-bootstrap';

import { dispatchGetHeroe } from '../../../store/actions/heroes';
import { SET_OPPONENT } from '../../../store/reducers/heroes';

const FightResult = memo(({ heroes, dispatchGetHeroe }) => {
  if (heroes.stared.powerstats && heroes.selected.powerstats) {
    let winner = heroes.stared;
    // even if values are equal or null stared heroe WINS !
    winner =
      parseInt(heroes.stared.powerstats[heroes.criteria], 10) <
      parseInt(heroes.opponent.powerstats[heroes.criteria], 10)
        ? heroes.opponent
        : winner;
    return (
      <Row>
        <Alert variant={heroes.selected.id === winner.id ? 'success' : 'danger'}>
          <Alert.Heading>
            <b>{winner.name}</b> WINS on criteria <b>{heroes.criteria}</b>
          </Alert.Heading>
          <p>
            You have selected <b>{heroes.selected.name}</b> <br />
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => dispatchGetHeroe(null, SET_OPPONENT)} variant="dark">
              Next Fighter
            </Button>
          </div>
        </Alert>
      </Row>
    );
  }
  return null;
});

const mapStateToProps = ({ heroes }) => ({
  heroes,
});

const mapDispatchToProps = { dispatchGetHeroe };

export default connect(mapStateToProps, mapDispatchToProps)(FightResult);
