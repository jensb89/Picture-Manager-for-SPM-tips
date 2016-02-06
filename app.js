'use strict';

angular.module('TipApp', [])
  .controller('TipsCtrl', function($scope,$http){
    // Load data from JSON file:
    $http.jsonp('data.json')
       .success(function(res){
          $scope.tips = res;                
    });

    // Sort by Used Status:
    $scope.setSelectedStatus = function (value) {
        if ($scope.selectedStatus === value) {
            $scope.selectedStatus = undefined;
        } else {
            $scope.selectedStatus = value;
        }
    };

    $scope.Statuses = [1,0];
    
    $scope.sortByUsed = function(entry){
        return entry.Used === $scope.selectedStatus || $scope.selectedStatus === undefined;
    };

    // Save JSON file to pc
    $scope.saveToPc = function (data, filename) {

      if (!data) {
        console.error('No data');
        return;
      }

      if (!filename) {
        filename = 'data.json';
      }

      if (typeof data === 'object') {
      //data = JSON.stringify(data, undefined, 2); adds angulars $$hashkey in the JSON
      data = angular.toJson(data, 2)
      data = 'angular.callbacks._0(' + data + ')' //callback for JSONP as a workaround, since JSON_CALLBACK is not working
    }

    var blob = new Blob([data], {type: 'text/json'}),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  };

  });
