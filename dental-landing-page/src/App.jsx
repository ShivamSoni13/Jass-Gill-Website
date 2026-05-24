import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import BeforeAfter from "./components/BeforeAfter"
import Offer from "./components/Offer"
import BookingForm from "./components/BookingForm"
import Reviews from "./components/Reviews"
import FAQ from "./components/FAQ"
import StickyCTA from "./components/StickyCTA"
import Footer from "./components/Footer"
import CookieBanner from "./components/CookieBanner"
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <BeforeAfter />
        <Offer />
        <Reviews />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <CookieBanner />
    </>
  )
}

export default App