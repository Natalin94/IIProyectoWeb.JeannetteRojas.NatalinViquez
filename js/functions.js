function obtenerXHR()
{  
    // 19 de febrero de 2009 
    req = false; 
    if(window.XMLHttpRequest) 
        { 
            req = new XMLHttpRequest(); 
        }     
    else 
        { 
            if(ActiveXObject) 
                { 
                    //definir el vector 
                    var vectorVersiones = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0","MSXML2.XMLHttp", "Microsoft.XMLHttp"]; 
                    //lo recorremos para instanciar cada uno de ellos 
                    for(var i=0; i<vectorVersiones.lengt; i++) 
                        { 
                            try 
                                { 
                                    req = new ActiveXObject(vectorVersiones[i]); 
                                    return req; 
                                } 
                            catch(e) 
                                {} 
                        } 
                } 
        } 
    return req; 
}; 

function agregarEquipo()
{
          
  var country = document.getElementById("country").value;
  var confederation = document.getElementById("confederation").value;
  var points = document.getElementById("points").value;
  var flag = document.getElementById("flag").value;
 

//IMPLEMENTACION DEL PHP
  var peticion = obtenerXHR(); 
  url="../php/agregarEquipos.php?tipo=insertar";
  url+="&country="+country;
  url+="&confederation="+confederation;
  url+="&points="+points;
  url+="&flag="+flag;

  peticion.open("GET", url , true); 
  peticion.onreadystatechange=function ()
    {
      if (peticion.readyState===4)
      {
        if (peticion.status===200)
        {
          if (peticion.responseText===1)
          {
            alert ("si se pudo insertar");
          }
        }
      }
    }
    ;
  peticion.send(null);

  document.getElementById("resultado").innerHTML=" \
  Equipo Agregado\
  <br> idGrupo: "+country+" \
  <br> idTutoria: "+confederation+" \
  <br> cupo: "+points+" \
  <br> anno: "+flag;

  document.getElementById("form1").reset();
}