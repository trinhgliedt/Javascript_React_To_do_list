import React, {useState} from "react"

const BoxList = props => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("100px");
    const [boxes, setBoxes] = useState([]); // this is the React syntax for destructuring, for this line only one variable is declared: variable boxes which is an empty array, and setBoxes is the function to set this variable.

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {color, size};
        // console.log(newBox);
        // console.log(size);
        setBoxes([...boxes, newBox]);
        setColor("");
    };
    // console.log(boxes);
    return (
        <div>
            <form onSubmit = {(event) => {handleSubmit(event);}}>
                <label htmlFor="color">Color</label>
                <input type = "text" value = {color} onChange= {(event) => {setColor(event.target.value);}} />
                <hr/>
                <label htmlFor="size">Box Size</label>
                <select onChange = {(e) => {setSize(e.target.value);}} >
                    <option defaultValue value="100px" > Small</option>
                    <option value="200px"  > Medium</option>
                    <option value="300px" > Large</option>
                </select>
                <input type="submit" value="Create box" />
                <hr/>
            </form>
            <div>
                {boxes.map((box, i) => {
                    return (
                        <div key = {i} style={{display: 'inline-block', margin: "5px", backgroundColor: box.color, width: box.size, height: box.size}}></div>)
                })}
            </div>
        </div>
    )
};
export default BoxList;
