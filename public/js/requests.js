async function postData(url = '', data = {}) {

    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',  
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }


  async function deleteData(url = '') {

    const response = await fetch(url, {
      method: 'DELETE',   
      cache: 'no-cache',  
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'  
    });
    return response.json(); 
  }

  async function updateData(url = '', data = {}) {

    const response = await fetch(url, {
      method: 'PATCH',   
      cache: 'no-cache',  
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)  
    });
    return response.json(); 
  }

  
  function toggle(status){
    if(status=="ON"){
        return "OFF";
    }else
    return "ON"
  }
  