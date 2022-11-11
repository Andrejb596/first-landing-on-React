import { Header, FirstSection, StartUsing, Serve, Benefits, TestImonials, ContactUs } from './components'

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <FirstSection />
      <StartUsing />
      <Serve />
      <Benefits />
      <TestImonials />
      <ContactUs />
    </div>
  )
}
