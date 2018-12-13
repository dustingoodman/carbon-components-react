import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AriaLabelPropType } from '../../prop-types/AriaPropTypes';

const { prefix } = settings;

const Header = ({ className: customClassName, children, ...rest }) => {
  const className = cx(`${prefix}--header`, customClassName);
  return (
    <header {...rest} className={className} role="banner">
      {children}
    </header>
  );
};

Header.propTypes = {
  /**
   * Required props for the accessibility label of the header
   */
  ...AriaLabelPropType,

  /**
   * Optionally provide a custom class name that is applied to the underlying <header>
   */
  className: PropTypes.string,
};

export default Header;