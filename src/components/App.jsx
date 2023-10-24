import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const users = [
    {
      userName: "midudev",
      isFollowing: true,
      name: "Miguel Angel Duran",
    },
    {
      userName: "pheralb",
      isFollowing: true,
      name: "Antonio Garcia Romero",
    },
    {
      userName: "unknown",
      isFollowing: true,
      name: "Chavo del 9",
    },
    {
      userName: "vxender",
      isFollowing: true,
      name: "Victor Raul Haya",
    },
  ];
  return (
    <section className="containerCards">
      {users.map(({ userName, isFollowing, name }) => (
        <TwitterFollowCard key={userName} userName={userName} isFollow={isFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
