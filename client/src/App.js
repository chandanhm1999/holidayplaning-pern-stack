import './App.css';
import Auth from './components/Auth';
import ListHeader from './components/ListHeader';
import ListItem from "./components/ListItem"
import { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie'
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';

const App = () => {

  const [cookies, setCookie, removeCookie] = useCookies(null)  //for creating cookies

  const authToken = cookies.AuthToken
  const userEmail = cookies.Email         //to get the email we are using the cookies

  const [tasks, setTasks] = useState(null);

  const getData = async () => {

    try{
      const responce = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await responce.json()
      // console.log(json)
      setTasks(json)
    } catch (err){
      console.error(err)
    }
  }

  useEffect(() =>  {
    if (authToken) {
      getData()
    }}
  , [])

  console.log(tasks)

  //Sort by date
  const sortedTaskes = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='name'>
    <Nav />
    <div className='app'>
      
      {!authToken && <Auth /> }
      {authToken && 
        <>
        <ListHeader listName={'Holidays Plan list 🌴'} getData={getData}/>
        
        <p className='user-email'>Welcome back {userEmail}</p>
      {sortedTaskes?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)} 
      </>}
      <p className='copy-right'>@ Creative Coding Cdevops</p>
    </div>
    <Footer />
    </div>
  )
}

export default App;
