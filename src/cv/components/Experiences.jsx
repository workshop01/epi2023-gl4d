import React from 'react'

export const Experiences = ({ experiences }) => {
    return (
       
        <section>
            {/*  */}
            <h2>Expériences professionnelles</h2>

            {
                experiences  &&
                experiences.map((exp) => {
                    return (
                        <div className="exp" key={exp.id}>
                            <div className="exp-logo">
                                <a href="#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/pierre.png" alt="Logo de Pierre Giraud" /></a>
                            </div>
                            <div className="exp-info">
                                <h3>{exp.titre}</h3>
                                <h4>{exp.ste}</h4>
                                <h4>{exp.date_debut} - {exp.date_fin}</h4>
                            </div>
                            <div className="exp-desc">
                                <p>
                                    {exp.desc}</p>
                            </div>
                        </div>
                    )
                }
              

                )
            }


        </section>
    )
}
