import React from 'react'
import News from './News';
import PropTypes from 'prop-types';

const NewsList = ({news}) => {
    return (
        <div className='row'>
            {news.map(eachNew => (
                <News
                    key={eachNew.url}
                    news={eachNew}
                />
            ))}
        </div>
    )
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsList
