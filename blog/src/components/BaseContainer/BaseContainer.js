import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';

export const BaseContainer = ({ childer, flex = false, ...rest }) => {
    let Component = flex ? Flex : Box
    return <Component {...rest}>{childern}</Component>
}

BaseContainer.PropTypes = {
    flex: PropTypes.bool,
    as: PropTypes.string,
    childern: PropTypes.node.isRequired
}