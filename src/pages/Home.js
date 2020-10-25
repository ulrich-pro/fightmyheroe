import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Alert, Jumbotron } from 'react-bootstrap';

import { dispatchGetHeroePatialDetails } from '../store/actions/heroes';
import Heroe from '../components/molecules/cards/Heroe';
import ButtonWithLink from '../components/atoms/buttons/ButtonWithLink';
import CenteredContent from '../components/atoms/common/CenteredContent';

const Home = memo(({ dispatchGetHeroePatialDetails, heroes }) => {
  // retrieve main heroe when the page is created
  useEffect(() => {
    // at the creation of the component if the stared heroe is not set (for exemple on page refresh)
    // we retrieved it also
    if (!heroes.stared.id) {
      dispatchGetHeroePatialDetails();
    }
  }, []);
  return (
    <>
      <CenteredContent>
        <Heroe heroe={heroes.stared} />
      </CenteredContent>
      <Jumbotron>
        <ButtonWithLink to="/game" text="Fight" />
        <Alert variant="info">
          <h3>Why Is He the stared Heroe</h3>
        </Alert>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum tempor dui
          porttitor faucibus. Fusce placerat orci sit amet cursus ullamcorper. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sit amet ipsum
          eget lacus molestie pharetra consectetur eget metus. Proin sodales massa sit amet metus
          tristique, consectetur elementum nisi sollicitudin. Donec molestie aliquet nisi, ut
          elementum eros finibus vitae. Quisque in imperdiet augue. Aenean a nisi erat. Nunc eu
          libero nunc. Nulla lectus magna, pulvinar ut mollis at, egestas non odio. Nulla nulla mi,
          tincidunt et ipsum vitae, volutpat tempor orci. Praesent eleifend sagittis quam, hendrerit
          sagittis arcu imperdiet ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum tempor dui
          porttitor faucibus. Fusce placerat orci sit amet cursus ullamcorper. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sit amet ipsum
          eget lacus molestie pharetra consectetur eget metus. Proin sodales massa sit amet metus
          tristique, consectetur elementum nisi sollicitudin. Donec molestie aliquet nisi, ut
          elementum eros finibus vitae. Quisque in imperdiet augue. Aenean a nisi erat. Nunc eu
          libero nunc. Nulla lectus magna, pulvinar ut mollis at, egestas non odio. Nulla nulla mi,
          tincidunt et ipsum vitae, volutpat tempor orci. Praesent eleifend sagittis quam, hendrerit
          sagittis arcu imperdiet ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum tempor dui
          porttitor faucibus. Fusce placerat orci sit amet cursus ullamcorper. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sit amet ipsum
          eget lacus molestie pharetra consectetur eget metus. Proin sodales massa sit amet metus
          tristique, consectetur elementum nisi sollicitudin. Donec molestie aliquet nisi, ut
          elementum eros finibus vitae. Quisque in imperdiet augue. Aenean a nisi erat. Nunc eu
          libero nunc. Nulla lectus magna, pulvinar ut mollis at, egestas non odio. Nulla nulla mi,
          tincidunt et ipsum vitae, volutpat tempor orci. Praesent eleifend sagittis quam, hendrerit
          sagittis arcu imperdiet ut.
        </p>
        <ButtonWithLink to="/game" text="Fight" />
      </Jumbotron>
    </>
  );
});

const mapStateToProps = ({ heroes }) => ({
  heroes,
});

const mapDispatchToProps = {
  dispatchGetHeroePatialDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
