import React from "react";
import ArticleWithVideos from "@/components/News/articleWIthVideos";

const OpeningDayPage = () => {

    const carouselImages = [
    "/images/OpeningDay/OD-1.jpg",
    "/images/OpeningDay/OD-2.jpg",
    "/images/OpeningDay/OD-3.jpg",
    "/images/OpeningDay/OD-4.jpg",
    "/images/OpeningDay/OD-5.jpg",
    "/images/OpeningDay/OD-6.jpg",
    "/images/OpeningDay/OD-7.jpg",
    "/images/OpeningDay/OD-8.jpg",
    "/images/OpeningDay/OD-9.jpg",
    "/images/OpeningDay/OD-10.jpg",
    "/images/OpeningDay/OD-11.jpg",
    "/images/OpeningDay/OD-12.jpg",
    "/images/OpeningDay/OD-13.jpg",
    ]

  return (
     <ArticleWithVideos
      date="September 20th, 2025"
      bannerText="Opening Day"
      bannerImage="/images/OpeningDay/OD-banner.jpg"
      paragraph1="On September 14th, Living Oaks Church in Alvin joyfully opened its doors to a full house, where the aroma of food and coffee filled the air and set the tone for a day of fellowship. The celebration began with two inspiring video messages—one from Senator Mayes Middleton of Texas Senate District 11, and another from Eugene Howard of Visionary Outreach —reminding all in attendance of the broader community support for this new chapter. With laughter, connection, and heartfelt anticipation, Opening Day was more than an event; it was the launch of a ministry ready to serve and bless the Alvin community."
      video1="/images/OpeningDay/SenatorMiddleton.mp4"
      video1Title="Senator Middleton"
      paragraph2={`"I want to congratulate Living Oaks Church in Alvin for starting a new church plant in the community.  There is no higher calling than leading people to Christ for it is by grace, we have been saved in faith.  Thank you, Cary for making this happen and being part of this huge addition to the community, so important, especially since Alvin is one of the fastest growing cities in our Gulf Coast area and all of Texas, and we definately need more God in our community, more Churches in our community, and I'm so proud of y'all's work to make this happen in alvin and having Living Oaks Church planted in our great city."`}
      video2="/images/OpeningDay/EugeneHoward.mp4"
      video2Title="Eugene Howard"
      paragraph3={`"Good morning Church, this is Eugene Howard, I am the President of Visionary Outreach, and we're just here this morning to welcome y'all to this beautiful community of Alvin and Brazoria county as a whole"`}
      paragraph4="As children filled the daycare with laughter and play, teens and adults gathered in the sanctuary where Pastor Cary walked us through Isaiah’s prophecy of Jesus—a timeless reminder that continues to anchor our hearts in hope each day. When the message drew to a close, the aroma of cakes, snacks, and fresh coffee welcomed everyone to linger in fellowship, turning the close of worship into a joyful time of connection and shared community."
      carouselImages={carouselImages}
    />
  );
};

export default OpeningDayPage;
