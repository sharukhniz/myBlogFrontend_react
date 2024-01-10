import React from 'react';
import cardStyle from './ProfileCard.module.css';

const ProfileCard = () => {
  const entriesData = [
    {
      img: "https://www.w3schools.com/w3images/avatar_g.jpg",
      title: "My Name",
      details: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    },
  ];

  return (
    <div>
      {entriesData.map((card) => (
          <div className={cardStyle.cardContainer}>
          <img src={card.img} alt='avatar' style={{width:'100%'}}/>
            <div className={cardStyle.cardDetails}>
              <h4><b>{card.title}</b></h4>
              <p>{card.details}</p>
            </div>
          </div>
      ))}
    </div>
  );
};

export default ProfileCard;
