import React from 'react';

const Patty = (props) =>
<div>
<h1>{props.passingProps.name}</h1>
<div>{props.passingProps.hero}</div>
<div>{props.passingProps.interests}</div>
<div>{props.passingProps.music}</div>
</div>

export default Patty;