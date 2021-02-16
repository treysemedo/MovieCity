import React, { useState } from 'react'
//react touter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import { AuthProvider } from './pages/contexts/AuthContext'
//pages
import Error from './pages/Error'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Player from './pages/Player'

const App = () => {
  const [userEmail, setUserEmail] = useState('')
  function handleSignIn(email) {
    setUserEmail(email)
  }

  function handleSignOut(email) {
    setUserEmail('')
  }

  return (
    <Router>
      <NavBar email={userEmail} handleSignOut={handleSignOut} />
      <AuthProvider>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/search/:query' children={<Search />}></Route>
          <Route
            path='/movie/:id'
            children={<Movie email={userEmail} />}
          ></Route>
          <Route
            path='/signin'
            children={<SignIn onSignIn={handleSignIn} />}
          ></Route>
          <Route path='/signup' children={<SignUp />}></Route>
          <Route
            path='/profile'
            children={<Profile email={userEmail} />}
          ></Route>
          <Route path='/player' children={<Player />}></Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
