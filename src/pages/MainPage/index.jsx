import React from "react";
import { DetailedCard } from "../../components/DetailedCard";
import { Layout } from "../../components/Layout";

const MainPage = () => {
  return (
    <Layout nickName='sasha' id={1}>
      <div>MainPage</div>
      <DetailedCard
        userName='Sasha'
        userId={1}
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIQvWHNOuj1SxjBMbpiHhMRuiLEdP3uH5QiAqOqVv&s'
        likes={10}
        isLikedByYou={true}
        comments={[
          { text: "asdf", nickName: "Sasha" },
          { text: "asdf", nickName: "Sasha" },
          { text: "asdf", nickName: "Sasha" },
        ]}
      />
    </Layout>
  );
};

export default MainPage;
