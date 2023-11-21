import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar"

import styles from "./Comment.module.css";

interface CommentProps {
  comment: string;
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment(){
    setLikeCount(state => state + 1)
  }

  function handleDeleteComment(){
    onDeleteComment(comment)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/DamasoMagno.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lance(você)</strong>
              <time>Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
