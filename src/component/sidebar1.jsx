import React from "react";
import { Sidebar, Icon, Item, Logo, LogoText } from "react-sidebar-ui";
import "react-sidebar-ui/dist/index.css";

const SideBar1 = () => {
  return (
    <div className="container">
      <Sidebar className="mt-4" bgColor="blue" isCollapsed={false}>
        <Logo image="" imageName="" />
        <LogoText></LogoText>
        <br />
        <br />
        <Item bgColor="blue">
          <Icon>
            <i className="fas fa-home" />
          </Icon>
          Home
        </Item>
        <Item bgColor="blue">
          <Icon>
            <i className="fas fa-info" />
          </Icon>
          About
        </Item>
        <Item bgColor="blue">
          <Icon>
            <i className="fas fa-sitemap" />
          </Icon>
          My Website
        </Item>
        <Item bgColor="blue">
          <Icon>
            <i className="far fa-address-book" />
          </Icon>
          Contacts
        </Item>
        <Item bgColor="blue">
          <Icon>
            <i className="fas fa-rss-square" />
          </Icon>
          Blog
        </Item>
      </Sidebar>
    </div>
  );
};

export default SideBar1;
