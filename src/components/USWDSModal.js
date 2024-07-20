// src/components/USWDSModal.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const USWDSModal = ({ id, heading, description, children, isOpen, toggle }) => {
  useEffect(() => {
    if (isOpen) {
      document.getElementById(id).classList.add('is-visible');
    } else {
      document.getElementById(id).classList.remove('is-visible');
    }
  }, [isOpen, id]);

  return (
    <div className={`usa-modal ${isOpen ? 'is-visible' : ''}`} id={id} aria-labelledby={`${id}-heading`} aria-describedby={`${id}-description`}>
      <div className="usa-modal__content">
        <div className="usa-modal__main">
          <h2 className="usa-modal__heading" id={`${id}-heading`}>
            {heading}
          </h2>
          <div className="usa-prose">
            <p id={`${id}-description`}>{description}</p>
          </div>
          <div className="usa-modal__body">
            {children}
          </div>
          <div className="usa-modal__footer">
            <button type="button" className="usa-button" onClick={toggle}>
              Close
            </button>
          </div>
        </div>
        <button
          type="button"
          className="usa-modal__close"
          aria-label="Close this window"
          onClick={toggle}
        >
          <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
            <use xlinkHref="/assets/img/sprite.svg#close"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

USWDSModal.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default USWDSModal;