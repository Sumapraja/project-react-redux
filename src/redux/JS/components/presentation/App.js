import React from 'react'
import List from '../container/list'
import Form from '../container/form'
const App = () => (
    <div className='row mt-4'>
        <div className='col-md-4 offset-md-1'>
            <h1>comments</h1>
            <List/>
            <Form/>
        </div>
    </div>
)

export default App