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
                            <FooterLink to='home'>Home</FooterLink>
                            <FooterLink to='about'>About</FooterLink>
                            <FooterLink to='roadmap'>Roadmap</FooterLink>                 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Community</FooterLinkTitle>
                            <FooterLink to='/'>Discord</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>Reddit</FooterLink>                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Markets</FooterLinkTitle>
                            <FooterLink to='/'>Solanart.io</FooterLink>
                            <FooterLink to='/'>Margiceden.io</FooterLink>
                            <FooterLink to='/'>Opensea.io</FooterLink>                  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Governance</FooterLinkTitle>
                            <FooterLink to='/'>Terms</FooterLink>
                            <FooterLink to='/'>Privacy</FooterLink>
                            <FooterLink to='/'>Charity</FooterLink>             
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
            </FooterWrap>       
        </FooterContainer>
    );
};

export default Footer;
