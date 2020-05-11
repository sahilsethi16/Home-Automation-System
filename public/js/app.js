console.log("CLient side JS loaded");

const deviceform= document.querySelector('form');
const deviceName= document.querySelector('#deviceName');
const deviceId= document.querySelector('#deviceId');
const addDevice= document.querySelector('#addDevice');
//const toggleValue= document.querySelector('#toggle');
//const delDevice= document.querySelector('#deleteDevice')

console.log(addDevice);
$('.delete').on('click', function(){
    const deviceId= this.getAttribute("data-uploadValue");
    console.log(deviceId);

    $(this).parent().remove();

    deleteData('/devices/'+deviceId)
        .then(data => {
            console.log(data);
            //window.location.reload(); 
         });
    
  });

  $('.update').on('click', function(){
    const status= toggle(this.getAttribute("data-uploadValue"));
    const id= this.getAttribute("data-deviceId");
    
    updateData('/devices/'+id,{ status })
        .then(data => {
            console.log(data);
            //toggleValue.textContent= data.status;
            //this.getAttribute("toggle").textContent= data.status
            window.location.reload()
         });
    
  });

  function toggle(status){
    if(status=="ON"){
        return "OFF";
    }else
    return "ON"
  }
  

 addDevice.addEventListener('click', (e) =>{
     console.log("dad");
     deviceform.style.display= "block";
 })
// function deleteDevice(device){
//     console.log(device)
// }


deviceform.addEventListener('submit', (e) => {
    e.preventDefault();

    const first= deviceName.value;
    const second= deviceId.value;

    postData('/devices/addDevice', { name: first, deviceId: second })
        .then(data => {
            console.log(data); 
            if(data.errmsg){
              return console.log('Device Id must be unique')
            }
            first.value="";
            second.value="";
            deviceform.reset();
            window.location.reload();
         });
    /*fetch('/devices/addDevice',{method: 'post', body: JSON.stringify(deviceObj) }).then((response) => {
    response.json().then((data) =>{
        console.log(data);
    })
})*/
})

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
    console.log(response);
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
    console.log(response);
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
    console.log(response);
    return response.json(); 
  }