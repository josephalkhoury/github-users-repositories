import React from 'react';

export default function Repos(props){
    const username = props.match.params.username || '';

    return <p>{username} repos</p>
}