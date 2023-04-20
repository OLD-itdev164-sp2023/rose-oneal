import React from "react";
import PropTypes from 'prop-types';
import { BaseContainer } from "../BaseContainer";

export const List = ({ childern, ...rest }) => (
    <BaseContainer
    flex
    flexDirextion='column'
    mx='auto'
    as='ul'
    {...rest}
    >
        {childern}
    </BaseContainer>
)

List.propTypes = {
    childern: PropTypes.node.isRequired
}