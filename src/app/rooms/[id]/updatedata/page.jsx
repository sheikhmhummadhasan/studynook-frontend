import EditRooms from "@/Components/EditRooms";
import React from "react";

const Updatedata = async ({ params }) => {
  const { id } = await params;
  const prom = await fetch(`http://localhost:5000/studynook/${id}`);
  const res = await prom.json();

  return (
    <div>
      <EditRooms id={id} res={res} />
    </div>
  );
};

export default Updatedata;
