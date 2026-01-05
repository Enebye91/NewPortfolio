import { useParams } from "react-router-dom";
import { Cases } from "../data/Cases";

export default function CasePage() {
  const { slug } = useParams();

  const project = Cases.find((c) => c.slug === slug);

  if (!project) return <h2>Project not found</h2>;

  return (
    <main>
      <p>Hello world</p>
    </main>
  );
}
