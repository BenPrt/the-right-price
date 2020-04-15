import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './ErrorSnackbar.scss';

import { readError } from 'redux/actions/ErrorActions';

function ErrorSnackbar() {
  const displayedError = useSelector((state) => state.error.new);
  const errorMessage = useSelector((state) => state.error.errorMessage);

  const dispatch = useDispatch();

  return (
    <div className={`ErrorSnackbar ${
      displayedError ? 'displayed' : ''
    }`}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10} md={6}>
            <div id="snackbar">
              <ErrorOutlineIcon id="snackbar-icon" />
              <p id="snackbar-message">{errorMessage}</p>
              <IconButton
                aria-label="close"
                color="secondary"
                size="small"
                onClick={() => dispatch(readError())}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ErrorSnackbar;
