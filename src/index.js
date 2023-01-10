import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';    //.js 확장자는 생략한다. 가장 앞의 './'는 동일한 경로 내에 존재한다는 뜻.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);   // App이라는 컴포넌트는 root에 render된다.
