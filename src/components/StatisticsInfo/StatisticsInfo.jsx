import css from './statisticsInfo.module.css';
import sprite from '../../images/svg/sprite.svg';

const StatisticInfo = ({videos, calories}) => {

    return (
        <div className={css.wrapper}>  
            <div className={css.videos_wrapper}>
                <svg className={css.play}>
                    <use href={sprite + '#play_icon'}></use>
                </svg>
                <div className={css.wrap_text}>
                    <p className={css.num}>350+</p>
                    <p>Video tutorial</p>
                </div>
            </div>
            
            <div className={css.calories_wrapper}>
                <svg className={css.human_icon}>
                    <use href={sprite + '#running_stick_figure_icon'}></use>
                </svg>
                <div className={css.wrap_text2}>
                    <p className={css.num_cal}>500</p>
                    <p className={css.cal}>cal</p>
                </div>
            </div>
        </div>
    )
}
export default StatisticInfo;