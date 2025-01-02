import './global.css';
import Image from "next/image";
import Logo from '/public/images/logo.svg'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='image-right'>
          <Image src={Logo} alt='Cantor College Logo' layout="intrinsic" width={105} height={70}/>
        </div>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}