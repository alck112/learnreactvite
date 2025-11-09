import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './8-todolist/ToDoList.jsx'
import ToDoList from "./8-todolist/ToDoList.jsx";
// import ButtonAppBar from './LoginBar.jsx'
// import App from './ant-layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <ToDoList></ToDoList>
  </StrictMode>,
)
