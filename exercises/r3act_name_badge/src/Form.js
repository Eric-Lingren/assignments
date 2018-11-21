import React from 'react';

const Form = (props) => {

  

    return (
      <div className='formWrapper'>
          
        <form className='formBox' onSubmit={props.handleSubmit}>
            <div className='formHeader'>
        <h3 className='hello'> HELLO</h3>
        <h5 className='iAm'>my name is:</h5>
        </div>
            <input type='text' name='firstName' placeholder='First Name' value={props.firstName} onChange={props.handleChange} required></input>
            <input type='text' name='lastName' placeholder='Last Name' value={props.lastName} onChange={props.handleChange} required></input>
            <input type='email' name='email' placeholder='john@doe.com' value={props.email} onChange={props.handleChange} required></input>
            <input type='text' name='birthPlace' placeholder='Birth Place' value={props.birthPlace} onChange={props.handleChange} required></input>
            <input type='number' name='phone' placeholder='5551234567' value={props.phone} onChange={props.handleChange} required></input>
            <input type='text' name='favFood' placeholder='Favorite Food' value={props.favFood} onChange={props.handleChange} required></input> <br></br>
            <textarea rows='5' cols='100' type='textarea' name='about' placeholder='Tell Us About Yourself' value={props.about} onChange={props.handleChange} required></textarea> <br></br>
            <button>Create Your Nametag!</button>
        </form>

       
      </div>
    );
  
}

export default Form;
