var webCarto = function() {

  //this.superclass.constructor.call();

  core = {
    nav : navigator.geolocation,
    /*
    @property components array
     Ordinal array [field name, CSS class name for target, DOM Element for information target].
     The DOM Element begins at null and remains as such until it is set or found
     by the script.
    */
    components : [
      ['longitude','webGeo-long',null],
      ['latitude','webGeo-lat',null],
      ['accuracy','webGeo-accuracy',null],
      ['altitude','webGeo-altitude',null],
      ['altitudeAccuracy','webGeo-altAccuracy',null],
      ['heading','webGeo-heading',null],
      ['speed','webGeo-speed',null],
      ['timestamp','webGeo-time',null],
      ['error','webGeo-error',null],
      ['map','webGeo-map', null]
    ],
    getEl : function(el){
      //TODO versioning
      return document.querySelector(el);
    },
    templateFeedbackAuto : function(){
      var destin = this.getEl('.webGeo-autoCanvas');
      if(!destin) return false;
      //TODO use HTML5 labels and {{$variables}} for internationalization
      var ret = '';
      ret += '<span class="webGeo-error">';
      ret += '</span>';
      ret += '<br/>';
      ret += 'Longitude : <span class="webGeo-long"></span><br/>';
      ret += 'Latitude : <span class="webGeo-lat"></span><br/>';
      ret += 'Accuracy : <span class="webGeo-accuracy"></span><br/>';
      ret += 'Altitude : <span class="webGeo-altitude"></span><br/>';
      ret += 'Accuracy : <span class="webGeo-altAccuracy"></span><br/>';
      ret += 'Speed : <span class="webGeo-speed"></span><br/>';
      ret += 'Heading : <span class="webGeo-heading"></span><br/>';
      ret += 'Time : <span class="webGeo-time"></span><br/>';

      var divy = document.createElement('div');
      divy.className = 'webGeo-console';
      divy.innerHTML = ret;
      destin.appendChild(divy);
      return divy;
    },
    /* Looks for items with associated classes */
    initUI : function(){
      //TODO bootstrap logic
      if(this.__state > -1) return null; //don't repeat initialization
      if(this.__state === -1){
        this.__state = 0;
      }
      // create the auto template if the canvas exists
      this.templateFeedbackAuto();
      // now we seek out the DOM for targets
      var ui = null;
      var nm = '';
      for (itm in this.components){
        nm = this.components[itm][0];
        ui = this.getEl("." + this.components[itm][1]);
        this.components[itm][2] = ui;
      }
    },
    refreshUI : function(){
      this.initUI();

      var ui = null;
      var entry = this.lastEntry();
      var val = null;

      for (itm in this.components){
        ui = this.components[itm][2];
        prop = this.components[itm][0];
        val = this.getProp(entry, prop);
        //TODO give value precedent over innerHTML
        if (ui != null){
          switch (prop){
            case 'map':
              if (typeof(val) == 'string'){
                //update to static image
                ui.src = val;
                continue;
              }
              if (typeof(val) == 'object'){
                //update to Google Map
              }
              break;
            case 'timestamp':
             //TODO test if val is a string and not numeric, adapt value
             //TODO property to determine desired timestamp
              val = (val)?this.formatDate(entry.timestamp,''):"";
              break;
            case 'accuracy':
            case 'altitudeAccuracy':
              val = (val)?this.formatMeters(val):"";
              break;
            default :
              break;
          }
          val = (val)?val:"";
          if (ui.hasOwnProperty('value')){
            ui.value = val;
          } else {
            ui.innerHTML = val;
          }
        }
      }
    },
    /*
        @property opts object
        Our preferred options when making a asynchronous call to the navigator.geolocation
        API's getCurrentPosition or watchPosition methods.
         */
    opts : {
      enableHighAccuracy: true, //default: false
      timeout: 10000, // default infinity
      maximumAge: 5000  // default 0ms.
    },
    optsMapDynamic : {
      center : null, //MUST BE SET
      zoom : 14,
      mapTypeId : null, //google.maps.MapTypeId.ROADMAP,
      mapTypeControl : false,
      navigationControlOptions : {
        style : null //google.maps.NavigationControlStyle.SMALL
      }
    },
    getOptsMapDynamic : function(opts){
      //TODO opts object application
      if (!google || !google.maps) return null;
      var ret = new this.optsMapDynamic;
      ret.mapTypeId = google.maps.MapTypeId.ROADMAP;
      ret.navigationControlOptions.style = google.maps.NavigationControlStyle.SMALL;
      return ret;
    },
    /*
        @property coordStack array
        Storage of previously called locations.
        FIXME currently this has no clean-up function. Duplicate records and accessive local storage should be avoided.
         */
    coordStack : [],
    /*
    @property __state number
    @description The state of the object
      -1 = uninitialized
       0 = initialized
       1 = in an asynchronous call
    **/
    __state : -1,
    setStatusCompleted : function(){
     this.__state = 0;
    },
    /*
      @method setStateBusy
      @description Allows for UX/UI feedback
      TODO Add a callback function ability here to override the standard
    */
    setStateBusy : function(){
      this.__state = 1;

//this.addErr('This is a total bogus error message just for the sake of testing. You should have your data soon.');
    },
    /*
        @method getMapImg
        Sets the source of image with id 'mapholder' to a static google map devoid
        of any Google Map API extras such as Markers. This method should work as a fallback
        should you not wish to load the entire google.map.api.
        @parameter lat number
        The numeric value of the latitudinal location.
        @parameter lon number
        The numeric value of the given longitudinal location
        @return string A string URI representing the path to requested gelocation's
        image file. In the case of Google, a path to a .PNG file is returned.
         */
    getMapImg : function(lat, lon){
      var mapholder = document.getElementById('mapholder');

      var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=14&size=400x300&sensor=false";
      if (mapholder) mapholder.src = img_url;
      return img_url;
    },
    getMap : function(lat, lon){
      latlon = new google.maps.LatLng(lat, lon);
console.log(latlon);
      mapholder = document.getElementById('mapholder');
//      mapholder.style.height = '250px';
//      mapholder.style.width = '500px';
      var opts = this.getOptsMapDynamic();
      opts.center = latlon;

      var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
      var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
    },
    getNew : function(){
      var self = this;
      if (self.__state === -1) self.initUI();
      if (!self.__state === 0) return null; //abort if UI is not ready or async-call is in progress
      this.setStateBusy();
      this.nav.getCurrentPosition(function(dat){
          self.addNew(dat);
        },
        function(err){
          self.addErr(err)
        },
        self.opts
      );
    },
    addNew : function(dat){
      dat.coords.timestamp = dat.timestamp;
      // assign static map url to coordstack
      dat.coords.map = this.getMapImg(dat.coords.latitude, dat.coords.longitude);
      this.coordStack.push(dat.coords);
      this.setStatusCompleted();
      this.refreshUI();
  },
    addErr : function(err){
      var rpt = {
        latitude: 'Not Available',
        longitude: 'Not Available',
        accuracy: 'Totally inaccurate',
        err : null,
        timestamp : Math.round(new Date().getTime())
      };
      if (typeof(err) === 'string'){
        rpt.error = err;
//      this.coordStack.push(rpt);
//      return err;
      }
      var ret = "An error retrieving Geographical data.";
      switch(err.code) {
        case err.PERMISSION_DENIED:
          ret = "User denied the request for Geolocation.";
          break;
        case err.POSITION_UNAVAILABLE:
          ret = "Location information is unavailable.";
          break;
        case err.TIMEOUT:
          ret = "The request to get user location timed out.";
          break;
        case err.UNKNOWN_ERROR:
          ret = "An unknown error occurred.";
          break;
      }
      rpt.error = ret;
      this.coordStack.push(rpt);
      this.setStatusCompleted();
      this.refreshUI();

      return rpt;
    },
    getProp : function(entry, property){
            switch (typeof(entry)){
                case 'number':
                    entry = this.coordStack[entry];
                    break;
                case 'object':
                    break;
                default:
                    return null;
            }

            if(!entry.hasOwnProperty(property)) return null;
            return entry[property];
        },
    lastEntry : function(){
            if(!this.coordStack && this.coordStack.length > 0) return null;
            var i = this.coordStack.length - 1;
            return this.coordStack[i];
        },
    formatMeters : function(meters){
            var ret = '';
            var km = meters * 0.001;
            ret += (km >= 1)? km + ' kilometers' : meters + ' meters';
            var yards = meters * 1.09361;
            yards = Math.round(yards * 100) / 100;
            var miles = meters * 0.000621371;
            miles = Math.round(miles * 100) / 100;
            ret += (miles >= 1)? ' ' + miles + ' miles':' ' + yards + ' yards';
            return ret;
        },
    formatDate: function(stamp, form){
            function fillTwo(part){
                return part.substr(part.length-2);
            };
            var a = new Date(stamp);
            //Buried until we can internationalize it
            //var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            //var month = months[a.getMonth()];
            var year = a.getFullYear();
            var month = a.getMonth() + 1;
            month = '0' + month;
            month = fillTwo(month);
            var day = '0' + a.getDate();
            day = fillTwo(day);
            var hour = '0' + a.getHours();
            var min = '0' + a.getMinutes();
            min = fillTwo(min);
            var sec = '0' + a.getSeconds();
            sec = fillTwo(sec);

            var date = '' + year + '-' + month + '-' + day;
            var time = '' + hour + ':' + min + ':' + sec ;
            switch (form){
                case 'time':
                    return time;
                    break;
                case 'date':
                    return date;
                    break;
                case 'iso':
                    return a.toISOString().match(/(\d{2}:\d{2}:\d{2})/);
                    break;
                default:
                    break;
            }
            return date + ' ' + time;
        },
    getLat : function(){
            var args = (arguments.length > 0)? arguments:this.lastEntry();
            return this.getProp(args, 'latitude');
        },
    getLon : function(){
            var args = (arguments.length > 0)? arguments:this.lastEntry();
            return this.getProp(args, 'longitude');
        },
    getDateFull: function(){
            var args = (arguments.length > 0)? arguments:this.lastEntry();
            var stamp = this.getProp(args, 'timestamp');
            return this.formatDate(stamp,'full');
        },
    getDate: function() {
            var args = (arguments.length > 0)? arguments:this.lastEntry();
            var stamp = this.getProp(args, 'timestamp');
            return this.formatDate(stamp,'date');
        },
    getTime: function() {
            var args = (arguments.length > 0)? arguments:this.lastEntry();
            var stamp = this.getProp(args, 'timestamp');
            return this.formatDate(stamp,'time');
        }
  };

  //TODO bootstrap logic

  return core;
}();
