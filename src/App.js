import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/Home/HomePage'
import FullScreenLoader from '../src/components/MasterLayout/FullScreenLoader'
import NotFoundPage from '../src/pages/NotFound/NotFoundPage'
import LoginPage from '../src/pages/User/LoginPage'
import RegistrationPage from './pages/User/RegistrationPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import DashboardPage from '../src/pages/Dashboard/DashboardPage'
import ProfilePage from '../src/pages/User/ProfilePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/Registration' element={<RegistrationPage></RegistrationPage>}></Route>

          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path='/Dashboard' element={<DashboardPage></DashboardPage>}></Route>
            <Route path='/Profile' element={<ProfilePage></ProfilePage>}></Route>
          </Route>

          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
      <FullScreenLoader></FullScreenLoader>
    </div>
  );
}

export default App;
