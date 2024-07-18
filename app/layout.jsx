import '@/assets/styles/global.css'

export const metadata= {
    title:"Property-Dekho",
    description:"find rental spaces near you"
}
const layout = ({children}) => {
    
  return (
    
      <html>
        <body>
          <div className=''>{children}</div>
        </body>
      </html>
    
  );
};

export default layout;
