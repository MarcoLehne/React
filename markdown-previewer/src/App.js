import React, {useState} from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

function MarkdownPreviewer() {

  
  const [userInput, setUserInput] = useState("default")
  const [editorButton, setEditorButton] = useState("fa-solid fa-maximize")
  const [previewerButton, setPreviewerButton] = useState("fa-solid fa-maximize")  
  
  function handleTextareaChange(e){
    setUserInput(e.target.value)
  }

  return (
    <div className="MarkdownPreviewer">
      <div id="editor">
        <header>
          <div id="logo-text">
            <i className={"fa-brands fa-free-code-camp"} /><p>Editor</p>
          </div>
          <button>
            <i className={editorButton} />
          </button>
        </header>
        <textarea id="editor" onChange={handleTextareaChange} type="text" />
      </div>
      <div id="preview">
        <header>
          <div id="logo-text">
            <i className={"fa-brands fa-free-code-camp"} /><p>Editor</p>
          </div>
          <button>
            <i className={previewerButton} />
          </button>
        </header>
        <div id="dynamic">
          {userInput}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'))
