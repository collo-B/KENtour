import React,{useState} from "react";

function EventForm({handleAddPoem ,deletePoem}) {
  const[name1, setName1]=useState('')
  const[info,setContent]=useState('')
  const[image,setAuthor]=useState('')
  // const[price,setPrice]=useState('')
 
  function onChangeTitle(e){
    setName1(e.target.value)
  }
  
  function onChangeAuthor(e){
    setAuthor(e.target.value)
  }
  function onChangeContent(e){
    setContent(e.target.value)
  }

  function handleSubmit(e){
  e.preventDefault()
  const newPoem = {
    name1,
    info,
    image
    // price

  }
  fetch('http://localhost:3000/events', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPoem),
  })
    .then((r) => r.json())
    .then((poem) => {
    handleAddPoem(poem)
    // set title, author and contetent to empty string
      setName1("")
      setAuthor("")
      setContent("") 
    });
  }
  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input onChange={onChangeTitle} name1 ="name1"
      placeholder="Title"/>
      <input 
      onChange={onChangeAuthor}
      placeholder="info" 
      info="info" />
      <textarea
      onChange={onChangeContent}
      image='image' 
      placeholder="Write your story here..." 
      rows={8} />
      <input  type="submit" value="Share your event" />
    </form>
  );
}

export default EventForm;
