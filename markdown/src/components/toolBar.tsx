interface Props {
  insertText(before: any, after:any): any
}

export function ToolBar({insertText}: Props){
  return (
    <div className="flex  gap-2 m-20">
      <button onClick={()=> insertText("# ",'')} className="bg-teal-400 rounded-md  px-4 py-2 hover:bg-teal-700 hover:text-slate-50">h1</button>
      <button onClick={()=> insertText("## ",'')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">h2</button>
      <button onClick={()=> insertText("**",'**')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">Bold</button>
      <button onClick={()=> insertText("*",'*')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">Italic</button>
      <button onClick={()=> insertText("[",'](https://)')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">Link</button>
      <button onClick={()=> insertText("```",'```')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">Code Block</button>
      <button onClick={()=> insertText("- ",'')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">List Item</button>
      <button onClick={()=> insertText("\n---\n",'')} className="bg-teal-400 rounded-md px-4 py-2 hover:bg-teal-700 hover:text-slate-50">Horizontal Line</button>
    </div>
  )
}