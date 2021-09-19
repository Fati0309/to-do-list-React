import "./App.css";
import React, { useState } from "react";
export default function App(props) {
  const [list, setlist] = useState([]);
  const [value, setvalue] = useState("");
  const Item = ({ item }) => {
    return (
      <div className="items">
        <p>{item}</p>
        <button onClick={supvalue}>--</button>
      </div>
    );
  };
  const handleChange = (e) => {
    let x;
    x = setvalue(e.target.value);
    return x;
  };
  const supvalue = () => {
    let x = list;
    x.splice(x.indexOf(value), 1);
    setlist([...x]);
    console.log(list);
  };
  const handleSubmit = (e) => {
    if (value === "") {
      alert("ecrire votre etape");
      console.log("vide");
    } else {
      let x = list;
      x.push(value);
      setlist([...x]);
      console.log(list);
    }
  };
  const handlesupp = (e) => {
    setlist([]);
    console.log(list);
  };
  return (
    <div className="App">
      <div className="contenu">
        <h1> To Do Liste</h1>
        <div>
          <input
            type="text"
            placeholder="edit votre etape "
            minLength="2"
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}> add</button>
          <button onClick={handlesupp}>clear</button>
        </div>
        {list.map((value) => {
          return <Item item={value} />;
        })}
      </div>
    </div>
  );
}
