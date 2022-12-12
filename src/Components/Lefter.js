import React, { Component } from 'react'
import vectpic from './vector.png'

export default class Lefter extends Component {
  render() {
    return (
      
      <div className='Left-block'>
        
        <div className='InputWhere'>
          <div className='InputWhereBlock1'>
            <h1 className='InputWhereText'>Откуда</h1>
            <input className="Input-win1" type="text" placeholder="Корпус"/>
          </div>
          <button className="Button-lefter">
            <img className="Reverse-but" src={vectpic}></img>
          </button>
          <div className='InputWhereBlock2'>
            <h1 className='InputWhereText'>Куда</h1>
            <input className="Input-win2" type="text" placeholder="Корпус"/>
          </div>
        </div>
        <div className='InputFindInfoBlock'>
          <h1 className='InputWhereText'>Поиск информации о корпусе</h1>
          <input className='InputFindInfoWhere' type="text" placeholder="Корпус"/>
          <h1 className='InputWhereText'>Информация о корпусе</h1>
          <div className='OutputInfo'></div>
          
        </div>
        
      </div>
    )
  }
}
