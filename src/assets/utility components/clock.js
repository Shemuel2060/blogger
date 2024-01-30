import {useState} from 'react';

function Clock(){
    let time = new Date().toLocaleTimeString();
    const [times,setTime] = useState(time)

    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setTime(time)
    }
    setInterval(updateTime,1000)
    
    return(
        <div>
            <p>{times}</p>
        </div>
    )
}

export default Clock;