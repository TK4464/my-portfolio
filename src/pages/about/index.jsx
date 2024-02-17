import Layout from '@/components/Layout'
import Transition from '@/components/Transition'
import Footer from '@/components/Footer'
import AboutMain from '@/components/AboutComponents/AboutMain'
import AboutCareer from '@/components/AboutComponents/AboutCareer'
import AboutSkills from '@/components/AboutComponents/AboutSkills'

const index = () => {
    return (
        <Layout>
            <Transition />
            <div className='flex min-h-screen flex-col mx-auto pt-4 lg:pt-6 mt-[110px] md:mt-[120px] lg:mt-[140px]'>
                <AboutMain />
                <AboutCareer />
                <AboutSkills />
                <Footer />
            </div>
        </Layout>
    )
}

export default index