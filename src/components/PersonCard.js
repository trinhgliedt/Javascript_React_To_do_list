import React from "react";
//class component
// class PersonCard extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             age: this.props.age,
//         };
//     }

//     handleClick = () => {
//         this.setState({
//             age: this.state.age + 1,

//         });
//     };

// render(){
//     return (
//         <div class="text-left">
//             <h3>{ this.props.lastName }, { this.props.firstName }</h3>
//             <p>Age: { this.state.age }</p>
//             <p>Hair Color: { this.props.hairColor }</p>
//             <button class="btn btn-primary mb-5" onClick={this.handleClick}>Button for { this.props.firstName } { this.props.lastName } </button>
//         </div>
//     )
// }

// }
// export default PersonCard;


//functional component
const PersonCard = props => {
    return (
        <div className="text-left">
            <h3>{ props.lastName }, { props.firstName }</h3>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;