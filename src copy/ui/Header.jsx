import styled from "styled-components";

const StyledHeader=styled.header`
 background-color: var(--color-grey-0);;
  padding: 1.3 rem;
  border-bottom: 1px solid var(--color-grey-100);
`

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
