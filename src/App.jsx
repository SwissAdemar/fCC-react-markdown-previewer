import React from 'react'
import "./styles/App.scss"
import "./styles/markdown.scss"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'



const test = "# Welcome to my React Markdown Previewer!\n## This is a sub-heading..\n### And here's some other cool stuff: Heres some code\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') {\n  return multiLineCode;\n }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n - Some are bulleted.\n  - With different indentation levels.\n   - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

const App = () => {

  const [input, setInput] = React.useState(test);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    
    <div className="wrapper">
      
      <div className="editor-wrapper">
        <p className="editor-title">Editor</p>
        <textarea 
          id="editor" 
          onChange={handleChange} 
          value={input}
          placeholder='Enter markdown text here...'
        >
        </textarea>
      </div>
      <div id="preview" className='markdown'>
        <ReactMarkdown remarkPlugins={remarkGfm}>{input}</ReactMarkdown>
      </div>
    </div>
  )

}

export default App
