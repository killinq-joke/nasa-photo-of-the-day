import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DateForm() {
    
    

    return(
        <div>
      <form action="submit" onSubmit={props.handleSubmit}>
        <input
          type="date"
          className="new-date-input"
          placeholder="YYYY-MM-DD"
          onChange={event => {
            setNewDate(event.target.value);
          }}
        />
        <button className="date-input">Submit</button>
        </form>
        </div>
    )
}

export default DateForm;