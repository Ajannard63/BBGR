import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({isLogin, setIsLogin}) => {
	const toggleIsLogin = (login) => {
		setIsLogin(login);
	}
  return (
		
    <div className="layout relative">
      <header>

				<Nav isLogin={isLogin} setIsLogin={toggleIsLogin}/>
				{/* {isLogin ? (
          <button onClick={logout}>Se déconnecter</button>
        ) : (
          <button onClick={login}>Se connecter</button>
        )} */}
			</header>
      <main className="relative w-full h-max pt-20" id="container">
        <Outlet/>
      </main>
			<footer className="">
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
