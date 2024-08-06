import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Css = () => {

  const navigate = useNavigate()
  const authentication = ()=>{
    const token = localStorage.getItem('token');
    if(!token)
    {
      navigate('/login')
    }
  }
  useEffect(()=>{
        authentication();
  },[])
  return (
    <div className="container bg-body-secondary p-5 rounded">
      <div>
        <h1>What is CSS?</h1>
        <p>CSS stands for Cascading Style Sheets</p>
        <p>
          CSS describes how HTML elements are to be displayed on screen, paper,
          or in other media
        </p>
        <p>
          CSS saves a lot of work. It can control the layout of multiple web
          pages all at once
        </p>
        <p>External stylesheets are stored in CSS files</p>
      </div>
      <hr/>

      <div>
      <h1>CSS Syntax</h1>
      <p>
      CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
      </div>
    <hr/>
    <div>
   <h1> CSS Selectors</h1><p>
CSS selectors are used to "find" (or select) the HTML elements you want to style.</p><p>

We can divide CSS selectors into five categories:</p><p>

Simple selectors (select elements based on name, id, class)</p><p>
Combinator selectors (select elements based on a specific relationship between them)</p><p>
Pseudo-class selectors (select elements based on a certain state)</p><p>
Pseudo-elements selectors (select and style a part of an element)</p><p>
Attribute selectors (select elements based on an attribute or attribute value)</p>
    </div>
    <h1 className=' bg-info rounded py-3 px-3'>Coming Soon...</h1>
    </div>
  );
};

export default Css;
