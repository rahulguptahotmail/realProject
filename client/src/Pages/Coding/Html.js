import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Html = () => {

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
        <h1> What is HTML?</h1>
        <p>1. HTML stands for Hyper Text Markup Language</p>
        <p>2. HTML is the standard markup language for creating Web pages</p>
        <p>
          3. HTML describes the structure of a Web page HTML consists of a
          series of elements
        </p>
        <p>4. HTML elements tell the browser how to display the content</p>
        <p>
          5. HTML elements label pieces of content such as "this is a heading",
          "this is a paragraph", "this is a link", etc.
        </p>
      </div>
      <div className=" bg-body-tertiary px-5 py-3 rounded my-5">
        <p>&lt;!DOCTYPE html&gt;</p>
        <p>&lt;html&gt;</p>
        <p>&lt;head&gt;</p>
        <p>&lt;title&gt;Page Title&lt;/title&gt;</p>
        <p>&lt;/head&gt;</p>
        <p> &lt;body&gt;</p>

        <p>&lt;h1&gt;My First Heading&lt;/h1&gt;</p>
        <p>&lt;p&gt;My first paragraph.&lt;/p&gt;</p>

        <p>&lt;/body&gt;</p>
        <p>&lt;/html&gt;</p>
      </div>

      <div>
        <h1> Example Explained</h1>
        <p>
          The &lt;!DOCTYPE html&gt; declaration defines that this document is an
          HTML5 document
        </p>
        <p>The &lt;html&gt; element is the root element of an HTML page</p>
        <p>
          The &lt;head&gt; element contains meta information about the HTML page
        </p>
        <p>
          The &lt;title&gt; element specifies a title for the HTML page (which
          is shown in the browser's title bar or in the page's tab)
        </p>
        <p>
          The &lt;body&gt; element defines the document's body, and is a
          container for all the visible contents, such as headings, paragraphs,
          images, hyperlinks, tables, lists, etc.
        </p>
        <p>The &lt;h1&gt; element defines a large heading</p>
        <p>The &lt;p&gt; element defines a paragraph</p>
      </div>
      <hr />
      <div>
        <h1> The HTML Style Attribute</h1>
        <p>
          Setting the style of an HTML element, can be done with the style
          attribute.
        </p>

        <p>The HTML style attribute has the following syntax:</p>
      </div>

      <div className="bg-body-tertiary px-5 py-3 rounded my-5">
        &lt;tagname style="property:value;"&gt;
      </div>

      <hr />

      <div>
        <h1>HTML Comment Tag</h1>
        <p>
          You can add comments to your HTML source by using the following
          syntax:
        </p>
      </div>

      <div className="bg-body-tertiary px-5 py-3 rounded my-5">
        <p>&lt;!-- Write your comments here --&gt;</p>
      </div>

      <hr />
      <div>
        <h1>Define an HTML Table</h1>
        <p>A table in HTML consists of table cells inside rows and columns.</p>
      </div>

      <div className="bg-body-tertiary px-5 py-3 rounded my-5">
        <p>&gt;table&gt;</p>
        <p>&lt;tr&gt;</p>
        <p>&lt;th&gt;Company&lt;/th&gt;</p>
        <p>&lt;th&gt;Contact&lt;/th&gt;</p>
        <p>&lt;th&gt;Country&lt;/th&gt;</p>
        <p>&lt;/tr&gt;</p>
        <p>&lt;tr&gt;</p>
        <p>&lt;td&gt;Alfreds Futterkiste&lt;/td&gt;</p>
        <p>&lt;td&gt;Maria Anders&lt;/td&gt;</p>
        <p>&lt;td&gt;Germany&lt;/td&gt;</p>
        <p>&lt;/tr&gt;</p>
        <p>&lt;tr&gt;</p>
        <p>&lt;td&gt;Centro comercial Moctezuma&lt;/td&gt;</p>
        <p>&lt;td&gt;Francisco Chang&lt;/td&gt;</p>
        <p>&lt;td&gt;Mexico&lt;/td&gt;</p>
        <p>&lt;/tr&gt;</p>
        <p>&lt;/table&gt;</p>
      </div>

      <hr />

      <div>
        <h1>HTML Block and Inline Elements</h1>
        <p>
          Every HTML element has a default display value, depending on what type
          of element it is.
        </p>

        <p>The two most common display values are block and inline.</p>
      </div>

      <div>
        <h1>Block-level Elements</h1>
        <p>
          A block-level element always starts on a new line, and the browsers
          automatically add some space (a margin) before and after the element.
        </p>
        <p>
          A block-level element always takes up the full width available
          (stretches out to the left and right as far as it can).
        </p>
      </div>

      <hr />
     

      <hr/>

      <div>
     <h1> Example</h1>
     <p>
      A form with input fields for text:
      </p>
      </div>

      <div className="bg-body-tertiary px-5 py-3 rounded my-5">

      <p>&lt;form action="/action_page.php"&gt;</p>
      <p> &lt;label for="fname"&gt;First name:&lt;/label&gt;&lt;br&gt;</p>
      <p> &lt;input type="text" id="fname" name="fname" value="John"&gt;&lt;br&gt;</p>
      <p> &lt;label for="lname"&gt;Last name:&lt;/label&gt;&lt;br&gt;</p>
      <p> &lt;input type="text" id="lname" name="lname" value="Doe"&gt;&lt;br&gt;&lt;br&gt;</p>
      <p> &lt;input type="submit" value="Submit"&gt;</p>
      <p>&lt;/form&gt;</p>
      </div>
      <h1 className=' bg-info rounded py-3 px-3'>Coming Soon...</h1>
    </div>
  );
};

export default Html;
