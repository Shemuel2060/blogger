

import me from '../images/me-1.jpg';
import '../styles/currentMe.css'

function CurrentMe(){
    return(
        <div className='container'>
            <div>
                <h1>Samuel Katongole</h1>
                <h3>Job Position</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. Praesent libero. Sed cursus ante 
                    dapibus diam. Sed nisi.Nulla quis sem at nibh elementum 
                    imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce 
                    nec tellus sed augue semper porta. Mauris massa.
                </p>

                <p>Lacinia arcu eget nulla. Class aptent taciti sociosqu 
                    ad litora torquent per conubia nostra, per inceptos 
                    himenaeos. Curabitur sodales ligula in libero.
                    Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque. 
                </p>
            </div>
            <div>
                <img src={me} alt="myself" className='myImg'/>
            </div>
            
        </div>
    )

}
export default CurrentMe;