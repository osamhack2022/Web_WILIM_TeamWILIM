import { Layout } from "./layout/Layout";

/**
 * App.js는 Redux Store Provider나 ThemeProvider 등의 Provider를 전달하는 데 사용되고, 최종적인 컴포넌트의 완성점이 됩니다.
 * @returns 최종적인 컴포넌트를 return합니다.
 */
function App() {
  return (
    <Layout />
  );
}

export default App;
