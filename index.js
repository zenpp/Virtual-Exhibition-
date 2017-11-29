AFRAME.registerComponent('solar-listener', {
  
    init: function () {
      
    //   var solar = document.querySelector("#solar");
    //   var el = document.querySelector("#solar_child");
    //   var count = 0;

    //   solar.addEventListener('click', function (evt) {
    //     // setTimeout(function () {
    //         el.setAttribute("visible",true);
            
    //     // }, 2000);
    //   });
      
    //   solar.addEventListener('mouseleave', function(evt) {
    //     // setTimeout(function () {
    //         el.setAttribute("visible",false);
            
    //     // }, 3000);
          
    //   });
       
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

        el.addEventListener('mouseenter', function (evt) {
            onHover = true;
            bicy.setAttribute("visible",true);
            bsit.setAttribute("visible",true);
            bstand.setAttribute("visible",true);
            
        });
        bstand.addEventListener('mouseenter',function(evt) {
            document.querySelector("#bicycle_ec_text").setAttribute("value",12)
            document.querySelector("#bicycle_v_text").setAttribute("value",220)
            document.querySelector("#bicycle_i_text").setAttribute("value",8.9)
            document.querySelector("#bicycle_t_text").setAttribute("value",31)
            document.querySelector("#bicycle_bat_text").setAttribute("value",79+'%')
            bemb.setAttribute("visible",true);
        });
        bicy.addEventListener('mouseenter',function(evt) {
            document.querySelector("#bicycle_ec_text").setAttribute("value",11)
            document.querySelector("#bicycle_v_text").setAttribute("value",220)
            document.querySelector("#bicycle_i_text").setAttribute("value",8.6)
            document.querySelector("#bicycle_t_text").setAttribute("value",36)
            document.querySelector("#bicycle_bat_text").setAttribute("value",77+'%')
            bemb.setAttribute("visible",true);
        });
        bsit.addEventListener('mouseenter',function(evt) {
            document.querySelector("#bicycle_ec_text").setAttribute("value",14)
            document.querySelector("#bicycle_v_text").setAttribute("value",220)
            document.querySelector("#bicycle_i_text").setAttribute("value",9.3)
            document.querySelector("#bicycle_t_text").setAttribute("value",34)
            document.querySelector("#bicycle_bat_text").setAttribute("value",81+'%')
            bemb.setAttribute("visible",true);
        });
        // el.addEventListener('mouseleave', function (evt) {
        //     el.addEventListener('mouseleave', function() {
        //         setTimeout(function() {
        //             bicy.setAttribute("visible",false);
        //             bsit.setAttribute("visible",false);
        //             bstand.setAttribute("visible",false);
        //             bemb.setAttribute("visible",false);
        //         }, 6000);
                
        //     });
            
        // });
      },
    
     
});


AFRAME.registerComponent('stove-listener', {
    
      init: function () {
        var data = this.data;
        var stove = document.querySelector("#stove");
        var el = document.querySelector("#stove_child");

        stove.addEventListener('mouseenter', function (evt) {
          el.setAttribute("visible",true);
        });
        stove.addEventListener('mouseleave', function (evt) {
            el.setAttribute("visible",false);
        });
        
    },
     
  });
