import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from './screens/Auth/LoginScreen'
import RegisterScreen from './screens/Auth/RegisterScreen.web'
import ResetPasswordScreen from './screens/Auth/ResetPasswordScreen.web'
import HomeScreen from './screens/Dashboard/HomeScreen'
import UserProfileScreen from './screens/Profile/UserProfileScreen'
import SearchScreen from './screens/Search/SearchScreen'
import SettingsScreen from './screens/Settings/SettingsScreen'
import PlaceholderScreen from './screens/PlaceholderScreen'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/profile" element={<UserProfileScreen />} />
          <Route path="/edit-profile" element={<PlaceholderScreen />} />
          <Route path="/settings" element={<PlaceholderScreen />} />
          <Route path="/list" element={<PlaceholderScreen />} />
          <Route path="/detail" element={<PlaceholderScreen />} />
          <Route path="/item-detail/:id" element={<PlaceholderScreen />} />
          <Route path="/search" element={<PlaceholderScreen />} />
          <Route path="/notifications" element={<PlaceholderScreen />} />
          <Route path="/form" element={<PlaceholderScreen />} />
          <Route path="/payment" element={<PlaceholderScreen />} />
          <Route path="/transaction-details" element={<PlaceholderScreen />} />
          <Route path="/success" element={<PlaceholderScreen />} />
          <Route path="/order-history" element={<PlaceholderScreen />} />
          <Route path="/help-support" element={<PlaceholderScreen />} />
          <Route path="/admin" element={<PlaceholderScreen />} />
          <Route path="/location" element={<PlaceholderScreen />} />
          <Route path="/assigned-orders" element={<PlaceholderScreen />} />
          <Route path="/raport" element={<PlaceholderScreen />} />
          <Route path="/add-raport" element={<PlaceholderScreen />} />
          <Route path="/user-rapports" element={<PlaceholderScreen />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
