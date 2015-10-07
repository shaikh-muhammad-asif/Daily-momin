angular.module('dailyMomin.controllers', ['chart.js','angles'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('tabCtrl', function($scope,$ionicTabsDelegate, $timeout) {

      $scope.name = "asif";
      $scope.tab1=true;
      $scope.tab2 = false;
      //$scope.showFooter = true;

      $scope.tabs1 = function(){
        $scope.tab1 = true;
        $scope.tab2 = false;
        $scope.showFooter = true;

      };
      $scope.tabs2 = function(){
        //alert("ok");
        $scope.tab1 = false;
        $scope.tab2 = true;
        $scope.showFooter =false;
      };

        $scope.togle = function() {
            console.log('ok');
            $scope.showFooter = true;
        };
      $scope.lists = [
          {name:"1.	Today, did you observe virtuous intentions before performing some of the permissible acts? Moreover, did you persuade at least two others to do the same?",done:false},
          {name:"2.	Today, did you offer all the five daily Salah in the first row of the Masjid, with Jama'at (Congregation), achieving the Primary Takbir'? Did you try to take at least one person to the Masjid with you?",done:false},
          {name:"3.	Today, did you recite Ayat-ul-Kursi  Tasbih-e-Fatimah and Surah-tul-lkhlas after offering each of the daily Salah, and before going to sleep? did you recite or listen to Surah-tul-Mulk  at night?",done:false},
          {name:"4.	Today, did you respond to Azan [call for Salah] and Iqamah [call to congregational Salah] discontinuing all activities e.g. talking, walking, picking up and putting down things, talking on the phone, driving car etc? (If Azan starts while you are already eating/drinking, you may continue.)",done:false},
          {name:"5.	Today, did you recite some Awrad from your Shajarah and invoked Salat-‘Alan-Nabi  at least 313 times?",done:false},
          {name:"6.	Today, whilst going at work or returning home in bus/ train etc. or whilst walking through the lanes, did you greet the Muslims sitting or standing next with Salam?",done:false},
          {name:"7.	Today, did you converse courteously with everybody (at home and outside) whether younger or older, even with your mother ? [In Urdu, address others by ‘Ap’ instead of Tu’; and say ‘Ji’ instead of ‘Han’].",done:false},
          {name:"8.	Today, did you say InshAllah  while intending for any lawful act Alhamdullillahi ala Quli Haal  on being asked about your health etc. instead of complaining; and MashAllah upon seeing some bounty?",done:false},
          {name:"9.	Today, did you respond by Salam to the Salam paid to you by others? If someone invoked Alhamdulillah upon sneezing before you, did you respond by invoking yar hamukumullah (in a tone audible to both)?",done:false},
          {name:"9.	Today, did you respond by Salam to the Salam paid to you by others? If someone invoked Alhamdulillah upon sneezing before you, did you respond by invoking yar hamukumullah (in a tone audible to both)?",done:false}
      ];
      $scope.newlist = [];

        $scope.submit = function(){
            console.log('ok');
            var oldList = $scope.lists;
            $scope.lists = [];
            angular.forEach(oldList,function(x){
                if(!x.done){
                    $scope.lists.push(x);
                }else{
                    $scope.newlist.push(x);
                }
            });
            $scope.showFooter = false;
            //$scope.$digest();
        };
        $scope.storeTab = function(tab_number){
            console.log('Storing tab  : ' + tab_number);

            var open_tab = tab_number;

            // Needed to switch the view when clicking on a tab
            $ionicTabsDelegate.select(tab_number);

            localStorage.setItem('open_tab', JSON.stringify(open_tab));
            //alert('just stored tab: '+ JSON.parse(which_tab));
        };

        $scope.doRefresh = function() {

            console.log('Refreshing!');
            $timeout( function() {
                //simulate async response
                /* $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);*/

                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');

            }, 1000);

        };
    })

.controller('settingCtrl', function($scope,$ionicTabsDelegate) {
        $scope.ok = 'asif';
        $scope.img = '../img/images%20(1).jpg';
        $scope.storeTabs = function(tab_number){
            console.log('Storing tab  : ' + tab_number);

            var open_tab = tab_number;

            // Needed to switch the view when clicking on a tab
            $ionicTabsDelegate.select(tab_number);

            localStorage.setItem('open_tab', JSON.stringify(open_tab));
            //alert('just stored tab: '+ JSON.parse(which_tab));
        };
        $scope.storeTabs = function(tab_number){
            console.log('Storing tab  : ' + tab_number);

            var open_tab = tab_number;

            // Needed to switch the view when clicking on a tab
            $ionicTabsDelegate.select(tab_number);

            localStorage.setItem('open_tab', JSON.stringify(open_tab));
            //alert('just stored tab: '+ JSON.parse(which_tab));
        };


        $scope.graph = {};
        $scope.graph.data = [
            //Awake
            [30, 15, 20, 12, 16, 12, 8]//Asleep

        ];
        $scope.graph.data1 = [
            //Awake
            [30, 15, 20, 12, 16, 12, 8,7,15,11,9,14,25,1,18,28]//Asleep

        ];
        $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        $scope.graph.labels1 = ['1', '2', '4', '6', '8', '10', '12','14','16','18','20','22','24','26','28','30'];
        $scope.graph.series = ['Awake', 'Asleep'];
        $scope.donutchart = [
            {
                value: 25,
                color:"#88DD22",
                highlight: "#66a815",
                label: "CHECK"
            },
            {
                value: 5,
                color: "#FBAF16",
                highlight: "#c68707",
                label: "UNCHECK"
            }
        ];

        $scope.x = 70;



        $scope.hello = function(){
            //$(function(){
            //    var $ppc = $('.progress-pie-chart'),
            //        percent = parseInt($scope.x),
            //        deg = 360*percent/100;
            //    if (percent > 50) {
            //        $ppc.addClass('gt-50');
            //    }
            //    $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
            //    $('.ppc-percents span').html(percent+'%');
            //});
            $('.stat-group').each(function(){

                //cache some stuff
                that = $(this);
                var svgObj = that.find('.svg');
                var perObj = that.find('.per');

                //establish dimentions
                var wide = that.width();
                var center = wide/2;
                var radius = wide*0.8/2;
                var start = center - radius;

                //gab the stats
                var per = perObj.text().replace("%","") / 100;

                //set up the shapes
                var svg = Snap(svgObj.get(0));
                var arc = svg.path("");
                var circle = svg.circle(wide/2, wide/2, radius);

                //initialize the circle pre-animation
                circle.attr({
                    stroke: '#dbdbdb',
                    fill: 'none',
                    strokeWidth: 3
                });

                //empty the percentage
                perObj.text('');

                //gather everything together
                var stat = {
                    center: center,
                    radius: radius,
                    start: start,
                    svgObj: svgObj,
                    per: per,
                    svg: svg,
                    arc: arc,
                    circle: circle
                };

                //call the animation
                run(stat);

            });

            //animation function
            function run(stat) {

                //establish the animation end point
                var endpoint = stat.per*360;

                //set up animation (from, to, setter)
                Snap.animate(0, endpoint, function(val) {

                    //remove the previous arc
                    stat.arc.remove();

                    //get the current percentage
                    var curPer = Math.round(val/360*100);

                    //if it's maxed out
                    if(curPer == 100){

                        //color the circle stroke instead of the arc
                        stat.circle.attr({
                            stroke: "#199dab"
                        });

                        //otherwise animate the arc
                    } else {

                        //calculate the arc
                        var d = val;
                        var dr = d-90;
                        var radians = Math.PI*(dr)/180;
                        var endx = stat.center + stat.radius*Math.cos(radians);
                        var endy = stat.center + stat.radius * Math.sin(radians);
                        var largeArc = d>180 ? 1 : 0;
                        var path = "M"+stat.center+","+stat.start+" A"+stat.radius+","+stat.radius+" 0 "+largeArc+",1 "+endx+","+endy;

                        //place the arc
                        stat.arc = stat.svg.path(path);

                        //style the arc
                        stat.arc.attr({
                            stroke: '#199dab',
                            fill: 'none',
                            strokeWidth: 3
                        });

                    }

                    //grow the percentage text
                    stat.svgObj.prev().html(curPer +'%');

                    //animation speed and easing
                }, 1500, mina.easeinout);

            }
        };
        $scope.hello();


})
.controller('tabe',function($scope){
        $scope.x = parseInt(70);
$scope.ok = function(){

    $('.stat-group').each(function(){

        //cache some stuff
        that = $(this);
        var svgObj = that.find('.svg');
        var perObj = that.find('.per');

        //establish dimentions
        var wide = that.width();
        var center = wide/2;
        var radius = wide*0.8/2;
        var start = center - radius;

        //gab the stats
        var per = perObj.text().replace("%","") / 100;

        //set up the shapes
        var svg = Snap(svgObj.get(0));
        var arc = svg.path("");
        var circle = svg.circle(wide/2, wide/2, radius);

        //initialize the circle pre-animation
        circle.attr({
            stroke: '#dbdbdb',
            fill: 'none',
            strokeWidth: 3
        });

        //empty the percentage
        perObj.text('');

        //gather everything together
        var stat = {
            center: center,
            radius: radius,
            start: start,
            svgObj: svgObj,
            per: per,
            svg: svg,
            arc: arc,
            circle: circle
        };

        //call the animation
        run(stat);

    });

    //animation function
    function run(stat) {

        //establish the animation end point
        var endpoint = stat.per*360;

        //set up animation (from, to, setter)
        Snap.animate(0, endpoint, function(val) {

            //remove the previous arc
            stat.arc.remove();

            //get the current percentage
            var curPer = Math.round(val/360*100);

            //if it's maxed out
            if(curPer == 100){

                //color the circle stroke instead of the arc
                stat.circle.attr({
                    stroke: "#199dab"
                });

                //otherwise animate the arc
            } else {

                //calculate the arc
                var d = val;
                var dr = d-90;
                var radians = Math.PI*(dr)/180;
                var endx = stat.center + stat.radius*Math.cos(radians);
                var endy = stat.center + stat.radius * Math.sin(radians);
                var largeArc = d>180 ? 1 : 0;
                var path = "M"+stat.center+","+stat.start+" A"+stat.radius+","+stat.radius+" 0 "+largeArc+",1 "+endx+","+endy;

                //place the arc
                stat.arc = stat.svg.path(path);

                //style the arc
                stat.arc.attr({
                    stroke: '#199dab',
                    fill: 'none',
                    strokeWidth: 3
                });

            }

            //grow the percentage text
            stat.svgObj.prev().html(curPer +'%');

            //animation speed and easing
        }, 1500, mina.easeinout);

    }
};
        $scope.ok();
})

var angles = angular.module("angles", []);

angles.chart = function (type) {
    return {
        restrict: "A",
        scope: {
            data: "=",
            options: "=",
            id: "@",
            width: "=",
            height: "=",
            resize: "=",
            chart: "@",
            segments: "@",
            responsive: "=",
            tooltip: "=",
            legend: "="
        },
        link: function ($scope, $elem) {
            var ctx = $elem[0].getContext("2d");
            var autosize = false;

            $scope.size = function () {
                if ($scope.width <= 0) {
                    $elem.width($elem.parent().width());
                    ctx.canvas.width = $elem.width();
                } else {
                    ctx.canvas.width = $scope.width || ctx.canvas.width;
                    autosize = true;
                }

                if($scope.height <= 0){
                    $elem.height($elem.parent().height());
                    ctx.canvas.height = ctx.canvas.width / 2;
                } else {
                    ctx.canvas.height = $scope.height || ctx.canvas.height;
                    autosize = true;
                }
            }

            $scope.$watch("data", function (newVal, oldVal) {
                if(chartCreated)
                    chartCreated.destroy();

                // if data not defined, exit
                if (!newVal) {
                    return;
                }
                if ($scope.chart) { type = $scope.chart; }

                if(autosize){
                    $scope.size();
                    chart = new Chart(ctx);
                };

                if($scope.responsive || $scope.resize)
                    $scope.options.responsive = true;

                if($scope.responsive !== undefined)
                    $scope.options.responsive = $scope.responsive;

                chartCreated = chart[type]($scope.data, $scope.options);
                chartCreated.update();
                if($scope.legend)
                    angular.element($elem[0]).parent().after( chartCreated.generateLegend() );
            }, true);

            $scope.$watch("tooltip", function (newVal, oldVal){
                chartCreated.draw();
                if(newVal===undefined || !chartCreated.segments)
                    return;
                if(!isFinite(newVal) || newVal >= chartCreated.segments.length || newVal < 0)
                    return;
                var activeSegment = chartCreated.segments[newVal];
                activeSegment.save();
                activeSegment.fillColor = activeSegment.highlightColor;
                chartCreated.showTooltip([activeSegment]);
                activeSegment.restore();
            }, true);

            $scope.size();
            var chart = new Chart(ctx);
            var chartCreated;
        }
    }
}
angles.directive("donutchart", function () { return angles.chart("Doughnut"); });

//!! IGNORE THE REST !!
