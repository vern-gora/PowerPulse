import css from './statisticsInfo.module.css';
import sprite from '../../images/svg/sprite.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = "https://powerpulse-backend.onrender.com";

const StatisticInfo = () => {
    const [calories, setCalories] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(()=> {
        async function getVideo() {
            try {
              const vid = await axios.get('/statistic/video');
              setVideos(vid.data.videos);
            } catch (error) {
              console.error(error);
            }
        };
        async function getCalories() {
            try {
              const res = await axios.get('/statistic/calories');
              setCalories(res.data.calories);
            } catch (error) {
              console.error(error);
            }
        };

        getVideo();
        getCalories()
    }, []);
    
    return (
        <div className={css.wrapper}>  
            <div className={css.videos_wrapper}>
                <svg className={css.play}>
                    <use href={sprite + '#play_icon'}></use>
                </svg>
                <div className={css.wrap_text}>
                    <p className={css.num}>{videos !== null ? videos : '350+'}</p>
                    <p>Video tutorial</p>
                </div>
            </div>
            
            <div className={css.calories_wrapper}>
                <svg className={css.human_icon}>
                    <use href={sprite + '#running_stick_figure_icon'}></use>
                </svg>
                <div className={css.wrap_text2}>
                    <p className={css.num_cal}>{calories !== null ? calories : '500'}</p>
                    <p className={css.cal}>cal</p>
                </div>
            </div>
        </div>
    )
}
export default StatisticInfo;