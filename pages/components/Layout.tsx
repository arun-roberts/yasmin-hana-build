import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
      <>
        <Header />
        {children}
        <Footer /> 
      </>
  )
}

export default Layout