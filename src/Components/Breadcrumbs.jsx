import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Breadcrumbs = () => {
  const location = useLocation();
  
  const crumbs = () => {
    switch (location.pathname) {
      case "/about":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная</Crumb>
            <span> / </span>
            <Second> О нас</Second>
          </BreadCrumbs>
        );
        break;
      case "/news":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная</Crumb>
            <span> / </span>
            <Second>Новости</Second>
          </BreadCrumbs>
        );
        break;
      case "/collection":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная</Crumb>
            <span> / </span>
            <Second>Коллекции</Second>
          </BreadCrumbs>
        );
        break;
      case "/search":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная </Crumb>
            <span> / </span>
            <Second>Результаты поиска</Second>
          </BreadCrumbs>
        );
        break;
      case "/favorites":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная </Crumb>
            <span> / </span>
            <Second>Избранное</Second>
          </BreadCrumbs>
        );
        break;
      case "/cart":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная  </Crumb>
            <span> / </span>
            <Second>Корзина</Second>
          </BreadCrumbs>
        );
        break;
      case "/offer":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная </Crumb>
            <span> / </span>
            <Second>Публичная оферта</Second>
          </BreadCrumbs>
        );
        break;
      case "/help":
        return (
          <BreadCrumbs>
            <Crumb to={"/"}>Главная </Crumb>
            <span> / </span>
            <Second>Помощь</Second>
          </BreadCrumbs>
        );
        break;
      default:
        return null;
    }
  };

  return crumbs();
};

export default Breadcrumbs;

const BreadCrumbs = styled.div`
    background-color: #fff;
    height: 60px;
    width: 100%;
    padding: 0px 99px;    
    display: flex;
    align-items: center;
    border: 1px solid #EEEEEE;
`
const Crumb = styled(Link)`
    color: black; 
    text-decoration: none;
    padding-right: 16px;
`
const Second = styled.span`
    color: #979797;
    padding-left: 16px ;
`


