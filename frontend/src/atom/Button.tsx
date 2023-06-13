// css
import "./css/Atom.css";

function Button({ text }: { text: string }) {
  return <button className="button_1">{text}</button>;
}

function LoginRegisButton({ text }: { text: string }) {
  return <button className="button_2">{text}</button>;
}

export { Button, LoginRegisButton };
