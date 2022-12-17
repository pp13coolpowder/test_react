import { Link } from "react-router-dom";

function Hbar() {
  return (
    <header className="hbar">
      <Link to="/" >LOGO</Link>
      <Link to="/tiktok" >tiktok</Link>
      <Link to="/youtube" >youtube</Link>
      <Link to="/content" >content</Link>
      <Link to="/edit content" >ME</Link>
    </header>
  );
}

export default Hbar;
