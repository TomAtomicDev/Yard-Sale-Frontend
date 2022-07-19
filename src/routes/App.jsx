import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { NotFound}  from '../pages/NotFound.jsx';
import { Layout } from '../containers/Layout';
import { Login } from '../pages/Login';
import { PasswordRecovery } from '../pages/PasswordRecovery';
import { SentEmail } from '../pages/SentEmail';
import { NewPassword } from '../pages/NewPassword';
import { MyAccount } from '../pages/MyAccount';
import { CreateAccount } from '../pages/CreateAccount';
import { ShoppingCart } from '../pages/ShoppingCart';
import { Orders } from '../pages/Orders';
import './global.css'


const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={ <Home /> } />
					<Route exact path="/login" element={ <Login /> } /> {/* FixStyles */}
					<Route exact path="/password-recovery" element={ <PasswordRecovery /> } /> {/* FixStyles */}
					<Route exact path="/sent-email" element={ <SentEmail /> } />
					<Route exact path="/new-password" element={ <NewPassword /> } />
					<Route exact path="/account" element={ <MyAccount /> } />
					<Route exact path="/signup" element={ <CreateAccount /> } />
					<Route exact path="/checkout" element={ <ShoppingCart /> } />
					<Route exact path="/orders" element={ <Orders /> } />
					<Route path="*"  element= { <NotFound /> } />
				</Routes>
			</Layout> 
		</BrowserRouter>
	);
}

export default App;