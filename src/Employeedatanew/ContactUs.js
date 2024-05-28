const ContactUs = () => {
    return(
        <div>
          
<form>
    <center>
    <h1 className="style"> Registration </h1> 
  <label for="fname">First name</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="lname">Last name</label><br/>
  <input type="text" id="lname" name="lname"/><br/>
  <label for="fname">Email</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="lname">Mobile Number</label><br/>
  <input type="text" id="lname" name="lname"/><br/>
  <div>
  <input type="radio" id="f" name="gen"/>
  <label for="lname">Male</label>
  <input type="radio" id="m" name="gen" />
  <label for="lname">Female</label>
  </div>
  <input type="submit" value="Submit" className="btn"/>
 
  </center>
</form> 
        </div>
    )
}
export default ContactUs