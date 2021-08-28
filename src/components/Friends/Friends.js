import PropTypes from 'prop-types';
import s from './Friends.module.css'


export default function Friends({
    avatar,
    name,
    isOnline }) {
    return (
        <>
            <div className={s.status}>
            <span className={isOnline === true ? s.statusGreen : s.statusRed} />
            </div>
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