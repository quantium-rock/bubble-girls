import styled from "styled-components";
import COLORS from "../Colors";

export const InfoContainer = styled.div`
    color: ${COLORS.black};
    background: ${COLORS.black};
    height: 920px;
    width: 100%;
    z-index: 6;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 100px 20px;
    }

`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 7;
    height: 722px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        max-width: 666px;
        margin-left: -22px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 444px) {
        grid-template-areas: 'col1' 'col2' 'col3';
        margin: 24px;
    }
`;


export const Column1 = styled.div`
    grid-area: col1;
    width: 144px;
    align-items: right;

    @media screen and (max-width: 888px) {
        width: 200px;
    }

    @media screen and (max-width: 666px) {
        width: 100px;
        align-items: center;
        justify-content: center;
    }
`;

export const Column2 = styled.div`
    grid-area: col2;
    width: 680px;
    align-items: left;

    @media screen and (max-width: 888px) {
        width: 444px;
    }

    @media screen and (max-width: 666px) {
        width: 333px;
    }
`;

export const Column3 = styled.div`
    grid-area: col3;
    width: 144px;

    @media screen and (max-width: 888px) {
        width: 88px;
    }
`;

export const Number = styled.p`
    background: -webkit-linear-gradient(180deg,${COLORS.tertiary}, ${COLORS.secondary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 77px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    display: flex;
    text-align: right;

    @media screen and (max-width: 888px) {
        font-size: 33px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 66px;
    margin-bottom: 33px;

`;

export const Date = styled.p`
    background: -webkit-linear-gradient(90deg,${COLORS.tertiary}, ${COLORS.secondary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
 
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    display: flex;
    text-align: right;

    @media screen and (max-width: 888px) {
        font-size: 22px;
    }
`;

export const Text = styled.h1`
    max-width: 660px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: ${COLORS.white2};
    text-align: left;

    @media screen and (max-width: 888px) {
        font-size: 20px;
        margin: 10px;
    }

    @media screen and (max-width: 666px) {
        font-size: 14px;
        margin: 8px;
    }
`;

export const Row = styled.div`
    grid-area: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    margin: 25px;
    font-size: 57px;
    line-height: 1.1;
    font-weight: 600;
    background: -webkit-linear-gradient(180deg,${COLORS.tertiary}, ${COLORS.secondary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 666px) {
        font-size: 44px;
    }
`;

