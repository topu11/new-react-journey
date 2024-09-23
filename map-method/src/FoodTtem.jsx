export default function FoodItem(props)
{
    const {item}=props;
    return(
        <li className="list-group-item" key={item}>{item}</li>
    )
}