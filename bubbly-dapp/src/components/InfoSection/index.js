import React from 'react';
import { Button } from '../Buttons';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Subtitle2, BtnWrap, Column2, ImgWrap, Img } from './InfoElements';
import Card from '../CardComponent/CardComponent.tsx';

function InfoSection( {lightBg, id, imgStart, topLine, headline, lightText, lightTextDesc, lightTextDesc2, description, description1, description2, description3, buttonLabel, img, alt, primary, dark, dark2 } ) {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Subtitle2 lightTextDesc={lightTextDesc}>{description1}</Subtitle2>
                            <Subtitle2 lightTextDesc={lightTextDesc}>{description2}</Subtitle2>
                            <Subtitle2 lightTextDesc={lightTextDesc}>{description3}</Subtitle2>

                            <BtnWrap>
                                <Button to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Card/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
