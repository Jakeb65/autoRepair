import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from './src/screens/Auth/LoginScreen'
import RegisterScreen from './src/screens/Auth/RegisterScreen.web'
import ResetPasswordScreen from './src/screens/Auth/ResetPasswordScreen.web'
import SearchScreen from './src/screens/Search/SearchScreen'
import SettingsScreen from './src/screens/Settings/SettingsScreen'
import UserProfileScreen from './src/screens/Profile/UserProfileScreen'
import HomeScreen from './src/screens/Dashboard/HomeScreen'
import PlaceholderScreen from './src/screens/PlaceholderScreen'
import { ThemeProvider } from './src/screens/ThemeContext/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/profile" element={<UserProfileScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<PlaceholderScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
