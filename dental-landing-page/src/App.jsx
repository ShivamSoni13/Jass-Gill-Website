import Navbar        from "./components/Navbar"
import Hero          from "./components/Hero"
import BeforeAfter   from "./components/BeforeAfter"
import Benefits      from "./components/Benefits"
import Offer         from "./components/Offer"
import Reviews       from "./components/Reviews"
import MeetClinician from "./components/MeetClinician"
import BookingForm   from "./components/BookingForm"
import FAQ           from "./components/FAQ"
import StickyCTA     from "./components/StickyCTA"
import Footer        from "./components/Footer"
import CookieBanner  from "./components/CookieBanner"
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Benefits />
        <Offer />
        <Reviews />
        <MeetClinician />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <CookieBanner />
    </>
  )
}

export default App