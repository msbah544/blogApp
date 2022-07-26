import {BrowserRouter, Link, Route, Navigate, Routes} from 'react-router-dom'

<Route path="/about" element={<About/>}/>

<Route path="/redirect" element={<Navigate to="/about"/>}/>
