import logo from "./logo.svg";
import "./App.css";
// 함수를 사용하여 사용자 정의 태그를 만든다.
// React에서 사용자 정의 태그를 위한 함수를 만들때에는
// 반드시 이름이 대문자로 시작하여야 한다.
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">HTML</a>
        </li>
        <li>
          <a href="/read/2">CSS</a>
        </li>
        <li>
          <a href="/read/3">JS</a>
        </li>
      </ol>
    </nav>
  );
};

const Article = () => {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, Web
    </article>
  );
};

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
