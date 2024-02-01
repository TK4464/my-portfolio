import Footer from '@/components/Footer'
import Hero from '@/components/HomeComponents/Hero'
import HomeAbout from '@/components/HomeComponents/HomeAbout'
import HomeWork from '@/components/HomeComponents/HomeWorks'
import Layout from '@/components/Layout'
import Transition from '@/components/Transition'

export default function Home() {
    return (
        <Layout>
            <Transition />
            <div className='flex min-h-screen flex-col mx-auto lg:pb-0 '>
                <Hero />
                <HomeAbout />
                <HomeWork />
                <Footer />
            </div>
        </Layout>
    )
}
