const apiUrl = "http://localhost:3002/users";
export let getData = async (id="") => {
  try {
    let response = await fetch(apiUrl+id, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}

export let postData = async (tarea) => {
  try {
    let response = await fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(


        
      )
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}

export let deleteData = async (id) => {
  try {
    let response = await fetch(apiUrl+id, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}

export let putData = async (obj) => {
  try {
    let response = await fetch(apiUrl+obj.id, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}