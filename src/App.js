import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function App() {
  handle = () => {console.log();}
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {[0,1,2].map(row =>
      <div>
      {friends.map(friend =>
      // map takes json array and indexes through it and creates friend[0]-->friend[n]
      <FriendCard
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
      />
      )
}
      </div>
      )
}
    </Wrapper>
  );
}

export default App;
