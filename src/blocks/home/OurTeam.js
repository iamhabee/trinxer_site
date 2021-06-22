import React, { useState, useContext } from 'react';
import Fade from '@material-ui/core/Fade';
import UserContext from '../../context';

const OurTeam = () => {
    const data = useContext(UserContext)
    const {teams} = data
    const [open_1, setOpen1] = useState( false );
    const [open_2, setOpen2] = useState( false );
    const [open_3, setOpen3] = useState( false );

    const handleClick = ( id ) => {
        if ( id === 1 ) { 
            setOpen1( (prev) => !prev );
        }

        if ( id === 2 ) { 
            setOpen2( (prev) => !prev );
        }

        if ( id === 3 ) { 
            setOpen3( (prev) => !prev );
        }
        
    };

    return (
        <section id="our-team" className="block spacer">
            <div className="wrapper">
                <div className="title text-max-width">
                    <h2>We are Healthcare Professionals</h2>
                </div>

                <div className="row gutter-width-md with-pb-md">
                    {teams.slice(0, 3).map((team, index) =>(
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" key={index}>
                        <div className="team-member">
                            <div className="team-member-top">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="/assets/img/placeholder/dummy.jpg" alt="trinxer" />
                                    </div>
                                </div>
                                <div className="team-member-social">
                                    <button onClick={ ( e ) => handleClick( index+1) } type="button" className="btn btn-primary btn-square min-w-auto"><i className="fas fa-plus i-default"></i></button>

                                    <Fade in={ index === 0 ?open_1:index === 1 ? open_2:open_3 } timeout={ 600 }>
                                        <div className="team-member-social-btn-items" style={ { display: "block" } }>
                                            <div className="team-member-social-btn-item">
                                                <a title="Facebook" className="btn btn-link btn-square min-w-auto" href="https://www.facebook.com/adveits/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f i-default"></i></a>
                                            </div>

                                            <div className="team-member-social-btn-item">
                                                <a title="LinkedIn" className="btn btn-link btn-square min-w-auto" href="https://www.linkedin.com/company/18135051/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in i-default"></i></a>
                                            </div>

                                            <div className="team-member-social-btn-item">
                                                <a title="Instagram" className="btn btn-link btn-square min-w-auto" href="https://www.instagram.com/adveits/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram i-default"></i></a>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>

                            <div className="team-member-content">
                                <div className="team-member-position">
                                    <p>{team.Role && team.Role.roleName}</p>
                                </div>

                                <h4 className="team-member-t-head">{team.firstName} {team.lastName}</h4>

                                <div className="team-member-description">
                                    <p>{team.Role && team.Role.roleDescription}.</p>
                                </div>
                            </div>
                        </div>
                    </div>))}

                </div>
            </div>
        </section>
    );
};

export default OurTeam;
