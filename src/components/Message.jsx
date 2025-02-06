export default function Message({ text }) {
    return text ? <p className="text-lg font-semibold">{text}</p> : null;
  }
  