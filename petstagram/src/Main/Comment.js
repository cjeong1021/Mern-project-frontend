import React from 'react'

const Comment = () => {

  const preventDefault = (e) => {
    if(e.key === 'Enter'){
    e.preventDefault();
    }
  }
    
  return (
    <div>
     <form>
        <div class="input-group mb-3">
        <input type="text"  onKeyPress={(e) => preventDefault(e)} class="form-control" placeholder="Comment..." aria-label="Recipient's username" aria-describedby="basic-addon2" maxlength="60"/>
        <div class="input-group-append">
          <button  class="btn btn-outline-secondary" type="button">Post</button>
        </div>
         </div>
    </form>
  </div>
  )
}

export default Comment