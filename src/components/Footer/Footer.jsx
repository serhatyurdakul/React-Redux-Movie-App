import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <Link to='/'>
        <div className='logo'>IMDb Movies</div>
      </Link>
    </div>
  );
}
