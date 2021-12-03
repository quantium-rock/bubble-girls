import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import COLORS from '../Colors';

export const Nav = styled.nav`
    background: ${ ({scrollNav}) => ( scrollNav ? COLORS.black : 'transparent' ) };
    height: 86px;
    margin-top: -86px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    text-decoration: none;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`

    transition: 0.3s ease-in-out;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: left; 
    font-weight: bold;
    text-decoration: none;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    background: -webkit-linear-gradient(180deg,${COLORS.tertiary}, ${COLORS.secondary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 26px;
    
    &:hover {
        transition: 0.3s ease-in-out;
        background: -webkit-linear-gradient(180deg,${COLORS.primary}, ${COLORS.primary}, ${COLORS.tertiary} );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      
        text-decoration: none;
        text-shadow: 0px 0px 27px ${COLORS.primary};
        font-size: 28px;
    }
`;

export const LogoWrap = styled(LinkR)`
    justify-self: flex-start;
    max-width: 555px;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
`;

export const Logo = styled.img`
    height: 25px;

    &:hover {
        height: 26px;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${COLORS.white};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    text-decoration: none;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;  
`;

export const NavLinks = styled(LinkS)`
    color: ${COLORS.white};
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: 0.4s ease-in-out;

    &:hover {
        background: -webkit-linear-gradient(180deg,${COLORS.primary}, ${COLORS.secondary}, ${COLORS.tertiary} );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        transition: 0.2s ease-in-out;
        text-decoration: none;
        text-shadow: 0px 0px 22px ${COLORS.white};
    }

    &.active {
        border-bottom: 3px solid ${COLORS.primary};
        border-image: 3px linear-gradient(90deg, ${COLORS.tertiary} 0%, ${COLORS.secondary} 50%, ${COLORS.primary} 80% );
        background: -webkit-linear-gradient(180deg, ${COLORS.tertiary} 0%, ${COLORS.secondary} 50%, ${COLORS.primary} 80% );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        text-shadow: white 20px;
        transition: 0.2s ease-in-out;
        text-decoration: none;
    }
`;

export const NavbarWalletBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavbarWalletBtnRoute = styled(LinkR)`
    background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.secondary}  90%, ${COLORS.tertiary}  130%);
    margin: 10px;
    text-align: center;
    transition: 0.5s;
    background-size: 150% auto;
    color: ${COLORS.grey};            
    box-shadow: 0 0 7px ${COLORS.primary};
    border-radius: 50px;
    display: block;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;


    &:hover {
        font-size: 16px;
        background-position: right 200px;
        color: ${COLORS.white2};
        box-shadow: 0 0 14px ${COLORS.secondary};
        text-decoration: none;
    } 
`;

export const NavbarWalletBtnConnect = styled.div`
    background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.secondary}  90%, ${COLORS.tertiary}  130%);
    margin: 10px;
    text-align: center;
    transition: 0.5s;
    background-size: 150% auto;
    color: ${COLORS.grey};            
    box-shadow: 0 0 7px ${COLORS.primary};
    border-radius: 50px;
    display: block;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;


    &:hover {
        font-size: 16px;
        background-position: right 200px;
        color: ${COLORS.white2};
        box-shadow: 0 0 14px ${COLORS.secondary};
        text-decoration: none;
    } 
`;
