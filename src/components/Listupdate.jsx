import React from 'react'

function Listupdate() {

  const data = [
    {
      icon: './images/icon-list.svg',
      text: 'Product discovery and building what matters',
      id: 1
    },
    {
      icon: './images/icon-list.svg',
      text: 'Measuring to ensure updates are a success',
      id: 2
    },
    {
      icon: './images/icon-list.svg',
      text: 'And much more!',
      id: 3
    }
  ];

  const listItems = data.map(data => 
    <li key={data.id} className='item'>
      <img src={data.icon} alt="icon" />
      <p>{data.text}</p> 
    </li>
  );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Listupdate