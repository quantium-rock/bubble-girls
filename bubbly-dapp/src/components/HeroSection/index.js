import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, Column1, TextWrapper, TopLine, SuperTitle, Heading2, Subtitle, Column2, ImgWrap, Img, ActionBtn, ActionBtnLink } from './HeroElements';
import Video from '../../videos/video11.mp4';
import { FaDiscord, FaTwitter, FaReddit } from 'react-icons/fa';
import { InfoRow, SocialMedia, SocialMediaWrap, SocialIcons,  SocialIconLink, ImgWrapper } from './HeroElements';
import img from '../../images/girl-front.png';

function HeroSection() {

    return (  
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
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
                                    <SocialIconLink href="https://discord.gg/RESGyJNJzR" target="_blank" aria-label="Discord">
                                        <FaDiscord />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://www.twitter.com/bubblegirlsnfts" target="_blank" aria-label="Twitter">
                                        <FaTwitter />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://www.reddit.com/u/bubblegirlsnft" target="_blank" aria-label="Reddit">
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
                    <ImgWrapper>
                        <ImgWrap>
                            <Img src={img} />
                        </ImgWrap>
                    </ImgWrapper>
                </Column2>
                
                </InfoRow>
            </HeroContent>
            
     </HeroContainer>
    );
};

export default HeroSection;
