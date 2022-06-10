import React from 'react'
import Link from "next/link";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarText,
  Container,
  Row,
  Col,
} from "reactstrap";
//import * as contactdetail from "../Constants"
import logo from "../public/new-logo11.png";
import Image from "next/image";
import Head from "next/head";

export default function Newnav() {
    return (
        <div>
           <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div> 
        </div>
    )
}
