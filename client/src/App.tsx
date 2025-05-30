import React, { useState } from 'react'
import './App.css'

interface Destination {
  city: string
  description: string
  price: number
  rating: number
}

const popularDestinations: Destination[] = [
  {
    city: 'Paris, France',
    description: 'City of lights and romance',
    price: 85,
    rating: 4.8,
  },
  {
    city: 'Tokyo, Japan',
    description: 'Modern metropolis meets tradition',
    price: 95,
    rating: 4.8,
  },
  {
    city: 'Bali, Indonesia',
    description: 'Tropical paradise and culture',
    price: 45,
    rating: 4.8,
  },
]

const App: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  // Simple handlers to toggle forms
  const openSignIn = () => {
    setShowSignIn(true)
    setShowRegister(false)
  }
  const openRegister = () => {
    setShowRegister(true)
    setShowSignIn(false)
  }
  const closeForms = () => {
    setShowRegister(false)
    setShowSignIn(false)
  }

  // Simple form submit handlers (can be replaced with real auth logic)
  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Sign In submitted')
    closeForms()
  }
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Registration submitted')
    closeForms()
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">TravelMate</div>
        <div>
          <button className="sign-in-btn" onClick={openSignIn}>Sign In</button>
          <button className="register-btn" onClick={openRegister}>Register</button>
        </div>
      </header>

      {/* Conditional rendering of forms */}
      {showSignIn && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-btn" onClick={closeForms}>×</button>
            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <label>
                Username:
                <input type="text" name="username" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <button type="submit" className="primary-btn">Sign In</button>
            </form>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-btn" onClick={closeForms}>×</button>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label>
                Username:
                <input type="text" name="username" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <button type="submit" className="primary-btn">Register</button>
            </form>
          </div>
        </div>
      )}

      {/* Keep your existing sections below */}

      <section className="hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Plan, budget, and explore amazing destinations with our comprehensive travel companion</p>
        <div className="hero-buttons">
          <button className="primary-btn">Start Planning</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      <section className="features">
        <h2>All Your Travel Tools in One Place</h2>
        <p>Everything you need to plan and enjoy your perfect trip</p>
        <div className="feature-cards">
          <div className="card">
            <h3>Budget Calculator</h3>
            <p>Get low and high estimates for your trip expenses</p>
          </div>
          <div className="card">
            <h3>Currency Converter</h3>
            <p>Convert currencies with real-time exchange rates</p>
          </div>
          <div className="card">
            <h3>Local Services</h3>
            <p>Find ATMs, restaurants, and transportation options</p>
          </div>
          <div className="card">
            <h3>Trip Planning</h3>
            <p>Organize itineraries and track your adventures</p>
          </div>
        </div>
      </section>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {popularDestinations.map(({ city, description, price, rating }) => (
            <div key={city} className="destination-card">
              <div className="destination-city">{city}</div>
              <div className="destination-description">{description}</div>
              <div className="destination-price">From ${price}/day</div>
              <div className="destination-rating">⭐ {rating}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          TravelMate<br />
          Your ultimate travel companion for discovering amazing destinations around the world.
        </p>
        <p>© 2024 TravelMate. All rights reserved. Making travel planning simple and enjoyable.</p>
      </footer>
    </div>
  )
}

export default App
