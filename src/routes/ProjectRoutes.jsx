import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import SignupForm from '../components/SignupForm'
import SigninForm from '../components/SigninForm'
import BookingPage from '../pages/BookingPage'
import Hero from '../pages/Hero'
import Driver from '../pages/Driver'
import PaymentPage from '../pages/PaymentPage'
import ContactUs from '../pages/ContactUs'
// import Login from '../pages/Login'
// import Settings from '../pages/Settings'
// import Layout from '../Layouts/Layout'
// import Live from '../pages/Live'
// import Upcoming from '../pages/Upcoming'
// import Users from '../pages/Users'
// import YourBets from '../pages/YourBets'
// import Result from '../pages/Result'
// import Reports from '../pages/Reports'
// import MatchInformation from '../components/LiveMatchInfo/MatchInformation'

const ProjectRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<SigninForm />} />
                    <Route path='/signup' element={<SignupForm />} />
                    <Route path='/signin' element={<SigninForm />} />
                    <Route path='/hero' element={<Hero />}/>
                    <Route path="/booking/:id" element={<BookingPage />} />
                    <Route path='/driverinfo' element={<Driver />}/>
                    <Route path='/payment' element={<PaymentPage />}/>
                    <Route path='/contact' element={<ContactUs />}/>
                    {/* <Route path='/' element={<Live />}/>
                <Route path='/Match/:id' element={<MatchInformation />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/yourbets' element={<YourBets />}/>
                <Route path='/reports' element={<Reports />}/> */}
                </Route>
            </Routes>
        </Router>
    )
}

export default ProjectRoutes
