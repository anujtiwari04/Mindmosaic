import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Index from './components/Index';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Assessment from './components/Assesment';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Link to="/"></Link>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/features' element={<Features />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/faq' element={<FAQ />} />

          {/* Protected Routes */}
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/assessment'
            element={
              <ProtectedRoute>
                <Assessment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;










// import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
// import './App.css';
// import Index from './components/Index';
// import Login from './components/Login';
// import Home from './components/Home';
// import Signup from './components/Signup';
// import Assesment from './components/Assesment';
// import Features from './components/Features';
// import Pricing from './components/Pricing';
// import FAQ from './components/FAQ';
// import Navbar from './components/Navbar';
// function App() {
//   return (
//     // <Index />
//     <BrowserRouter>
//       <Link to="/"></Link>
//       <Navbar />

//       <Routes>
//         <Route exact path='/' element={<Index />} ></Route>
//         <Route exact path='/login' element={<Login />} ></Route>
//         <Route exact path='/home' element={<Home />} ></Route>
//         <Route exact path='/signup' element={<Signup />} ></Route>
//         <Route exact path='/assessment' element={<Assesment />} ></Route>
//         <Route exact path='/features' element={<Features />} ></Route>
//         <Route exact path='/pricing' element={<Pricing />} ></Route>
//         <Route exact path='/faq' element={<FAQ />} ></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App; 
