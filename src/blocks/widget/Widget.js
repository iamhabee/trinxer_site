import React, { useContext, useEffect } from 'react';

import WidgetSearch from '../widget/WidgetSearch';
import WidgetCategories from '../widget/WidgetCategories';
import WidgetRecentEntries from '../widget/WidgetRecentEntries'
import UserContext from '../../context';
import { fetchPopularBlog } from '../../services';
// import WidgetComments from '../widget/WidgetComments';
// import WidgetTagCloud from '../widget/WidgetTagCloud';

const Widget = () => {
    const data = useContext(UserContext)
    const {setPopularBlog} = data

    useEffect(() => {
        fetchPopularBlog().then((data)=>{
            if(data && data.status){
                setPopularBlog(data.data)
            }
        })
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])
    return (
        <aside id="aside" className="widget-area">
            <WidgetSearch />

            <WidgetCategories />

            <WidgetRecentEntries />

            {/* <WidgetComments />

            <WidgetTagCloud /> */}
        </aside>
    );
};

export default Widget;
