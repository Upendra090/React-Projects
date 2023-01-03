import { useState } from "react";

export default function Test() {
	
	const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);
	
	function addItem() {
		setThingsArray(prevThing => {
			return [...prevThing, `Thing ${prevThing.length + 1}`]
		})
	}
	
	const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div className="test-container">
      <button onClick={addItem}>Add Item</button>
			{thingElements}
    </div>
  );
}
