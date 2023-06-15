import React from 'react';
import styles from './Player.module.scss'
import {BackwardOutlined, ForwardOutlined, PauseOutlined, PlayCircleOutlined} from '@ant-design/icons';
import earth from '../songs/img/earth.jpg'

export const Player = () => {
    return (
        <div className={styles.player}>
            <h1 className={styles.title}>Song title</h1>
            <img src={earth} alt="logo" className={styles.logo}/>
            <div className={styles.time}></div>
            <div className={styles.buttons}>
                <BackwardOutlined className={styles.prev} />
                <PlayCircleOutlined className={styles.play} />
                {/*<PauseOutlined className={styles.pause} />*/}
                <ForwardOutlined className={styles.next} />
            </div>
        </div>
    )
}