import React from 'react'

export const Menu = () => {

    const posts = [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi unde facilis sunt quae vero placeat minima adipisci, nihil rem cumque est non totam repellendus optio! Saepe dolor magni ut.',
        img: 'https://images.unsplash.com/photo-1623864398649-89bb024a878f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80',
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi unde facilis sunt quae vero placeat minima adipisci, nihil rem cumque est non totam repellendus optio! Saepe dolor magni ut.',
        img: 'https://images.unsplash.com/photo-1649071915841-9742f6080519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi unde facilis sunt quae vero placeat minima adipisci, nihil rem cumque est non totam repellendus optio! Saepe dolor magni ut.',
        img: 'https://images.unsplash.com/photo-1662898537940-f73d96c200b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi unde facilis sunt quae vero placeat minima adipisci, nihil rem cumque est non totam repellendus optio! Saepe dolor magni ut.',
        img: 'https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80',
      },
      {
        id: 5,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi unde facilis sunt quae vero placeat minima adipisci, nihil rem cumque est non totam repellendus optio! Saepe dolor magni ut.',
        img: 'https://images.unsplash.com/photo-1634738300749-7223b48c8805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
    ];
  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}
