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
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2' 'col3 col3';
    }
`;


export const Column1 = styled.div`
    grid-area: col1;
    width: 220px;
    align-items: right;

`;

export const Column2 = styled.div`
    grid-area: col2;
    width: 680px;
    align-items: left;

`;

export const Column3 = styled.div`
    grid-area: col3;
    width: 280px;
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
    font-size: 77px;
 
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    display: flex;
    text-align: right;
  
`;

export const Text = styled.h1`
    max-width: 660px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: ${COLORS.white2};
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 32px;
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

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

