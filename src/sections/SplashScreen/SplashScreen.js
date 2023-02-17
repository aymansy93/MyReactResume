import React from 'react'
import "./SplashScreen.css"
import iconHello from "../../assets/images/1F44B.svg"
import {greeting} from "../../Portfolio"
import {ButtonSplashScreen,ButtonDownload, SocialMeadia, TextAnimated} from '../../components/index'

const SplashScreen = () => {

  return (
    <section className="splashscreen" id='splashscreen' >
            
                <div className='row'>
                    <div className='col-md splashcontent'>
                            <h2>Hi All <img src={iconHello} alt='' />{greeting.title}<br />
                            <TextAnimated/>
                            </h2>
                            <h3>
                            {greeting.subtitle}
                            </h3>

                            <SocialMeadia
                              newTab={true}
                            />
                        {
                          greeting.buttonNormal.map((element,i)=> (
                            <ButtonSplashScreen url={element.url} name={element.name} newTab={false} key={i}/>
                          ))
                        }
                    </div>
                </div>
                
            
    </section>
  )
}
export default SplashScreen