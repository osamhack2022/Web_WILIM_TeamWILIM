import { Button } from "../src/components/atom/button";
import { Input } from "../src/components/atom/input";

function App() {
  return (
    <div style={style}>
      <Button onClick={() => console.log("hello!")} innerText="Submit" style={{ marginBottom: '20px' }} />
      <Input type="password" innerText="password..." />
    </div>
  );
}

const style = {
  width: '40vw',
  height: '100vh',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'lightgray',
}

export default App;
