import './Post.css';

type PostProps = {
    title: string,
    description: string,
    author: string
}

export default function Post({title, description, author}: PostProps){

    return(
        <>
            <div className="rootPost" >
                <p>{title}</p>
                <textarea name="" id="">{description}</textarea>
                <p>{author}</p>
            </div>
        </>
    )
}
