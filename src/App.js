import ExpensItem from "./components/ExpensItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* p는 단락을 의미 */}
      <p>This is also visible!</p>
      {/* 대문자로 시작하는 요소는 커스텀된 요소임을 표시한다 */}
      <ExpensItem />
    </div>
  );
}
// JS 안에 HTML이 들어가 있다. 이런 걸 JSX라고 한다.
// React만의 고유한 구문이다. 
export default App;
