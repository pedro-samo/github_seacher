import React from 'react'
import PropTypes from 'prop-types';

function Actions({ getRepos, getStarred }) {
    return (
        <div className='actions'>
            <button onClick ={getRepos}>Ver Repositórios</button>
            <button onClick= {getStarred}>Ver Favoritos</button>
        </div>

    )
}


Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}


export default Actions;