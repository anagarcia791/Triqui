import { Square } from "./Square";

export const Board = ({ board, updateBoard }) => {
  return (
    <section className="game">
      {board.map((gap, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {gap}
          </Square>
        );
      })}
    </section>
  );
};
