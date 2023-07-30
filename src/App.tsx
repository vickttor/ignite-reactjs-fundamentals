import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { ContentType } from "./types/enums";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/vickttorugo.png",
      name: "Victor Silva",
      role: "Web Developer",
    },
    content: [
      { type: ContentType.paragraph, content: "Fala galeraa 👋" },
      {
        type: ContentType.paragraph,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: ContentType.link, content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-07 12:50:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: ContentType.paragraph, content: "Fala galeraa 👋" },
      {
        type: ContentType.paragraph,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: ContentType.link, content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-05 15:30:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: ContentType.paragraph, content: "Fala galeraa 👋" },
      {
        type: ContentType.paragraph,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: ContentType.link, content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-08 09:40:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
