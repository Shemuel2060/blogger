
import '../styles/contactMe.css';
import phoneIcon from '../images/icons/phone-icon.png';
import emailIcon from '../images/icons/email-icon.png';
import locationIcon from '../images/icons/location-icon.png';



function MyContacts(){

    const contactsData = [
        {
        "icon": [phoneIcon],
        "alt":"phone-icon",
        "text":"Phone",
        "detail": '0772698964',
        },
        {
        "icon": [emailIcon],
        "alt":"email-icon",
        "text":"Email",
        "detail": '2060newty@gmail.com',
        },
        {
        "icon": [locationIcon],
        "alt":"location-icon",
        "text":"Location",
        "detail": 'Mpererwe',
        }

    ]
    
    return(
        <div className="my-contacts-container">
            {contactsData.map((contact,index)=>(
                <div className="single-type-contact" key={index}>
                    <div><img src={contact.icon[0]} alt={contact.alt}/></div>                    
                    <div className='contact-info'>
                        <div>{contact.text}</div>
                        <div className='separator'></div>
                        <div>{contact.detail}</div>
                    </div>
                </div>
            ))}
          
        </div>
        )

}
export default MyContacts;