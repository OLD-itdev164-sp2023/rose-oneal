import React from "react";
import PropTypes from 'prop-types';
import { ThemeConsumer } from "styled-components";
import { IconButton } from './IconButton';

export const SeatchButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Search} {...props} />}
    </ThemeConsumer>
)

SeatchButton.propTypes = {
    variant: PropTypes.string
}