import React,{useState} from 'react'



//React hook = special function that allow function components to use React feautures without writing class components(React (v16.8))(Use State,USe Effect etc.,)

//useState() = A React hook that allows the creation of stateful variable and a settervfunction to update its value in the virtualDOm[name,setName]

function MyComponent() {

    const [name, setName ] = useState("Guest");
    const [age, setAge ] = useState(0);
    const [isEmployed, setIsEmployed] =useState(false);
    const updateName = () => {
        setName("Nizy");
    }
    const incrementAge =() =>{
        setAge(age+1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
  return (
    <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed:{isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

export default MyComponent