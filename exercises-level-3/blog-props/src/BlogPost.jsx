import React from "react"

export default function BlogPost(props) {
    return (
       <div className="blog">
            <p className="blog--title">
                {props.title}
            </p>
            <p className="blog--subtitle">
                {props.subTitle}
            </p>
            <p className="blog--posted">
                Posted by <span className="blog--author">{props.author}</span> on {props.date}
            </p>
       </div>
    )
}