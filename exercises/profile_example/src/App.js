import React from 'react'
import Profile from './Profile'
import cat from './pic.jpg'
import cat2 from './pic2.jpg'

const App = () => {
    return (
        <div>
            <h1> Greetings</h1>
            <Profile name='Eric' email='eric@gmail.com'  /> <img src={cat}/>
            <Profile name='Sammy Boy' email='sammyboiii@hotmail.com' /> <img src={cat2}/>
            <Profile name='my fiendish friend' email='friendlyfiend@yahoo.com' image='https://www.google.com/search?q=cat&rlz=1C5CHFA_enUS741US741&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjIg_Oc8NbeAhVFi1kKHY6tDw4Q_AUIDygC&biw=1440&bih=680#imgrc=xiMdf-KvKQwR_M:'/>
        </div>
    )
}

export default App