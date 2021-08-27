import PropTypes from 'prop-types';
import s from './Friends.module.css'


export default function Friends({
    avatar,
    name,
    isOnline }) {
    return (
        <>
            <span className={s.status}>{isOnline === true ? <span className={s.statusGreen}></span> : <span className={s.statusRed}></span>}</span>
            <img className={s.avatar} src={avatar} alt="аватар друга" width="64" />
            <p className={s.name}>{name}</p>
        </>
    );
};

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}