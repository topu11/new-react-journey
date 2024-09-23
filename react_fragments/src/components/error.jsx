export default function Error({foods,message})
{
    function message_showing(condition,message)
    {
             if(condition)
             {
                return  <div className="alert alert-primary" role="alert">
                {message}
                </div>;
             }else
             {
                return ``;
             }
         
    }
    return(
        <>{foods.length == 0  ? message_showing(true,message) : message_showing(false,message)}</>
    );
}