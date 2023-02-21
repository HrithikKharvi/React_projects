import React from 'react'
import Button from '../UI/Button.js'
import style from './WarningCard.module.css';

export default function WarningCard(props) {
  return (
   <div className={style.warningCard}>
    <div className={style.warningTitle}>Invalid Input</div>
    <div className={style.warningBody}>
      {props.message}
    </div>
    <Button type="button" onClick={props.onClear}>Okay</Button>
   </div>
  )
}
