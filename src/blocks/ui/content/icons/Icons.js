import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Icons = () => {
    return (
        <div id="icons" className="spacer m-top-xl">
            <h3>Icons</h3>
            <p>More than 1,550 beautifully crafted icons with some helper classes.</p>

            <div id="fontawesome">
                <h4>FontAwesome</h4>
                <p>Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.</p>

                <div className="bd-example">
                    <i className="fa fa-home"></i>
                </div>

                <PrismCode
                    code={ '<i className="fa fa-home"></i>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <MoreExamples actionLink="https://fontawesome.com/cheatsheet?from=io"
                          actionLinkContent="available icons"
                          contentBefore="You can see the list of"
                          contentAfter="online."
            />

            <div id="custom-icons">
                <h4>Custom icons</h4>

                <div className="bd-example">
                    <p><i className="hosco-icon-ambulance"></i> - hosco-icon-ambulance</p>
                    <p><i className="hosco-icon-apple"></i> - hosco-icon-apple</p>
                    <p><i className="hosco-icon-artificial"></i> - hosco-icon-artificial</p>
                    <p><i className="hosco-icon-blood-1"></i> - hosco-icon-blood-1</p>
                    <p><i className="hosco-icon-blood-2"></i> - hosco-icon-blood-2</p>
                    <p><i className="hosco-icon-blood-3"></i> - hosco-icon-blood-3</p>
                    <p><i className="hosco-icon-blood-4"></i> - hosco-icon-blood-4</p>
                    <p><i className="hosco-icon-blood-5"></i> - hosco-icon-blood-5</p>
                    <p><i className="hosco-icon-blood-6"></i> - hosco-icon-blood-6</p>
                    <p><i className="hosco-icon-blood"></i> - hosco-icon-blood</p>
                    <p><i className="hosco-icon-calendar-1"></i> - hosco-icon-calendar-1</p>
                    <p><i className="hosco-icon-calendar"></i> - hosco-icon-calendar</p>
                    <p><i className="hosco-icon-call-1"></i> - hosco-icon-call-1</p>
                    <p><i className="hosco-icon-call-2"></i> - hosco-icon-call-2</p>
                    <p><i className="hosco-icon-call-3"></i> - hosco-icon-call-3</p>
                    <p><i className="hosco-icon-cancer-ribbon"></i> - hosco-icon-cancer-ribbon</p>
                    <p><i className="hosco-icon-call"></i> - hosco-icon-call</p>
                    <p><i className="hosco-icon-dental-care-1"></i> - hosco-icon-dental-care-1</p>
                    <p><i className="hosco-icon-dental-care"></i> - hosco-icon-dental-care</p>
                    <p><i className="hosco-icon-doctor-1"></i> - hosco-icon-doctor-1</p>
                    <p><i className="hosco-icon-doctor"></i> - hosco-icon-doctor</p>
                    <p><i className="hosco-icon-drips"></i> - hosco-icon-drips</p>
                    <p><i className="hosco-icon-dropper"></i> - hosco-icon-dropper</p>
                    <p><i className="hosco-icon-emergency-call"></i> - hosco-icon-emergency-call</p>
                    <p><i className="hosco-icon-emergency"></i> - hosco-icon-emergency</p>
                    <p><i className="hosco-icon-eye-1"></i> - hosco-icon-eye-1</p>
                    <p><i className="hosco-icon-eye-2"></i> - hosco-icon-eye-2</p>
                    <p><i className="hosco-icon-eye-drop"></i> - hosco-icon-eye-drop</p>
                    <p><i className="hosco-icon-eye"></i> - hosco-icon-eye</p>
                    <p><i className="hosco-icon-first-aid-kit"></i> - hosco-icon-first-aid-kit</p>
                    <p><i className="hosco-icon-flask"></i> - hosco-icon-flask</p>
                    <p><i className="hosco-icon-glucometer-1"></i> - hosco-icon-glucometer-1</p>
                    <p><i className="hosco-icon-glucometer"></i> - hosco-icon-glucometer</p>
                    <p><i className="hosco-icon-heart-1"></i> - hosco-icon-heart-1</p>
                    <p><i className="hosco-icon-heart-2"></i> - hosco-icon-heart-2</p>
                    <p><i className="hosco-icon-heart-3"></i> - hosco-icon-heart-3</p>
                    <p><i className="hosco-icon-heart-4"></i> - hosco-icon-heart-4</p>
                    <p><i className="hosco-icon-heart-5"></i> - hosco-icon-heart-5</p>
                    <p><i className="hosco-icon-heart-6"></i> - hosco-icon-heart-6</p>
                    <p><i className="hosco-icon-heart-beat"></i> - hosco-icon-heart-beat</p>
                    <p><i className="hosco-icon-heart"></i> - hosco-icon-heart</p>
                    <p><i className="hosco-icon-hospital"></i> - hosco-icon-hospital</p>
                    <p><i className="hosco-icon-kidney-1"></i> - hosco-icon-kidney-1</p>
                    <p><i className="hosco-icon-kidney"></i> - hosco-icon-kidney</p>
                    <p><i className="hosco-icon-knives"></i> - hosco-icon-knives</p>
                    <p><i className="hosco-icon-lifeline-1"></i> - hosco-icon-lifeline-1</p>
                    <p><i className="hosco-icon-lifeline-2"></i> - hosco-icon-lifeline-2</p>
                    <p><i className="hosco-icon-lifeline"></i> - hosco-icon-lifeline</p>
                    <p><i className="hosco-icon-liquid"></i> - hosco-icon-liquid</p>
                    <p><i className="hosco-icon-lungs-1"></i> - hosco-icon-lungs-1</p>
                    <p><i className="hosco-icon-lungs-2"></i> - hosco-icon-lungs-2</p>
                    <p><i className="hosco-icon-lungs-3"></i> - hosco-icon-lungs-3</p>
                    <p><i className="hosco-icon-lungs"></i> - hosco-icon-lungs</p>
                    <p><i className="hosco-icon-machine"></i> - hosco-icon-machine</p>
                    <p><i className="hosco-icon-male"></i> - hosco-icon-male</p>
                    <p><i className="hosco-icon-medical-1"></i> - hosco-icon-medical-1</p>
                    <p><i className="hosco-icon-medical-2"></i> - hosco-icon-medical-2</p>
                    <p><i className="hosco-icon-medical-care"></i> - hosco-icon-medical-care</p>
                    <p><i className="hosco-icon-medical"></i> - hosco-icon-medical</p>
                    <p><i className="hosco-icon-microscope"></i> - hosco-icon-microscope</p>
                    <p><i className="hosco-icon-mobile"></i> - hosco-icon-mobile</p>
                    <p><i className="hosco-icon-negative"></i> - hosco-icon-negative</p>
                    <p><i className="hosco-icon-normal"></i> - hosco-icon-normal</p>
                    <p><i className="hosco-icon-nurse-1"></i> - hosco-icon-nurse-1</p>
                    <p><i className="hosco-icon-nurse"></i> - hosco-icon-nurse</p>
                    <p><i className="hosco-icon-ointment"></i> - hosco-icon-ointment</p>
                    <p><i className="hosco-icon-operation-1"></i> - hosco-icon-operation-1</p>
                    <p><i className="hosco-icon-operation"></i> - hosco-icon-operation</p>
                    <p><i className="hosco-icon-oxygen"></i> - hosco-icon-oxygen</p>
                    <p><i className="hosco-icon-patient"></i> - hosco-icon-patient</p>
                    <p><i className="hosco-icon-positive"></i> - hosco-icon-positive</p>
                    <p><i className="hosco-icon-records"></i> - hosco-icon-records</p>
                    <p><i className="hosco-icon-recovered"></i> - hosco-icon-recovered</p>
                    <p><i className="hosco-icon-scan"></i> - hosco-icon-scan</p>
                    <p><i className="hosco-icon-scissor-1"></i> - hosco-icon-scissor-1</p>
                    <p><i className="hosco-icon-scissor"></i> - hosco-icon-scissor</p>
                    <p><i className="hosco-icon-search-1"></i> - hosco-icon-search-1</p>
                    <p><i className="hosco-icon-search-2"></i> - hosco-icon-search-2</p>
                    <p><i className="hosco-icon-search"></i> - hosco-icon-search</p>
                    <p><i className="hosco-icon-stethoscope"></i> - hosco-icon-stethoscope</p>
                    <p><i className="hosco-icon-stretcher-1"></i> - hosco-icon-stretcher-1</p>
                    <p><i className="hosco-icon-stretcher"></i> - hosco-icon-stretcher</p>
                    <p><i className="hosco-icon-syringe"></i> - hosco-icon-syringe</p>
                    <p><i className="hosco-icon-tablets-1"></i> - hosco-icon-tablets-1</p>
                    <p><i className="hosco-icon-tablets-2"></i> - hosco-icon-tablets-2</p>
                    <p><i className="hosco-icon-tablets-3"></i> - hosco-icon-tablets-3</p>
                    <p><i className="hosco-icon-tablets"></i> - hosco-icon-tablets</p>
                    <p><i className="hosco-icon-teeth"></i> - hosco-icon-teeth</p>
                    <p><i className="hosco-icon-tensiometer-1"></i> - hosco-icon-tensiometer-1</p>
                    <p><i className="hosco-icon-tensiometer"></i> - hosco-icon-tensiometer</p>
                    <p><i className="hosco-icon-test-tube-1"></i> - hosco-icon-test-tube-1</p>
                    <p><i className="hosco-icon-test-tube"></i> - hosco-icon-test-tube</p>
                    <p><i className="hosco-icon-thermometer"></i> - hosco-icon-thermometer</p>
                    <p><i className="hosco-icon-tooth-1"></i> - hosco-icon-tooth-1</p>
                    <p><i className="hosco-icon-tooth-2"></i> - hosco-icon-tooth-2</p>
                    <p><i className="hosco-icon-tooth"></i> - hosco-icon-tooth</p>
                    <p><i className="hosco-icon-weight-scale-1"></i> - hosco-icon-weight-scale-1</p>
                    <p><i className="hosco-icon-weight-scale"></i> - hosco-icon-weight-scale</p>
                    <p><i className="hosco-icon-wheelchair-1"></i> - hosco-icon-wheelchair-1</p>
                    <p><i className="hosco-icon-wheelchair"></i> - hosco-icon-wheelchair</p>
                </div>
            </div>

            <PrismCode
                code={
                '<i class="hosco-icon-ambulance"></i>\n' +
                '<i class="hosco-icon-apple"></i>\n' +
                '<i class="hosco-icon-artificial"></i>\n' +
                '<i class="hosco-icon-blood-1"></i>\n' +
                '<i class="hosco-icon-blood-2"></i>\n' +
                '<i class="hosco-icon-blood-3"></i>\n' +
                '<i class="hosco-icon-blood-4"></i>\n' +
                '<i class="hosco-icon-blood-5"></i>\n' +
                '<i class="hosco-icon-blood-6"></i>\n' +
                '<i class="hosco-icon-blood"></i>\n' +
                '<i class="hosco-icon-calendar-1"></i>\n' +
                '<i class="hosco-icon-calendar"></i>\n' +
                '<i class="hosco-icon-call-1"></i>\n' +
                '<i class="hosco-icon-call-2"></i>\n' +
                '<i class="hosco-icon-call-3"></i>\n' +
                '<i class="hosco-icon-cancer-ribbon"></i>\n' +
                '<i class="hosco-icon-call"></i>\n' +
                '<i class="hosco-icon-dental-care-1"></i>\n' +
                '<i class="hosco-icon-dental-care"></i>\n' +
                '<i class="hosco-icon-doctor-1"></i>\n' +
                '<i class="hosco-icon-doctor"></i>\n' +
                '<i class="hosco-icon-drips"></i>\n' +
                '<i class="hosco-icon-dropper"></i>\n' +
                '<i class="hosco-icon-emergency-call"></i>\n' +
                '<i class="hosco-icon-emergency"></i>\n' +
                '<i class="hosco-icon-eye-1"></i>\n' +
                '<i class="hosco-icon-eye-2"></i>\n' +
                '<i class="hosco-icon-eye-drop"></i>\n' +
                '<i class="hosco-icon-eye"></i>\n' +
                '<i class="hosco-icon-first-aid-kit"></i>\n' +
                '<i class="hosco-icon-flask"></i>\n' +
                '<i class="hosco-icon-glucometer-1"></i>\n' +
                '<i class="hosco-icon-glucometer"></i>\n' +
                '<i class="hosco-icon-heart-1"></i>\n' +
                '<i class="hosco-icon-heart-2"></i>\n' +
                '<i class="hosco-icon-heart-3"></i>\n' +
                '<i class="hosco-icon-heart-4"></i>\n' +
                '<i class="hosco-icon-heart-5"></i>\n' +
                '<i class="hosco-icon-heart-6"></i>\n' +
                '<i class="hosco-icon-heart-beat"></i>\n' +
                '<i class="hosco-icon-heart"></i>\n' +
                '<i class="hosco-icon-hospital"></i>\n' +
                '<i class="hosco-icon-kidney-1"></i>\n' +
                '<i class="hosco-icon-kidney"></i>\n' +
                '<i class="hosco-icon-knives"></i>\n' +
                '<i class="hosco-icon-lifeline-1"></i>\n' +
                '<i class="hosco-icon-lifeline-2"></i>\n' +
                '<i class="hosco-icon-lifeline"></i>\n' +
                '<i class="hosco-icon-liquid"></i>\n' +
                '<i class="hosco-icon-lungs-1"></i>\n' +
                '<i class="hosco-icon-lungs-2"></i>\n' +
                '<i class="hosco-icon-lungs-3"></i>\n' +
                '<i class="hosco-icon-lungs"></i>\n' +
                '<i class="hosco-icon-machine"></i>\n' +
                '<i class="hosco-icon-male"></i>\n' +
                '<i class="hosco-icon-medical-1"></i>\n' +
                '<i class="hosco-icon-medical-2"></i>\n' +
                '<i class="hosco-icon-medical-care"></i>\n' +
                '<i class="hosco-icon-medical"></i>\n' +
                '<i class="hosco-icon-microscope"></i>\n' +
                '<i class="hosco-icon-mobile"></i>\n' +
                '<i class="hosco-icon-negative"></i>\n' +
                '<i class="hosco-icon-normal"></i>\n' +
                '<i class="hosco-icon-nurse-1"></i>\n' +
                '<i class="hosco-icon-nurse"></i>\n' +
                '<i class="hosco-icon-ointment"></i>\n' +
                '<i class="hosco-icon-operation-1"></i>\n' +
                '<i class="hosco-icon-operation"></i>\n' +
                '<i class="hosco-icon-oxygen"></i>\n' +
                '<i class="hosco-icon-patient"></i>\n' +
                '<i class="hosco-icon-positive"></i>\n' +
                '<i class="hosco-icon-records"></i>\n' +
                '<i class="hosco-icon-recovered"></i>\n' +
                '<i class="hosco-icon-scan"></i>\n' +
                '<i class="hosco-icon-scissor-1"></i>\n' +
                '<i class="hosco-icon-scissor"></i>\n' +
                '<i class="hosco-icon-search-1"></i>\n' +
                '<i class="hosco-icon-search-2"></i>\n' +
                '<i class="hosco-icon-search"></i>\n' +
                '<i class="hosco-icon-stethoscope"></i>\n' +
                '<i class="hosco-icon-stretcher-1"></i>\n' +
                '<i class="hosco-icon-stretcher"></i>\n' +
                '<i class="hosco-icon-syringe"></i>\n' +
                '<i class="hosco-icon-tablets-1"></i>\n' +
                '<i class="hosco-icon-tablets-2"></i>\n' +
                '<i class="hosco-icon-tablets-3"></i>\n' +
                '<i class="hosco-icon-tablets"></i>\n' +
                '<i class="hosco-icon-teeth"></i>\n' +
                '<i class="hosco-icon-tensiometer-1"></i>\n' +
                '<i class="hosco-icon-tensiometer"></i>\n' +
                '<i class="hosco-icon-test-tube-1"></i>\n' +
                '<i class="hosco-icon-test-tube"></i>\n' +
                '<i class="hosco-icon-thermometer"></i>\n' +
                '<i class="hosco-icon-tooth-1"></i>\n' +
                '<i class="hosco-icon-tooth-2"></i>\n' +
                '<i class="hosco-icon-tooth"></i>\n' +
                '<i class="hosco-icon-weight-scale-1"></i>\n' +
                '<i class="hosco-icon-weight-scale"></i>\n' +
                '<i class="hosco-icon-wheelchair-1"></i>\n' +
                '<i class="hosco-icon-wheelchair"></i>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Icons;
