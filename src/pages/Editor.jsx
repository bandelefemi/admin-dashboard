import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, 
  RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor'

  import { Header } from '../components'
  // import { EditorData } from '../data/dummy'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title={'Editor'} category='App' />
      <RichTextEditorComponent
       height={'500px'} >
        {/* <EditorData /> */}
        <Inject services={[Image, Link, QuickToolbar, Toolbar, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
