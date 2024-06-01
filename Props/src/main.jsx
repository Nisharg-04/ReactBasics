import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let desc={
  name: "macbook",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas dicta laboriosam hic odio impedit suscipit, non molestiae. Maxime, incidunt temporibus mollitia recusandae a fuga quam inventore voluptate ullam. Magnam!",
  visit:"Ckick me"
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name="macbook" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas dicta laboriosam hic odio impedit suscipit, non molestiae. Maxime, incidunt temporibus mollitia recusandae a fuga quam inventore voluptate ullam. Magnam!" visit="click here" />
  </React.StrictMode>,
)
