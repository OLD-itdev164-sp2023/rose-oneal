import React from "react";
import PropTypes from 'prop-types';
import { BaseContainer } from "../BaseContainer";

export const ListItem = ({ childern, ...rest }) => (
    <BaseContainer as='li' {...rest}>
        {childern}
    </BaseContainer>
)

ListItem.propTypes = {
    childern: PropTypes.node.isRequired
}