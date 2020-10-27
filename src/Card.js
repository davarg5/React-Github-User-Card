import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
    margin: auto;
    margin-top: 5%;
    align-items: center;
`

const Username = styled.div`
    font-size: 1.8rem;
    font-style: italic;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 3px;
    margin-right: 20px;
`

const Info = styled.p`
    font-size: 1.4rem;
`

const URL = styled.a`
    font-size: 1.4rem;
`

const DataContainer = styled.div`
    height: 150px;
`


export default function Card(props) {

    const { user, followerData } = props;

    return (
        <Container>
            <div>
                <Image src={user.avatar_url} />
            </div>
            <div>
                <Username>{user.login}</Username>
                <Info>Location: {user.location}</Info>
                <Info>Profile: <URL href={user.url}>{user.url}</URL></Info>
                <Info>Followers: {user.followers}</Info>
                <Info>Follower Data: <ul>{followerData.map(fol => {
                    return <li>{fol}</li>
                })}</ul></Info>
                <Info>Following: {user.following}</Info>
                {user.bio !== null &&  <Info>Bio: {user.bio}</Info>}
                
                

            </div>


        </Container>
    )
}