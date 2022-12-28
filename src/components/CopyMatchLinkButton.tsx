import { useEffect, useState } from "react";
import { routes } from "../constants/routes";

export function CopyMatchLinkButton({ matchID }: { matchID: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [matchID]);

  if (!navigator?.clipboard?.writeText) return null;

  const copy = () => {
    const matchURL = new URL(routes.match, window.location.href);
    matchURL.searchParams.set("matchID", matchID);

    navigator.clipboard
      .writeText(matchURL.toString())
      .then(() => setCopied(true));
  };

  return (
    <span>
      <button type="button" onClick={copy} className="btn btn-secondary w-40">
        {copied ? "Copied!" : "Copy Match Link"}
      </button>
    </span>
  );
}
