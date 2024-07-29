import '@/assets/styles/global.css'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata= {
    title:"Property-Dekho",
    description:"find rental spaces near you"
}
const layout = ({children}) => {
    
  return (
    
      <html>
        <body>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    
  );
};

export default layout;
