import './globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function RootLayout({ children }) {
  return (
    <html lang="tr" className='bg-gray-100'>
       <body className=" grid grid-rows-custom bg-gray-100 " >
          <Header/>
          
          <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
