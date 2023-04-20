const Header = ({ siteTitle }) => (
    <Outer>
        <H1>
            <StyledLink to="/">
                {siteTitle}
            </StyledLink>
        </H1>
        </Outer>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export { Header }