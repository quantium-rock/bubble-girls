import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarWalletBtn, SidebarWalletBtnRoute } from './SidebarElements';
import Connect from '../Phantom/Connect';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="1">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="2">
                        Roadmap
                    </SidebarLink>
                    <SidebarWalletBtn>
                        <SidebarWalletBtnRoute onClick={Connect} to="/">Connect Wallet</SidebarWalletBtnRoute>
                    </SidebarWalletBtn>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
