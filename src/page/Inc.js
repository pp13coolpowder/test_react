import React, { useState, useEffect } from "react";

function Inc() {
  const yubby = { nam: "", addnam: "" };
  const [yub, setyub] = useState(yubby);
  const [edityub, editsetyub] = useState(null);
  const [yubs, setyubs] = useState(() => {
    const syubs = localStorage.getItem("dat");
    if (syubs) {
      return JSON.parse(syubs);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("dat", JSON.stringify(yubs));
  }, [yubs]);
  function onChange(event) {
    const { name, value } = event.target;
    setyub((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function pom(event) {
    event.preventDefault();
    setyub(yubby);
    console.log(yub);
    setyubs((prev) => {
      const nyub = { ...yub };
      nyub.id = Date.now().toString();
      return [nyub, ...prev];
    });
  }
  function yubdelete(id) {
    const removrItem = yubs.filter((yub) => {
      return yub.id !== id;
    });
    setyubs(removrItem);
  }
  const yubElements = yubs.map((nnyub) => {
    return (
      <div key={nnyub.id}>
        <p>
          {nnyub.nam}
          {nnyub.addnam} 
        </p>
        <button onClick={() => yubdelete(nnyub.id)}>ไปคุยกับรากมะม่วง</button>
        <button onClick={() => editsetyub(nnyub)}>ปรับทัศนคติ</button>
      </div>
    );
  }
  );
  function pumedit(event) {
    event.preventDefault();
    setyubs((prev) => {
      return prev.map((nyub) => {
        if (nyub.id !== edityub.id) return nyub;
        return edityub;
      });
    });
    editsetyub(null);
  }
  function editChange(event) {
    const { name, value } = event.target;
    editsetyub((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  let editElement = null;
  if (!!edityub) {
    editElement = (
      <div className="editpopup">
        <form onSubmit={pumedit}>
          <input
            placeholder="ลงชื่อ"
            name="nam"
            value={edityub.nam}
            onChange={editChange}
          ></input>
          <input
            placeholder="ลงที่อยู่ทางคณิตกรไร้สาย"
            name="addnam"
            value={edityub.addnam}
            onChange={editChange}
          ></input>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }

  return (
    <div className="inc">
      <form onSubmit={pom}>
        <input
          placeholder="ลงชื่อ"
          name="nam"
          value={yub.nam}
          onChange={onChange}
        ></input>
        <input
          placeholder="ลงที่อยู่ทางคณิตกรไร้สาย"
          name="addnam"
          value={yub.addnam}
          onChange={onChange}
        ></input>
        <button type="submit">ADD</button>
      </form>
      <div>{yubElements}</div>
      <div>{editElement}</div>
    </div>
  );
}

export default Inc;
