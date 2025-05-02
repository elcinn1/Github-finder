import React, { useEffect, useState } from 'react'
import Headr from './components/Headr'
import Search from './components/Search'
import UsersList from './components/UsersList'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState([]);
  const dataSubmit = (keyword ) => {
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => setUser(res.data.items))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Headr />
      <Search sendKeyword={dataSubmit} />
      <UsersList sendData={user} />
    </>
  )
}

export default App