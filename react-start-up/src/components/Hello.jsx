export default function Hello({firstname,lastname})
{
    const fullName=(firstname,lastname)=>{
       return firstname+' '+lastname;
    } 
   
    return <p style={{ background:"yellow",color:"black" }}>You Full Name is {fullName(firstname,lastname)}</p> 
}
