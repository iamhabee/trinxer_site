import React from 'react';

const WidgetCategories = () => {
    return (
        <div className="widget widget_categories">
            <h6 className="widget-title">Categories</h6>

            <ul>
                <li className="cat-item">
                    <a title="General dentist" href={ process.env.PUBLIC_URL + "/news" }>General dentist</a>
                </li>

                <li className="cat-item">
                    <a title="Orthodontist" href={ process.env.PUBLIC_URL + "/news" }>Orthodontist</a>
                </li>

                <li className="cat-item">
                    <a title="Periodontist" href={ process.env.PUBLIC_URL + "/news" }>Periodontist</a>
                </li>

                <li className="cat-item">
                    <a title="Prosthodontist" href={ process.env.PUBLIC_URL + "/news" }>Prosthodontist</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
