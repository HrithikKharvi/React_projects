import React from 'react'
import style from './WarningComponent.module.css'
import WarningCard from './WarningCard'

export default function WarningComponent(props) {
  return (
        <div className={style.backroundBlur}>
            <WarningCard message={props.message} onClear={props.onOkay}></WarningCard>
        </div>
  )
}
