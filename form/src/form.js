import { useState } from "react";

const Form = () => {
    const [show,setShow] = useState(false);
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    })
    const onSubmit = (event) => {
        event.preventDefault();
        setShow(!show);
    }
    const inputEvent = (event) => {
        const {name,value} = event.target;
        setFullName((prevVal) => {
            if(name==='fname'){
                return {...prevVal,fname:value}
            }else if(name==='lname'){
                return {...prevVal,lname:value}
            }else if(name==='email'){
                return {...prevVal,email:value}
            }else if(name==='phone'){
                return {...prevVal,phone:value}
            }
        })
    }
    return (
        <>
            {
                show && 
                <div>
                    <div>{`first name : ${fullName.fname}`}</div>
                    <div>{`last name : ${fullName.lname}`}</div>
                    <div>{`email : ${fullName.email}`}</div>
                    <div>{`phone : ${fullName.phone}`}</div>
                </div>
            }
            <form onSubmit={onSubmit}>
                <input type='text' name='fname' placeholder='Enter your first name' value={fullName.fname} onChange={inputEvent} autoComplete='off'/><br/>
                <input type='text' name='lname' placeholder='Enter your last name' value={fullName.lname} onChange={inputEvent} autoComplete='off'/><br/>
                <input type='email' name='email' placeholder='Enter your email' value={fullName.email} onChange={inputEvent} autoComplete='off'/><br/>
                <input type='number' name='phone' placeholder='Enter your phone number' value={fullName.phone} onChange={inputEvent} autoComplete='off'/><br/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
export default Form;