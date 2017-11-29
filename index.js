AFRAME.registerComponent('solar-listener', {
  
    init: function () {
      var data = this.data;
      var el = this.el;
      var event = this.event

      el.addEventListener('click', function (evt) {
        var el = document.querySelector("#solar_child");
        //getValue();
        document.querySelector("#solar_ec_graph").setAttribute('animation__move', 'to', '20');
        document.querySelector("#solar_ec_text").setAttribute("value",5.5)
        document.querySelector("#solar_v_graph").setAttribute("to",180);
        document.querySelector("#solar_v_text").setAttribute("value",220)
        document.querySelector("#solar_i_graph").setAttribute("to",180);
        document.querySelector("#solar_i_text").setAttribute("value",8.8)
        document.querySelector("#solar_t_graph").setAttribute("to",180);
        document.querySelector("#solar_t_text").setAttribute("value",35)
        document.querySelector("#solar_bat_graph").setAttribute("to",20);
        document.querySelector("#solar_bat_text").setAttribute("value",78+'%')
        //console.log(document.querySelector("#solar_ec_graph").getAttribute("to"));
        el.emit(event);
        el.setAttribute("visible",true);
      });
      
      el.addEventListener('mouseleave', function (evt) {
          var el = document.querySelector("#solar_child");
          el.setAttribute("visible",false);
      });

      function getValue()
      {
          var theUrl = "http://csrs.ku.ac.th/devices/tm?ID=windpower0000&begin=2017-11-28T22:00:00Z&end=2017-11-28T22:01:00Z";
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
          xmlHttp.send( null );
          var jsonResponse = JSON.parse(xmlHttp.responseText);
          if(jsonResponse == null){
              return null;
          }
          //return jsonResponse[0]["gen_bat_avg"];
      }
    },
  
   
});
AFRAME.registerComponent('bicycle-listener', {
    
    init: function () {
        var data = this.data;
        var el = this.el;
        var delayInMilliseconds = 8000;
        var onHover;
        var bicy = document.querySelector("#bicycle_bicy");
        var bsit = document.querySelector("#bicycle_bsit");
        var bstand = document.querySelector("#bicycle_bstand");
        var bemb = document.querySelector("#bicycle_em_board");

        el.addEventListener('click', function (evt) {
            onHover = true;
            bicy.setAttribute("visible",true);
            bsit.setAttribute("visible",true);
            bstand.setAttribute("visible",true);
            
        });
        bstand.addEventListener('click',function(evt) {
            // bemb.setAttribute("visible",false);
            document.querySelector("#bicycle_ec_graph").setAttribute("to",180);
            document.querySelector("#bicycle_ec_text").setAttribute("value",40)
            document.querySelector("#bicycle_v_graph").setAttribute("to",180);
            document.querySelector("#bicycle_v_text").setAttribute("value",34)
            document.querySelector("#bicycle_i_graph").setAttribute("to",180);
            document.querySelector("#bicycle_i_text").setAttribute("value",34)
            document.querySelector("#bicycle_t_graph").setAttribute("to",180);
            document.querySelector("#bicycle_t_text").setAttribute("value",34)
            document.querySelector("#bicycle_bat_graph").setAttribute("to",60);
            document.querySelector("#bicycle_bat_text").setAttribute("value",34+'%')
            bemb.setAttribute("visible",true);
        });
        bicy.addEventListener('click',function(evt) {
            // bemb.setAttribute("visible",false);
            document.querySelector("#bicycle_ec_graph").setAttribute("to",180);
            document.querySelector("#bicycle_ec_text").setAttribute("value",39)
            document.querySelector("#bicycle_v_graph").setAttribute("to",180);
            document.querySelector("#bicycle_v_text").setAttribute("value",34)
            document.querySelector("#bicycle_i_graph").setAttribute("to",180);
            document.querySelector("#bicycle_i_text").setAttribute("value",34)
            document.querySelector("#bicycle_t_graph").setAttribute("to",180);
            document.querySelector("#bicycle_t_text").setAttribute("value",34)
            document.querySelector("#bicycle_bat_graph").setAttribute("to",60);
            document.querySelector("#bicycle_bat_text").setAttribute("value",37+'%')
            bemb.setAttribute("visible",true);
        });
        bsit.addEventListener('click',function(evt) {
            // bemb.setAttribute("visible",false);
            document.querySelector("#bicycle_ec_graph").setAttribute("to",180);
            document.querySelector("#bicycle_ec_text").setAttribute("value",34)
            document.querySelector("#bicycle_v_graph").setAttribute("to",180);
            document.querySelector("#bicycle_v_text").setAttribute("value",34)
            document.querySelector("#bicycle_i_graph").setAttribute("to",180);
            document.querySelector("#bicycle_i_text").setAttribute("value",34)
            document.querySelector("#bicycle_t_graph").setAttribute("to",180);
            document.querySelector("#bicycle_t_text").setAttribute("value",34)
            document.querySelector("#bicycle_bat_graph").setAttribute("to",60);
            document.querySelector("#bicycle_bat_text").setAttribute("value",40+'%')
            bemb.setAttribute("visible",true);
        });
        el.addEventListener('mouseleave', function (evt) {
            bicy.setAttribute("visible",false);
            bsit.setAttribute("visible",false);
            bstand.setAttribute("visible",false);
            bemb.setAttribute("visible",false)
          
        });
      },
    
     
});


AFRAME.registerComponent('stove-listener', {
    
      init: function () {
        var data = this.data;
        var el = this.el;

        el.addEventListener('click', function (evt) {
          var el = document.querySelector("#stove_child");
          document.querySelector("#solar_ec_graph").setAttribute("to",180);
          document.querySelector("#solar_ec_text").setAttribute("value",34)
          document.querySelector("#solar_v_graph").setAttribute("to",180);
          document.querySelector("#solar_v_text").setAttribute("value",34)
          document.querySelector("#solar_i_graph").setAttribute("to",180);
          document.querySelector("#solar_i_text").setAttribute("value",34)
          document.querySelector("#solar_t_graph").setAttribute("to",180);
          document.querySelector("#solar_t_text").setAttribute("value",34)
          document.querySelector("#solar_bat_graph").setAttribute("to",60);
          document.querySelector("#solar_bat_text").setAttribute("value",34)
          el.setAttribute("visible",true);
        });
        el.addEventListener('mouseleave', function (evt) {
            var el = document.querySelector("#stove_child");
            
            el.setAttribute("visible",false);
        });
    },
     
  });
