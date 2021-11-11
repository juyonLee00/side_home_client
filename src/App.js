import './App.css';
import login from './pages/login';
import { Route } from 'react-router-dom';
import today_scent from './pages/today_scent';
import archive from './pages/archive';
import MyPage from './pages/mypage';
function App() {
  return (
    <div>
      <Route path="/login" component={login} />
      <Route path="/today" component={today_scent} />
      <Route path="/main" component={archive} />
      <Route path="/mypage" component={MyPage} />
    </div>
  );
}

export default App;
