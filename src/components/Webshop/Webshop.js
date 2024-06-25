import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadItems } from '../../store/Items.actions';
import ItemView from './ItemView';


function Webshop () {
    let { itemGroupId } = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.item);

    useEffect(() => {
        async function load() {
            dispatch (loadItems());
            }
            load();
        },[dispatch]);
   
    var itemsArray = Object.values(items);
    var filteredItems = [];
    for (let key in itemsArray) {
        if(itemsArray[key].itemgroupid == itemGroupId){
            filteredItems.push(itemsArray[key]);
        }
    }

    return (
            <div className='Webshop'>
                { filteredItems && 
                Object.keys(filteredItems).map((key) => {
                    const item = filteredItems[key];
                    return <ItemView item={item} key={item.id} />
                })}
            </div>
            )        
};

export default Webshop;