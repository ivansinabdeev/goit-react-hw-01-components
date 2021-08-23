import PropTypes from 'prop-types';

export default function Friends({
    avatar,
    name,
    isOnline }) {
    return (
        <section>
            <ul className="friend-list">
                <li className="item">
                    <span className="status">{isOnline === true ? <span className="status-green"></span> : <span className="status-red"></span>}</span>
                    <img className="avatar" src={avatar} alt="аватар друга" width="48" />
                    <p className="name">{name}</p>
                </li>
            </ul>

        </section>
    );
};

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

// <span className="status-green"></span> : <span className="status-red"></span>