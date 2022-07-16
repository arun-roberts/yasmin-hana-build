import Header from './Header'
import { useRouter } from 'next/router'
// import { useContext } from 'react'
// import AppContext from '../lib/context'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  
//   const value = useContext(AppContext)
//   let { isNavVisible } = value.state
  return (
      <>
        {(router.pathname !== '/') && <Header />}
        {children}
        {/* <Footer /> */}
      </>
  )
}

export default Layout