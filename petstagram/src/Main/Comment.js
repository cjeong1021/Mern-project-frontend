import React, {useState} from 'react'
import axios from 'axios'
const Comment = () => {

  const [comment, setComment] = useState('')

  const postComment = (e) => {
    e.preventDefault();
    axios.post("url", {
      
    }).then(res => console.log("posting data", res))
    .catch(err => console.log(err))
  }
    
  return (
    <div>
     <form>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Comment..." aria-label="Recipient's username" aria-describedby="basic-addon2" maxlength="60"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Post</button>
        </div>
         </div>
    </form>
  </div>
  )
}

export default Comment