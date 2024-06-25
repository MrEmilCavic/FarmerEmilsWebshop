import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function ItemGroups(props) {
    const { data } = props;

    return (
        <div className='ItemGroups'>
            <img className="itemgroupView" src="" alt={data.title} />
            <div className="itemGroupInfo">
                <p>{data.title}</p>
                <p>{data.description}</p>
            </div>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/webshop/${data.id}`} 
                >Explore!</Button>
        </div>
    );
};

export default ItemGroups;