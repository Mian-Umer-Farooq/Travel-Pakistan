import React, { Component } from 'react';

import'./Review.css';




class Review extends Component {
  render() {
    return (

      <div class="container">
      
  <div class="row header">
    
    <h3>Fill out the form below</h3>
  </div>
  <div class="row body">
    <form action="#">
      
        <table>
          <tr>
            <td><label for="first_name">First Name</label></td>
            <td><input type="text" name="first_name" placeholder="John" /> </td>
          </tr>
          <tr>
            <td><label for="email">Email</label></td>
            <td><input type="email" name="email" placeholder="john.smith@gmail.com" /></td>
          </tr>
         
            
        
        <tr>
          <td><label for="comments">Comments</label></td>
          <td><textarea cols="46" rows="3" name="comments" placeholder="Write Somthing about Pakistan"></textarea></td>
        </tr>
        </table> 
          <input class="submit" type="submit" value="Submit" />
          
        
        
      
    </form>  
  </div>
</div>
        
    );
  }
}

export default Review;

