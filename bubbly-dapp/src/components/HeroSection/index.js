import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, Column1, TextWrapper, TopLine, SuperTitle, Heading2, Subtitle, Column2, ImgWrap, Img, ActionBtn, ActionBtnLink } from './HeroElements';
import Video from '../../videos/video11.mp4';
import { FaDiscord, FaTwitter, FaReddit } from 'react-icons/fa';
import { InfoRow, SocialMedia, SocialMediaWrap, SocialIcons,  SocialIconLink, InfoWrapper } from './HeroElements';
import img from '../../images/girl-front.png';


function HeroSection() {

    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    const videoRef= VideoBg;
    const setPlayBack = () => {
        VideoBg.playbackRate = '1';
      };

    return (
        
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} onCanPlay={() => setPlayBack()} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>NFT + MUSIC + METAVERSE</TopLine>
                        <SuperTitle>BUBBLE GIRLS</SuperTitle>
                        <Subtitle>750 UNIQUE NFTs DROPING IN THE SOLANA BLOCKCHAIN</Subtitle>
                        <Heading2>MINT FOR 0.22 SOL LAUNCH 09-12</Heading2>
                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialIcons>
                                    <SocialIconLink href="//www.discord.com/" target="@0friendsclub" aria-label="Discord">
                                        <FaDiscord />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.twitter.com/" target="@0friendsclub" aria-label="Twitter">
                                        <FaTwitter />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.reddit.com/" target="_blank" aria-label="Reddit">
                                        <FaReddit />
                                    </SocialIconLink>
                                </SocialIcons>
                            </SocialMediaWrap>
                        </SocialMedia>
                        <ActionBtn>
                            <ActionBtnLink to="1" smooth={true} duration={500} spy={true} exact="true" offset={-80}>CANDY MACHINE</ActionBtnLink>
                        </ActionBtn>                  
                    </TextWrapper>
                </Column1>
                <Column2>
                    <InfoWrapper>
                        <ImgWrap>
                            <Img src={img} />
                        </ImgWrap>
                    </InfoWrapper>
                </Column2>
                
                </InfoRow>
            </HeroContent>
            
     </HeroContainer>
    );
};

export default HeroSection;
