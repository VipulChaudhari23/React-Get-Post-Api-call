import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Post from './components/Post';
import AddPost from './components/AddPost';



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/new-post" element={<AddPost />} />
          <Route path="/:id" element={<Post />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
