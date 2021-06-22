import React from 'react';

const WidgetTagCloud = () => {
    return (
        <div className="widget widget_tag_cloud">
            <h6 className="widget-title">Tags</h6>

            <div className="tagcloud">
                <a title="Dental" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Dental</a>
                <a title="Doctors" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Doctors</a>
                <a title="Health" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Health</a>
                <a title="Dentist" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Dentist</a>
            </div>
        </div>
    );
};

export default WidgetTagCloud;
