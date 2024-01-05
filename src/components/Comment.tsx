import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string; 
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps){

   const [likeCount, setLikeCount] = useState(0);


function handleDeleteComment() {

    onDeleteComment(content);
}

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    })
}

return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/suzanefeitosa.png'/>

        <div className={styles.commentBox}>
        <div className={styles.commentBoxContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Suzane Feitosa</strong>
                    <time title="06 de Julho às 15:58h" dateTime="2023-07-06 15:58:30">Cerca de 1h atrás</time>
                </div>
                <button onClick={handleDeleteComment} title='Deletar comentário'>
                    <Trash size={24} />
                </button>
            </header>

            <p>{content}</p>

        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
        </div>

    </div>
)
}