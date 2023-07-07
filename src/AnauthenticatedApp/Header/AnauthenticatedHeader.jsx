import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { colors } from "../../styles/colors";
import logo from "../../assets/eatable.svg";

const Header = styled.div`
  height: 382px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const StyledSlogan = styled.p`
  color: ${colors.primary};
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  line-height: 86.836%;
  letter-spacing: 0.5px;
`;

const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const NavTab = styled(NavLink)`
  text-decoration: none;
  padding: 0 30px;
  padding-bottom: 14px;
  border-bottom: 3px solid transparent;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &.active {
    color: ${colors.primary};
    border-bottom: 3px solid ${colors.primary};
  }
`;

const AnauthenticatedHeader = () => {
  return (
    <Header>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <StyledSlogan> Food for Everyone </StyledSlogan>
      </LogoWrapper>
      <NavBarWrapper>
        <NavTab to={"login"}>Login</NavTab>
        <NavTab to={"signup"}>Sign-up</NavTab>
      </NavBarWrapper>
    </Header>
  );
};

export default AnauthenticatedHeader;
