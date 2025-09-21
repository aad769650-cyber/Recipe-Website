export const Cards=({onToggle,curr,isActive})=>{
  const {question,answer}=curr;
//   console.log(isActive);
  
    return(
        <>
        
        <li className="faq-list ">
<div className="faq-li flex-between">
        <div className="faq-question"> {question}
    
    </div>
    <button className="faq-btn" onClick={onToggle}>{!isActive?"Show":"Close"}</button>
    </div>
    <div className={`answer `}>{isActive&&answer}</div>
    </li>
    </>
    )
}