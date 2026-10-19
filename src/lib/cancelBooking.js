import { headers } from "next/headers";
import { auth } from "./auth";

export const handleCancel = async (e) => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
      });
    console.log(e)
    e.preventDefault();
    const prom = await fetch(`https://study-nook-backend-tau.vercel.app/studynook/booking/${e.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await prom.json();
  };