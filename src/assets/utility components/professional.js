import '../styles/professional.css';
/**
 * Component displays the education and professional
 * life.
 */
function Edu_ProfLife({eduData, workData}){
    return(
        <div >
            <header className='education'>
                <h1>Education Background</h1>
            </header>
            {eduData.map((level,index)=>(
                <div className='right-cards'>
                    <div className='card'>
                        <div>
                            <h1>{level.period}</h1>
                            <hr/>
                        </div>  
                        <div>
                            <p>Institution: {level.institution}</p>
                            <p>Subject: {level.subject}</p>
                            <p>Award: {level.award}</p>
                        </div> 
                    </div>   
                </div>            
            ))}
            <header className='professions'>
                <h1>Professional Background</h1>
            </header>
            {workData.map((work,index)=>(
                <div className='left-cards'>
                    <div className='card'>
                        <div>
                            <h1>{work.period}</h1>
                            <hr/>
                        </div>  
                        <div>
                            <p>Institution: {work.institution}</p>
                            <p>Location: {work.where}</p>
                            <p>Role: {work.role}</p>
                        </div> 
                    </div>
                </div>
                               
            ))}
        </div>
    )
    

}
export default Edu_ProfLife;