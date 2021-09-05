import './App.css';
import login from './pages/login';
import { Route, Link } from 'react-router-dom';
import today_scent from './pages/today_scent';
import archive from './pages/archive';

function App() {
  return (
    <div>
      {/*ul 부분은 지우셔도 상관없습니다. */}
      <ul>
        <li>
          <Link to="login">로그인</Link>
        </li>
        <li>
          <Link to="today">오늘의 향수</Link>
        </li>
        <li>
          <Link to="today">아카이브</Link>
        </li>
      </ul>
      <Route path="/login" component={login} />
      <Route path="/today" component={today_scent} />
      <Route path="/main" component={archive} />
    </div>
  );
}

export default App;
