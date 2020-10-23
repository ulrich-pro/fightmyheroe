import React, { memo } from 'react';
import { Form, Jumbotron } from 'react-bootstrap';

import FormRow from '../../atoms/forms/FormRow';
import CenteredImage from '../../atoms/images/CenteredImage';

const HeroeDetailsForm = memo(({ heroe }) => {
  return (
    <>
      {Object.keys(heroe).length !== 0 && (
        <Form>
          <CenteredImage source={heroe.image.url} />
          <Jumbotron>
            <FormRow title="Full Name" content={heroe.biography['full-name']} />
            <FormRow title="Place Of Birth" content={heroe.biography['place-of-birth']} />
            <FormRow title="Good/Evil" content={heroe.biography.alignment} />
            <FormRow title="Aliases" content={heroe.biography.aliases.toString()} />
            <FormRow title="Relatives" content={heroe.connections.relatives.toString()} />
            <FormRow
              title="Group Affiliation"
              content={heroe.connections['group-affiliation'].toString()}
            />
            <FormRow title="Work" content={`${heroe.work.base} ${heroe.work.occupation}`} />
          </Jumbotron>
        </Form>
      )}
    </>
  );
});

export default HeroeDetailsForm;
