import css from '../css_module/container.module.css'

export default function Container({children,test=null})
{
    return (
        <>
           <div className={`container ${css.custom_container} ${ test ? css.p_tag  :" "}`}>
            {children}
           </div>
        </>
    );
}