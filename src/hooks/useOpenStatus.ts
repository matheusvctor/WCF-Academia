import { useEffect, useState } from "react";
import { getOpenStatus, getAcademyNow, type OpenStatus, type LocalNow } from "@/lib/openStatus";

/** Status de funcionamento atualizado a cada minuto. */
export function useOpenStatus(): OpenStatus & { now: LocalNow } {
  const [state, setState] = useState(() => ({ ...getOpenStatus(), now: getAcademyNow() }));

  useEffect(() => {
    const id = window.setInterval(() => {
      setState({ ...getOpenStatus(), now: getAcademyNow() });
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return state;
}
