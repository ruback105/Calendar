import './App.css'
import { Navbar, Footer } from './components'
import { Login, Profile, Home, TermsConditions, PrivacyPolicy } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route
            path="/terms-and-conditions"
            exact
            component={TermsConditions}
          />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
