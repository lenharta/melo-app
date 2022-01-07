import { useEffect, useState } from 'react'
import { Credentials } from '../utils'
import axios from 'axios'


const Top5 = () => {
  const [token, setToken] = useState('')
  const spotify = Credentials()

  // console.log('RENDERING APP.JS')

  useEffect(() => {
    // Retrieve Token call
    axios('https://accounts.spotify.com/api/token', {
			'method': 'POST',
			'headers': {
				 'Content-Type':'application/x-www-form-urlencoded',
				 'Authorization': 'Basic ' + btoa(spotify.clientId + ':' + spotify.clientSecret),
			},
			data: 'grant_type=client_credentials'

		}).then(tokenresponse => {
			console.log(tokenresponse.data.access_token);
			setToken(tokenresponse.data.access_token);

		}).catch(error => console.log(error));
	},[spotify.clientId, spotify.clientSecret])


  return (
    <>
      <h1>Top 5</h1>
    </>
  )
}

export default Top5

// btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)
// const ClientId = process.env.REACT_APP_CLIENT_ID
// const ClientSecret = process.env.REACT_APP_CLIENT_SECRET