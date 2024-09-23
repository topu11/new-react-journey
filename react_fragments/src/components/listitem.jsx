import styles  from '../css_module/item_list.module.css'

export default function Listitem({itemName,index,alertName,active})
{
    return (
        <>
          
          <li className={`list-group-item ${styles.enc_li} ${ active == itemName ? `active` : ''  }`} key={index}>{itemName}<button type="button" className={`${styles.buy_now_button} btn btn-primary`} onClick={(event)=>{alertName(event,itemName)}}>Buy Now</button></li>
        </>
    );
}