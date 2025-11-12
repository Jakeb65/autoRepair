import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../utils/api'
import './Dashboard.css'

const HomeScreen: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    await logout()
    navigate('/login')
  }

  const menuItems = [
    { path: '/profile', label: '👤 Profil', desc: 'Moje dane' },
    { path: '/payment', label: '💳 Płatności', desc: 'Historia płatności' },
    { path: '/raport', label: '📋 Raporty', desc: 'Moje raporty' },
    { path: '/search', label: '🔍 Szukaj', desc: 'Wyszukaj mechaników' },
    { path: '/notifications', label: '🔔 Powiadomienia', desc: 'Nowe wiadomości' },
    { path: '/settings', label: '⚙️ Ustawienia', desc: 'Preferencje' },
  ]

  // Static sample data for the main card
  const upcomingAppointment = {
    vehicle: 'Toyota Corolla 2016',
    service: 'Przegląd + wymiana oleju',
    date: '2025-11-20 10:30',
    mechanic: 'Jan Kowalski',
    status: 'Potwierdzona',
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🔧 AutoRepair</h1>
        <button onClick={handleLogout} disabled={loading} className="btn-logout home-logout">
          {loading ? 'Wylogowywanie...' : 'Wyloguj'}
        </button>
      </header>

      {/* Top horizontal menu bar with all tiles */}
      <div className="top-menu-bar">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="top-menu-card"
          >
            <div className="menu-icon">{item.label.split(' ')[0]}</div>
            <div className="top-menu-label">{item.label.split(' ').slice(1).join(' ')}</div>
          </button>
        ))}
      </div>

      <main className="dashboard-main">
        <section className="welcome-section">
          <h2>Witaj w systemie!</h2>
          <p>Zarządzaj swoimi naprawami i serwisami</p>
        </section>

        {/* Main content area with a static appointment card */}
        <div className="content-area">
          <div className="appointment-card">
            <div className="appointment-header">
              <h3>Następna wizyta</h3>
              <span className="status">{upcomingAppointment.status}</span>
            </div>

            <div className="appointment-body">
              <p><strong>Pojazd:</strong> {upcomingAppointment.vehicle}</p>
              <p><strong>Usługa:</strong> {upcomingAppointment.service}</p>
              <p><strong>Data:</strong> {upcomingAppointment.date}</p>
              <p><strong>Mechanik:</strong> {upcomingAppointment.mechanic}</p>
            </div>

            <div className="appointment-actions">
              <button className="btn-primary" onClick={() => alert('Umówiono wstępnie — demo')}>Umów nową wizytę</button>
              <button className="btn-secondary" onClick={() => alert('Szczegóły — demo')}>Szczegóły</button>
            </div>
          </div>

          {/* Placeholder or future widgets area */}
          <div className="spacer-card">
            <h3>Twoje zadania</h3>
            <p>Brak aktywnych zadań. Możesz umówić nową wizytę lub sprawdzić historię.</p>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>© 2025 AutoRepair</p>
      </footer>
    </div>
  )
}

export default HomeScreen
