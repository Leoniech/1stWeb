var rb1   = document.getElementById('usd');
var rb2   = document.getElementById('lbp');

function getWkData(){
    fetch('https://lit-wave-12091.herokuapp.com/Alcohol')
  .then(response => response.json())
  .then(json => {
     var myul = document.getElementById('wk');
     var l = myul.children.length;
     if( l > 0 ){
        for (i = l-1; i >=0 ; i--) {
            myul.removeChild(myul.children[i]);
          }
     }
      for (let i = 0; i < json.length; i++) {
        if(json[i].Type == 'WK'){
          var li = document.createElement('li');
          //li.innerHTML = json[i].img;
          var a  = document.createElement('a');
          var img = document.createElement('img');
          var span = document.createElement('span');
          var span2 = document.createElement('span');
          
          if (rb1.checked == true){
              span2.innerHTML=json[i].USD +" $";
          }
          if (rb2.checked == true){
            span2.innerHTML=json[i].LBP +" LBP";
          }

          a.href = "#";
          span.innerHTML =json[i].Name;
          img.src = json[i].Img;
          a.append(img,span,span2);
          li.appendChild(a);
          myul.appendChild(li);
        }  
      }
  });
}

function getWnData(){
    fetch('https://lit-wave-12091.herokuapp.com/Alcohol')
  .then(response => response.json())
  .then(json => {
     var myul = document.getElementById('wn');
     var l = myul.children.length;
     if( l > 0 ){
        for (i = l-1; i >=0 ; i--) {
            myul.removeChild(myul.children[i]);
          }
     }
      for (let i = 0; i < json.length; i++) {
        if(json[i].Type == 'WN'){
          var li = document.createElement('li');
          var a  = document.createElement('a');
          var img = document.createElement('img');
          var span = document.createElement('span');
          var span2 = document.createElement('span');
          
          if (rb1.checked == true){
              span2.innerHTML=json[i].USD +" $";
          }
          if (rb2.checked == true){
            span2.innerHTML=json[i].LBP +" LBP";
          }

          a.href = "#";
          span.innerHTML =json[i].Name;
          img.src = json[i].Img;
          a.append(img,span,span2);
          li.appendChild(a);
          myul.appendChild(li);
        }  
      }
  });
}

function getVData(){
    fetch('https://lit-wave-12091.herokuapp.com/Alcohol')
  .then(response => response.json())
  .then(json => {
     var myul = document.getElementById('v');
     var l = myul.children.length;
     if( l > 0 ){
        for (i = l-1; i >=0 ; i--) {
            myul.removeChild(myul.children[i]);
          }
     }
      for (let i = 0; i < json.length; i++) {
        if(json[i].Type == 'V'){
          var li = document.createElement('li');
          //li.innerHTML = json[i].img;
          var a  = document.createElement('a');
          var img = document.createElement('img');
          var span = document.createElement('span');
          var span2 = document.createElement('span');
          
          if (rb1.checked == true){
              span2.innerHTML=json[i].USD +" $";
          }
          if (rb2.checked == true){
            span2.innerHTML=json[i].LBP +" LBP";
          }

          a.href = "#";
          span.innerHTML =json[i].Name;
          img.src = json[i].Img;
          a.append(img,span,span2);
          li.appendChild(a);
          myul.appendChild(li);
        }  
      }
  });
}

function getAData(){
    getWkData();
    getWnData();
    getVData();
}

getAData();
