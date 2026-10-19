
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1000,
  iterations: 10000,
};

export default function () {
  const res = http.get(
    "https://taskflow-ai-mern.onrender.com/health",
    { timeout: "150s" }
  );

  check(res, {
    "Health check returns 200": (r) => r.status === 200,
    "Response contains status ok": (r) =>
      r.json("status") === "ok",
  });

  sleep(1);
}
