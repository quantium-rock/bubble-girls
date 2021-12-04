import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaDiscord, FaTwitter, FaReddit } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Index</FooterLinkTitle>
                            <FooterLink to='/' onClick={toggleHome}>Home</FooterLink>
                            <FooterLink to='1' smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</FooterLink>
                            <FooterLink to='2' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Roadmap</FooterLink>                 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Community</FooterLinkTitle>
                            <FooterLink to='https://discord.gg/RESGyJNJzR'>Discord</FooterLink>
                            <FooterLink to='https://www.twitter.com/bubblegirlsnfts'>Twitter</FooterLink>
                            <FooterLink to='https://www.reddit.com/u/bubblegirlsnft'>Reddit</FooterLink>                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Solana Markets</FooterLinkTitle>
                            <FooterLink to='https://www.digitaleyes.market' target="_blank" aria-label="Digitaleyes">Digitaleyes</FooterLink>
                            <FooterLink to='https://www.margicedeon.io' target="_blank" aria-label="Margiceden">Margiceden</FooterLink>
                            <FooterLink to='https://www.solsea.io' target="_blank" aria-label="Soleea">Solsea</FooterLink>                  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Governance</FooterLinkTitle>
                            <FooterLink to='/' onClick={toggleHome}>Terms</FooterLink>
                            <FooterLink to='/' onClick={toggleHome}>Privacy</FooterLink>
                            <FooterLink to='/' onClick={toggleHome}>Charity</FooterLink>             
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            BUBBLEGIRLS
                        </SocialLogo>
                        <WebsiteRights>BubbleGirls © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
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
            </FooterWrap>       
        </FooterContainer>
    );
};

export default Footer;
