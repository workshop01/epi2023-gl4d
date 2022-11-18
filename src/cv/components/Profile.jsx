import React from 'react'

export const Profile = ({ user }) => {
    console.log(user)
    return (
        <section>
            <div className="photo">
                <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/cv-profil.jpg" alt="Ma  de profil" />
            </div>
            <div className="prez">
                <h2>Qui suis-je ?</h2>
                <p>{user.desc}</p>
                <a href="#" download>Télécharger mon CV</a>
            </div>
            <div className="contact">
                <h2>Informations de contact</h2>
                <div className="contact-flex">
                    <p>Nom : </p>
                    <p>{user.nom} {user.prenom}</p>
                </div>
                <div className="contact-flex">
                    <p>Adresse : </p>
                    <p>115 Avenue des Lilas - 83000 Toulon</p>
                </div>
                <div className="contact-flex">
                    <p>Téléphone :</p>
                    <p>{user.phone}</p>
                </div>
                <div className="contact-flex">
                    <p>Mail : </p>
                    <p><a href="mailto:pierre.giraud@edhec.com">{user.mail}</a></p>
                </div>
                <div className="contact-flex">
                    <p>Permis :</p>
                    <p>{user.type_permis}</p>
                </div>
                <div className="social">

                </div>
            </div>
        </section>
    )
}
