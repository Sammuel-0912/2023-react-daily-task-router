import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Login from './pages/Login';
import Register from './pages/Register';
import PostId from './pages/PostId';
import Post from './pages/Post';


function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="post">
            <Route path=":postId" element={<PostId />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
