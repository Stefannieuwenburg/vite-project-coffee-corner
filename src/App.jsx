import CoffeeNavbar from "./components/CoffeeNavbar"
import CoffeeHearder from "./components/CoffeeHeader";
import CoffeeMain from "./components/CoffeeMain";
import CoffeeFooter from "./components/CoffeeFooter";

import AppStyles from './AppStyles.module.scss';


export default function App() {
  
  return (
    <div className={AppStyles.Style}>
      <CoffeeNavbar />
      <CoffeeHearder />
      <CoffeeMain />
      <CoffeeFooter />
    </div>
  )
}


