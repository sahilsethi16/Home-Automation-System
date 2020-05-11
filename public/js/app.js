console.log("CLient side JS loaded");

const deviceform= document.querySelector('form');
const deviceName= document.querySelector('#deviceName');
const deviceId= document.querySelector('#deviceId');
const addDevice= document.querySelector('#addDevice');

console.log(addDevice);
$('.delete').on('click', function(){
    const deviceId= this.getAttribute("data-uploadValue");
    $(this).parent().remove();

    deleteData('/devices/'+deviceId)
        .then(data => {
            alert('Device Deleted');
            //window.location.reload(); 
         });
    
  });

  $('.update').on('click', function(){
    const status= toggle(this.getAttribute("data-uploadValue"));
    const id= this.getAttribute("data-deviceId");
    
    updateData('/devices/'+id,{ status })
        .then(data => {
            window.location.reload()
         });
    
  });


 addDevice.addEventListener('click', (e) =>{
     console.log("dad");
     deviceform.style.display= "block";
 })


deviceform.addEventListener('submit', (e) => {
    e.preventDefault();

    const first= deviceName.value;
    const second= deviceId.value;

    postData('/devices/addDevice', { name: first, deviceId: second })
        .then(data => {
            console.log(data); 
            if(data.errmsg){
              return alert('Device Id must be unique')
            }
            first.value="";
            second.value="";
            deviceform.reset();
            window.location.reload();
         });
    
})