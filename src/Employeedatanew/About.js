
const About = () => {
    const names = ['satya','pavan','trivikram','puri']
    
    return(
        <div>
            <h1 >AboutUs</h1>
             <p>We convert your business ideas into reality by providing you with all the digital solutions like Enterprise Portal Development,<br/>
                 Web and Mobile App Development. Such services offered by us can really convert your business idea into a reality! Ubus Technologies designs<br/>
                  and builds intelligent, cost-effective and intuitive web applications, cloud systems, desktop applications and mobile apps that help streamline processes for businesses as well 
                as create new revenue streams for start-ups and established businesses alike.</p>
               

    
       <ul>
        {names.map((name,index)=> (
            <li key={index}><a href={`/about/${name}`}>{name}</a></li>
           

        ))}
       </ul>
   
    </div>
  
     
    )
}
export default About;