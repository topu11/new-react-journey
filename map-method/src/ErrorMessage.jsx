export default function ErrorMessage(props)
{
    const {bdFruits} = props

    return bdFruits.length === 0 ? "No fruit is avaialabe": null;
}