/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  max-width: 200px;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;

const Name = styled.h2`
  color: gray;
  text-align: center;
`;

function Profile(props) {
  const { profile, setActiveProfile } = props;
  /*
{
    id: 7,
    name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  }
*/
  const { name, avatar } = profile;

  const history = useHistory();

  const activeProfileHandler = () => {
    //set active profile
    setActiveProfile(profile);
    //history push'la
    history.push("/home");
  };

  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}

export default Profile;
