/* eslint-disable react/prop-types */
import './App.css'

function Contact( {handleClickMenu}) {
  return (
    <>
      <main>
        <h1> Contacting Us!</h1>
      
        <div  className='form'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." required />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." required />

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} required></textarea>

          <button onClick={() => handleClickMenu("Thank")}>Submit</button>
  
        </div>

      </main>
    </>
  )
}

export default Contact
