import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import COLORS from '../Colors';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1024px;
    position: relative;
    z-index: 1;
    width: 100%;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient( 180deg, rgba(0,0,0,0.2) 0%,  rgba(0,0,0,0.6) 100% ), linear-gradient( 180deg, rgba(0,0,0,0.2) 0%, transparent 100% );
        z-index: 2;
        width: 100%;
    }

`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: transparent;
    filter: brightness(100%);

    position: fixed;
    z-index: 1;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1000px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const InfoContainer = styled.div`
    color: ${COLORS.white};
    background: ${ ({lightBg}) => ( lightBg ? COLORS.white2 : COLORS.black2 ) };

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 4;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 888px) {
        max-width: 444px;
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    z-index: 4;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 888px) {
        max-width: 444px;
        z-index: 11;
        position: relative;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col2';
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 768px) {
        margin-left: 30%;
    }
`;

export const Column2 = styled.div`
    justify-content: center;
    align-items: center;
    grid-area: col2;
    margin: 60px;

    @media screen and (max-width: 800px) {
        display: flex;
    }
`;

export const Column3 = styled.div`
    justify-content: center;
    align-items: center;
    grid-area: col3;
    margin: 60px;

    @media screen and (max-width: 1400px) {
        display: none;
    }
`;

export const TextWrapper = styled.div`
    max-width: 444px;
    padding-top: 22px;
    margin-right: 80px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 888px) {
        padding-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
        z-index: 22;
        position: relative;
    }
`;

export const TopLine = styled.p`
    text-align: center;
    background: -webkit-linear-gradient(180deg,${COLORS.tertiary}, ${COLORS.primary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    transition: 0.3s ease-in-out;

    &:hover {
        transition: 0.3s ease-in-out;
        background-position: left 2px;
        background: -webkit-linear-gradient(180deg,${COLORS.primary}, ${COLORS.secondary}, ${COLORS.tertiary} );
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
        text-shadow: 0px 0px 11px ${COLORS.white2};
    } 
`;

export const SuperTitle = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    font-size: 77px;
    line-height: 1.1;
    font-weight: 800;
    color: ${COLORS.white};
    text-shadow: 0px 0px 28px ${COLORS.secondary};
    transition: 2.2s ease-in-out;

    &:hover {
        font-size: 222px;
        transition: 3.2s ease-in-out;
        text-decoration: none;
        color: ${COLORS.primary}       
    }

    @media screen and (max-width: 666px) {
        font-size: 88px;
    }

    @media screen and (max-width: 444px) {
        font-size: 66px;
    }
`;

export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    font-size: 77px;
    line-height: 1.1;
    font-weight: 800;
    color: ${COLORS.white};
    text-shadow: 0px 0px 28px ${COLORS.secondary};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Heading2 = styled.h2`
    text-align: center;
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 800;
    color: ${COLORS.white};
    text-shadow: 0px 0px 28px ${COLORS.secondary};
    padding-top: 34px;
    font-size: 33px;

    &:hover {
        text-shadow: 0px 0px 57px ${COLORS.primary};
    }


`;

export const Subtitle = styled.h2`
    text-align: center;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 300;
    color: ${COLORS.tertiary};
    padding-top: 4px;

    &:hover {
        text-shadow: 0px 0px 28px ${COLORS.white};
    }

    @media screen and (max-width: 888px) {
        font-size: 22px;
        padding: 12px;
    }
`;

export const BtnWrap = styled.div`
    margin: 24px;
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 927px;
    align-items: bottom;
    justify-content: bottom;
    margin-right: -155px;    
    margin-bottom: -70px;
    position: fixed;
    z-index: 4;
 
`;

export const Img = styled.img`
    width: 888px;
    transition: 2.2s ease-in-out;

    &:hover {
        transition: 2.2s ease-in-out;
        width: 1277px;      
    }

    @media screen and (max-width: 666x) {
        width: 444px;
    }

`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div` 
    display: flex;
    margin: 32px ;
    justify-content: center;
    align-items: center;
    max-width: 1100px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    padding: 16px;
`;

export const SocialIconLink = styled.a`
    transition: 0.6s ease-in-out;
    color: ${COLORS.white};
    font-size: 32px;
    margin: 14px 0 14px;
    padding: 16px;

    &:hover {
        transition: 0.3s ease-in-out;
        color: ${COLORS.secondary};
        font-size: 42px;
    }
`;

export const ActionBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ActionBtnRoute = styled(LinkR)`
    background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.secondary}  100%, ${COLORS.tertiary}  200%);   
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: ${COLORS.white};            
    box-shadow: 0 0 7px ${COLORS.tertiary};
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
        color: ${COLORS.black};
        box-shadow: 0 0 14px ${COLORS.secondary};
        text-decoration: none;
    } 
`;

export const ActionBtnLink = styled(LinkS)`
    background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.secondary}  100%, ${COLORS.tertiary}  200%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: ${COLORS.white};            
    box-shadow: 0 0 7px ${COLORS.tertiary};
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
        color: ${COLORS.black};
        box-shadow: 0 0 14px ${COLORS.secondary};
        text-decoration: none;
    } 
`;
