import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { FormEvent, useState , ChangeEvent, InvalidEvent } from 'react';

interface Author {
  name: string, 
  role: string, 
  avatarUrl: string; 
}

export interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author; 
  publishedAt: Date;
  content: Content[]; 
}

export function Post({author, publishedAt, content} : PostProps ){

const [comments, setComments] = useState([
  'Amei!'
])

const [newComment, setNewComment] = useState('')

const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
const dateDistanceToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

function handleCreateNewComment(event: FormEvent){
  event.preventDefault()
 
  setComments([...comments, newComment])
  setNewComment('');

}

function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>){
  event.target.setCustomValidity('');
  setNewComment(event.target.value);
}

function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
  event.target.setCustomValidity("Você esqueceu de preencher, o campo é obrigatório!");
}

function deleteComment(commentToDelete: string){

  const commentsWithoutDeteledOne = comments.filter(comment => {
    return comment !== commentToDelete;
  })

  setComments(commentsWithoutDeteledOne);

}

const isNewCommentEmpty = newComment.length === 0; 


    return(
        <article className={styles.post}>
        <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDate} dateTime={publishedAt.toISOString()}>{dateDistanceToNow}</time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if(line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>
            }else if (line.type === 'link'){
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe um comentário</strong>
          <textarea
          value={newComment}
          name='comment'
          placeholder='Seja respeitoso ao deixar uma opinião :)'
          onChange={handleNewComment}
          onInvalid={handleNewCommentInvalid}
          required
          />
          <footer>
          <button type='submit'disabled={isNewCommentEmpty} >Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          })}
        </div>
        </article>

    )
}