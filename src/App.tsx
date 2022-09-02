
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./redux/store";
import { getData } from "./redux/slice/testSlice";
 
function App() {
  let data = useSelector((s: RootState) => s.test.data);
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="App">
    {data.map((x) => (
      <div key={x.name}>{x.name}</div>
    ))}
    </div>
  );
}

export default App;
