document.addEventListener('DOMContentLoaded', () => {
    // JSON data
    const jsonData = [
         
           {  
            id:1,  name:"Andhra Pradesh",
            
            
    
             
           },
           {  
              id:2,name:"Arunachal Pradesh",
             
           },
           {  
             id:3, name:"Assam",
            
               
           },
           {  
            id:4, name:"Bihar",
              
               
              
           },
           {  
              id:5,name:"Chandigarh (UT)",
              
           },
           {  
              id:6,name:"Chhattisgarh",
            
              
           },
           {  
             id:7, name:"Dadra and Nagar Haveli (UT)",
             
           },
           {  
            id:8,  name:"Daman and Diu (UT)",
            
           },
           {  
            id:9,  name:"Delhi (NCT)",
             
           },
           {  
             id:10 ,name:"Goa",
             
           },
          {
            id:11,name:"Gujarat"
          },
          {
            id:12,name:"Haryana"
          },
          {
            id:13,name:"Himachal Pradesh"
          },
          {
            id:14,name:"Jammu and Kashmir"
          },
          {
            id:15,name:"Jharkhand"
          },
          {
            id:16,name:"Karnataka"
          },
          {
            id:17,name:"Kerala"
          },
          {
            id:18,name:"Lakshadweep (UT)"
          },
          {
            id:19,name:"Madhya Pradesh"
          },
          {
            id:20,name:"Maharashtra"
          },
          {
            id:21,name:"Manipur"
          },
          {
            id:22,name:"Meghalaya"
          },
          {
            id:23,name:"Mizoram"
          },
          {
            id:24,name:"Nagaland"
          },
          {
            id:25,name:"Odisha"
          },
          {
            id:26,name:"Puducherry (UT)"
          },
          {
            id:27,name:"Punjab"
          },{
            id:28,name:"Rajasthan"
          },
             
          
     
 
    ]
  
    // Get the select element
    const selectElement = document.getElementById('mySelect');
  
    // Populate the select options
    jsonData.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;
      
      selectElement.appendChild(option);
    });
  });
  