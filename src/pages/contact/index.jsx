import React from 'react'
import Layout from '@/components/Layout'
import Transition from '@/components/Transition'
import ContactMain from '@/components/ContactComponents/ContactMain'
import Footer from '@/components/Footer'


const index = () => {
    return (
        <Layout>
            <Transition />
            <div className='flex min-h-screen flex-col mx-auto'>
                <ContactMain />
                <Footer />
            </div>
        </Layout>
    )
}

export default index