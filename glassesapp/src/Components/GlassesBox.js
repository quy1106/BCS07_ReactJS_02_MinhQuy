import React, { Component } from 'react'
import { dataGlasses } from './Dataglasses';

export default class GlassBox extends Component {

  renderListGlassItem(){
    let {changeGlassInfor} = this.props;
    return dataGlasses.map(glass=>{
        let {id,url} = glass;
        return <div className='itemGlass col-sm-6 col-md-4 col-lg-2 ' key={id}>
        <div className="content border border-1 my-2">
            <img src={url} alt="..." onClick={()=>{
                changeGlassInfor(glass);
            }}/>
        </div>
    </div>
    },)
  }  

  render() {
    return (
      <div className='bg-light container py-3'>
        <div className="row px-3 mx-5">
            {this.renderListGlassItem()}
        </div>
      </div>
    )
  }
}
