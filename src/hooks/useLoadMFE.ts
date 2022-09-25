import { RefObject, useEffect } from "react";

export const useLoadMFE = (
  mfe: (document: Document, id: string) => void | undefined,
  ref: RefObject<HTMLDivElement>
) => {
  const uniqueId = (() => new Date().toISOString())();

  useEffect(() => {
    if (typeof mfe !== "function") return;
    if (document === undefined) return;
    if (ref.current === null) return;

    try {
      ref.current.id = uniqueId;
      mfe(document, uniqueId);
    } catch (e) {
      console.error(e);
      ref.current?.remove();
    }
  }, [mfe, document, ref]);
};
