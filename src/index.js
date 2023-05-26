import ReactDOM from 'react-dom/client';
import './site.css';
import './assets/css/navbar.css'
import './assets/css/news.css'
import Ads from './data/Ads.json'
import App from './App';
import AdsDisplay from './components/ads/AdsDisplay';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


    <>
        <App />


        <AdsDisplay adsLink={Ads} classPrefix='ads-mobile' />
        <AdsDisplay adsLink={Ads} classPrefix='ads-mobile-right' />
        <AdsDisplay adsLink={Ads} classPrefix='ads-mobile-bottom' />




    </>

)


