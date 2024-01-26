
import './SocialMedia.css';

function SocialMedia(){
    const socialMedia = [
        {name:"GitHub", url:"https://github.com/Shemuel2060/"},
        {name:"Twitter", url:"https://www.twitter.com/"},
        {name:"Linkedin", url:"https://www.linkedin.com/feed/"}
    ]
    return(
        <div>
            {socialMedia.map((channel,index)=>(
                <a className="social-links" key = {index} href={channel.url} target="_blank"
                rel="noreferrer"/**for securit */>{channel.name}</a>
            ))}
        </div>
    )
}
export default SocialMedia;