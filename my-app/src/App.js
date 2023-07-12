import React from "react";
import ProfileCard from "./Components/ProfileCard";
import Alexa from "./images/alexa.png";
import Bixby from "./images/cortana.png";
import Siri from "./images/siri.png";
import 'bulma/css/bulma.css';

// Create a react component
function App(){
    // let message= "Hi there!";
    // const name = "John";
    // if(Math.random() > 0.5){
    //     message = "Hello there!"
    // }
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                    Personal digital assistance
                    </p>
                </div>
            </section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard 
                            title="Alexa"
                            twiterHandler = "@alexa66" 
                            image ={Alexa} 
                            altText="Alexa logo" 
                            description = "hey I am Alexa and I am a virtual assistant developed by Amazon"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard 
                            title="Bixby" 
                            twiterHandler = "@bixby1" 
                            image ={Bixby} 
                            altText="Bixby logo" 
                            description = "hey I am Bixby and I am a virtual assistant developed by Samsung"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard 
                            title="Siri" 
                            twiterHandler = "@siri01" 
                            image={Siri} 
                            altText="Siri logo"
                            description = "hey I am Siri and I am a virtual assistant developed by Apple"
                        />
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default App;