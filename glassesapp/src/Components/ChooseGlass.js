import React, { Component } from 'react'
import GlassBox from './GlassesBox'
import { dataGlasses } from './Dataglasses'
import GlassView from './GlassView'

export default class ChooseGlass extends Component {
    state  = {
        glass:{
            desc: "",
            name: "",
            url: ""  
        }
    }
    
  render() {
    return (
            <div className="content mx-5 px-5">
                <GlassView glass={this.state.glass} />
                <GlassBox dataGlass={dataGlasses} changeGlassInfor={this.changeGlassInfor}/>
        </div>
    )
  }
  changeGlassInfor=(glass)=>{
    this.setState({
        glass:glass
    })
    console.log('state',this.state);
}
}
