import {Header} from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar'
import './global.css';
import styles from './App.module.css';


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://pbs.twimg.com/media/F0X-8ytXgAIyys6?format=jpg&name=large',
      name: "Neblina Mendes",
      role: 'CEO at Gatwurno',
    },
    content: [
    { type: 'paragraph', content:'E ai, humanos 👋'},
    { type: 'paragraph', content: 'Passando para avisar que chegou novidades na Gatwurno. Os humanos separaram com exclusividade várias figures para vocês, vem conferir.'},
    {type: 'link', content:'gatwurno.com.br'},
    ],
    publishedAt: new Date('2023-07-09 15:58:32')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/suzanefeitosa.png',
      name: "Suzane Feitosa",
      role: 'COO at Gatwurno',
    },
    content: [
    { type: 'paragraph', content:'E ai meu povo!!'},
    { type: 'paragraph', content: 'Gente, as gatas chefes piraram por aqui. Fala sério, tem muita coisa linda, a gatwurno sempre surpreende. '},
    { type: 'paragraph', content: 'Vem ver?'},
    {type: 'link', content:'gatwurno.com.br'},
    ],
    publishedAt: new Date('2023-07-11 16:00:32')
  },
];


function App() {
  return (
    <>
  <Header />
  <div className={styles.wrapper}>
 <Sidebar />
  <main>

  {posts.map(post => {
    return ( 
    <Post 
    key={post.id}
    author={post.author}
    content={post.content}
    publishedAt={post.publishedAt}
    />
    )
   }
  )}

  </main>
  </div>
  </>
  )
}
export default App

