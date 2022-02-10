import React from 'react'
import Footer from '../../components/Common/Footer'
import Navbar from '../../components/Common/Navbar'
import Aktionen from '../../components/Aktion/Aktionen'

function index() {
    return (
        <div>
            <Navbar />
            <Aktionen />
            <Footer />
        </div>
    )
}

export default index
