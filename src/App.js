import { useState } from 'react';
import './App.css';
import ForLoop from './comos/ForLoop';
import IfMultiCondition, { IfCondition, ElseCondition, ElseIfCondition, IfElseCondition } from './comos/IfConditions';
const items = [{ name: "ahmed" }, { name: "hassan" }, { name: "hassan1" }, { name: "hassan2" }];

function App() {
  const [con, setCon] = useState(true);

  return (
    <div className="App">
      <IfMultiCondition>
        <IfCondition condition={con}>
          <p>if condition</p>
        </IfCondition>
        <ElseIfCondition condition={false}>
          <p>else if condition</p>
        </ElseIfCondition>
        <ElseCondition>
          <p>else condition</p>
        </ElseCondition>
      </IfMultiCondition>
      <ForLoop items={items} ifNoItems={<p>no items found</p>} forEachItem={(item, index) => {
        return <IfElseCondition condition={index % 2 === 0} key={index}>
          <p>index %2==0 will not render</p>
          <p>index 1 will not render</p>
        </IfElseCondition>
      }}>
      </ForLoop>
      <button onClick={() => {
        items.push({ name: "ahmed - " + con });
        setCon(!con);
      }}>change</button>
    </div>
  );
}

export default App;
