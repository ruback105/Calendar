import './App.css'
import { Navbar, Footer } from './components'
import {
  Login,
  Profile,
  Home,
  TermsConditions,
  PrivacyPolicy,
  ContactUs,
} from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDataLayerValue } from './DataLayer.js'
import Cookies from 'universal-cookie'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // TODO - create token expiration functionality
  const [{ userToken }, dispatch] = useDataLayerValue()
  const cookies = new Cookies()

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {!userToken ? (
            <Route path="/login" exact component={Login} />
          ) : (
            <Route path="/login" exact component={Profile} />
          )}
          {userToken ? (
            <Route path="/profile" exact component={Profile} />
          ) : (
            <Route path="/profile" exact component={Login} />
          )}
          <Route
            path="/terms-and-conditions"
            exact
            component={TermsConditions}
          />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/contact-us" exact component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
