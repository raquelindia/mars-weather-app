var app = angular.module('marsWeatherApp', ["ngRoute"]);
const marsWeatherUrl = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json';
app.controller('appController', function($scope, $http){
    $http.get(marsWeatherUrl).then(function(response){
        $scope.celsiusOrFahrenheit = 'fahrenheit';
        $scope.weatherData = response.data
        $scope.soles = $scope.weatherData.soles;
        $scope.todaysWeather = $scope.soles[0];
        //days of the week
         //todays stuff
         $scope.solesOneDate = $scope.soles[0].terrestrial_date;
         $scope.soleOneAtmosphere = $scope.soles[0].atmo_opacity;
        $scope.soleOneLowC = $scope.soles[0].min_temp;
        $scope.soleOneHighC = $scope.soles[0].max_temp;

        $scope.soleOneLowF = Math.floor(parseFloat($scope.soleOneLowC) * 9/5 + 32);
        $scope.soleOneHighF = Math.floor(parseFloat($scope.soleOneHighC) * 9/5 + 32);


        //day 2
        $scope.solesTwoDate = $scope.soles[1].terrestrial_date;
        $scope.soleTwoAtmosphere = $scope.soles[1].atmo_opacity;
        $scope.soleTwoLowC = $scope.soles[1].min_temp;
        $scope.soleTwoHighC = $scope.soles[1].max_temp;

        $scope.soleTwoLowF = parseFloat($scope.soleTwoLowC) * 9/5 + 32;
        $scope.soleTwoHighF = parseFloat($scope.soleTwoHighC) * 9/5 + 32;

        //day 3
        $scope.solesThreeDate = $scope.soles[2].terrestrial_date;
        $scope.soleThreeAtmosphere = $scope.soles[2].atmo_opacity;
        $scope.soleThreeLowC = $scope.soles[2].min_temp;
        $scope.soleThreeHighC = $scope.soles[2].max_temp;


        $scope.soleThreeLowF = Math.floor(parseFloat($scope.soleThreeLowC) * 9/5 + 32);
        $scope.soleThreeHighF = Math.floor(parseFloat($scope.soleThreeHighC) * 9/5 + 32);

        //day 4
        $scope.solesFourDate = $scope.soles[3].terrestrial_date;
        $scope.soleFourAtmosphere = $scope.soles[3].atmo_opacity;
        $scope.soleFourLowC = $scope.soles[3].min_temp;
        $scope.soleFourHighC = $scope.soles[3].max_temp;


        $scope.soleFourLowF = Math.floor(parseFloat($scope.soleFourLowC) * 9/5 + 32);
        $scope.soleFourHighF = Math.floor(parseFloat($scope.soleFourHighC) * 9/5 + 32);

        //day 5
        $scope.solesFiveDate = $scope.soles[4].terrestrial_date;
        $scope.soleFiveAtmosphere = $scope.soles[4].atmo_opacity;
        $scope.soleFiveLowC = $scope.soles[4].min_temp;
        $scope.soleFiveHighC = $scope.soles[4].max_temp;


        $scope.soleFiveLowF = Math.floor(parseFloat($scope.soleFiveLowC) * 9/5 + 32);
        $scope.soleFiveHighF = Math.floor(parseFloat($scope.soleFiveHighC) * 9/5 + 32);

        //day 6
        $scope.solesSixDate = $scope.soles[5].terrestrial_date;
        $scope.soleSixAtmosphere = $scope.soles[5].atmo_opacity;
        $scope.soleSixLowC = $scope.soles[5].min_temp;
        $scope.soleSixHighC = $scope.soles[5].max_temp;


        $scope.soleSixLowF = Math.floor(parseFloat($scope.soleSixLowC) * 9/5 + 32);
        $scope.soleSixHighF = Math.floor(parseFloat($scope.soleSixHighC) * 9/5 + 32);

        //day 7
        $scope.solesSevenDate = $scope.soles[6].terrestrial_date;
        $scope.soleSevenAtmosphere = $scope.soles[6].atmo_opacity;
        $scope.soleSevenLowC = $scope.soles[6].min_temp;
        $scope.soleSevenHighC = $scope.soles[6].max_temp;


        $scope.soleSevenLowF = Math.floor(parseFloat($scope.soleSevenLowC) * 9/5 + 32);
        $scope.soleSevenHighF = Math.floor(parseFloat($scope.soleSevenHighC) * 9/5 + 32);

        $scope.weeklyDataCelsius = [
            {date: $scope.solesOneDate, high: $scope.soleOneHighC, low: $scope.soleOneHighC, atmosphere: $scope.soleOneAtmosphere},
            {date: $scope.solesTwoDate, high: $scope.soleTwoHighC, low: $scope.soleTwoHighC, atmosphere: $scope.soleTwoAtmosphere},
            {date: $scope.solesThreeDate, high: $scope.soleThreeHighC, low: $scope.soleThreeHighC, atmosphere: $scope.soleThreeAtmosphere},
            {date: $scope.solesFourDate, high: $scope.soleFourHighC, low: $scope.soleFourHighC, atmosphere: $scope.soleFourAtmosphere},
            {date: $scope.solesFiveDate, high: $scope.soleFiveHighC, low: $scope.soleFiveHighC, atmosphere: $scope.soleFiveAtmosphere},
            {date: $scope.solesSixDate, high: $scope.soleSixHighC, low: $scope.soleSixHighC, atmosphere: $scope.soleSixAtmosphere},
            {date: $scope.solesSevenDate, high: $scope.soleSevenHighC, low: $scope.soleSevenHighC, atmosphere: $scope.soleSevenAtmosphere},
        ];

        $scope.weeklyDataFahrenheit = [
            {date: $scope.solesOneDate, high: $scope.soleOneHighF, low: $scope.soleOneHighF, atmosphere: $scope.soleOneAtmosphere},
            {date: $scope.solesTwoDate, high: $scope.soleTwoHighF, low: $scope.soleTwoHighF, atmosphere: $scope.soleTwoAtmosphere},
            {date: $scope.solesThreeDate, high: $scope.soleThreeHighF, low: $scope.soleThreeHighF, atmosphere: $scope.soleThreeAtmosphere},
            {date: $scope.solesFourDate, high: $scope.soleFourHighF, low: $scope.soleFourHighF, atmosphere: $scope.soleFourAtmosphere},
            {date: $scope.solesFiveDate, high: $scope.soleFiveHighF, low: $scope.soleFiveHighF, atmosphere: $scope.soleFiveAtmosphere},
            {date: $scope.solesSixDate, high: $scope.soleSixHighF, low: $scope.soleSixHighF, atmosphere: $scope.soleSixAtmosphere},
            {date: $scope.solesSevenDate, high: $scope.soleSevenHighF, low: $scope.soleSevenHighF, atmosphere: $scope.soleSevenAtmosphere},
        ];
       
        console.log($scope.weatherData)
    }, function(err) {
        console.log(err)
    })

    $scope.fahrenheit = function () {
    $scope.celsiusOrFahrenheit = 'fahrenheit';
    };


    $scope.celsius = function () {
        $scope.celsiusOrFahrenheit = 'celsius';
    };




});

app.directive('previousDaysCelsius', function(){
    return {
        restrict: 'E',
        templateUrl: 'home-files/components/previousCelsius.html',
        scope: {
            high: '@',
            low: '@',
            date: '@',
            atmosphere: '@'
        },
    controller: 'appController'
    };
});


app.directive('previousDaysFahrenheit', function(){
    return {
        restrict: 'E',
        templateUrl: 'home-files/components/previousFahrenheit.html',
        scope: {
            high: '@',
            low: '@',
            date: '@',
            atmosphere: '@'
        },
    controller: 'appController'
    };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller: 'appController'
    })
})