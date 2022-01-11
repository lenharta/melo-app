import axios from 'axios'
import { useState } from 'react'

// Spotify API
export const Credentials = () => {
  return {
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET
  }
}