"use client"

import React, { useContext } from 'react'
import styles from './ModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext';

export default function ModeToggle() {
    
    const {mode , toggle} = useContext(ThemeContext) ;
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌚</div>
        <div className={styles.icon}>🌙</div>
        <div className={styles.switcher} 
        style={mode === "light" ? {right : '2px'} : {left: '2px'}}
        />
    </div>
  )
}
