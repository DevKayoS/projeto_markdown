import {useState, useEffect, useRef} from "react"
import {marked} from "marked"

import { ToolBar } from "./components/toolBar"

export function App() {
  const [text, setText] = useState(localStorage.getItem("markdownText") || "# Olá, eu sou feito de markdown")

  const renderText = () => {
    return {__html: marked(text)}
  }

  const textAreaRef = useRef(null)
  

  useEffect(()=>{
    localStorage.setItem("markdownText", text)
  }, [text])


  const insertText = (before: any, after:any) => {

    const textArea:any  = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previousText = textArea.value;
    const beforeText = previousText.substring(0, start)
    const selectText = previousText.substring(start, end)
    const afterText = previousText.substring(end)

    const newText = `${beforeText}${before}${selectText}${after}${afterText}`

    console.log(newText)

    setText(newText)

    textArea.focus()
  }

  return (
    <div className="flex  flex-col justify-center items-center space-y-10">
    <ToolBar insertText={insertText}/>
    <textarea ref={textAreaRef} 
    value={text} 
    className="border-2 p-5 size-[600px]"
    onChange={(e)=> setText(e.target.value)}
    ></textarea>
    <div className="p-8 text-3xl w-[600px] h-auto" dangerouslySetInnerHTML={renderText()}/>
    
    </div>
  )
}




