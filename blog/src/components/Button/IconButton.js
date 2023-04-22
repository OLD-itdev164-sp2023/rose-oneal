import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const StyledButton = styled(BaseButton)`
    //inject theme styles here later
    `

    export const IconButton = styled(({ icon, ...rest }) => {
        let clone = React.cloneElement(icon, rest)
        return <StyledButton as={clone.type} {...rest} className={rest.className} />
    })`
        //adding styles here is a possibility but it is not necessary
        //the main reason this is a styled compnent is to wrap the styled icon passed in as a prop
        `

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired
}