import React from 'react'
import Layout from '@/components/Layout'
import Transition from '@/components/Transition'
import Footer from '@/components/Footer'
import WorksMain from '@/components/WorksComponents/WorksMain'

const index = () => {
    return (
        <Layout>
            <Transition />
            <div className='flex min-h-screen flex-col mx-auto pt-4 lg:pt-6 mt-[110px] md:mt-[120px] lg:mt-[140px]'>
                <WorksMain />
                <Footer />
            </div>
        </Layout>
        
    )
}

export default index