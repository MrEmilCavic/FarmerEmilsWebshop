import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItemGroups } from '../../store/ItemGroups.actions';
import ItemGroups from './ItemGroups';


function Home() {
    const dispatch = useDispatch();
    const groupsSelector = useSelector(state => state.itemGroup);

    useEffect(() => {
        async function load() {
        dispatch (loadItemGroups());
        }
        load();
    },[dispatch]);


    return (
        <div className='Home'>
            <h1>Welcome to Emil's Quality Honey and Bee Product Specialities!</h1>
            <h5>(Since 2024!)</h5>
            <h3>Every product is organic and intimately fostered by farmer Emil. Have a look:</h3>
            <div className="itemGroupWrapper">
                { groupsSelector && Object.keys(groupsSelector).length > 0 &&
                Object.keys(groupsSelector).map((key) => {
                    const itemGroupList = groupsSelector[key];
                    return <ItemGroups data={itemGroupList} key={itemGroupList.id} />
                })}               
            </div>
        </div>
    );
};

export default Home;