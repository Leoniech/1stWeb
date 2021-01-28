function getData(){
    fetch('http://localhost:3000/demo')
  .then(response => response.json())
  .then(json => {
     var myul = document.getElementById('leo');
     var rb1   = document.getElementById('usd');
     var rb2   = document.getElementById('lbp');
     var l = myul.children.length;
     if( l > 0 ){
        for (i = l-1; i >=0 ; i--) {
            myul.removeChild(myul.children[i]);
          }
     }
      for (let i = 0; i < json.length; i++) {
          var li = document.createElement('li');
          //li.innerHTML = json[i].img;
          var a  = document.createElement('a');
          var img = document.createElement('img');
          var span = document.createElement('span');
          var span2 = document.createElement('span');
          
          if (rb1.checked == true){
              span2.innerHTML=json[i].Price_USD +" $";
          }
          if (rb2.checked == true){
            span2.innerHTML=json[i].Price_LBP +" LBP";
          }

          a.href = "#";
          span.innerHTML =json[i].Name;
          img.src = json[i].img;
          a.append(img,span,span2);
          li.appendChild(a);
          myul.appendChild(li);
          
      }
  });
}

getData();