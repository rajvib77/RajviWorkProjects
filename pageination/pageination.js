var myApp = angular.module('myApp', []);
myApp.service('filteredListService', function () {
    this.searched = function (valLists, toSearch) {
        return _.filter(valLists,
        function (i) {
            /* Search Text in all 3 fields */
            return searchUtil(i, toSearch);
        });
    };
    this.paged = function (valLists, pageSize) {
        retVal = [];
        for (var i = 0; i < valLists.length; i++) {
            if (i % pageSize === 0) {
                retVal[Math.floor(i / pageSize)] = [valLists[i]];
            } else {
                retVal[Math.floor(i / pageSize)].push(valLists[i]);
            }
        }
        return retVal;
    };
});
 
var TableCtrl = myApp.controller('TableCtrl', function ($scope, $filter, filteredListService) {
    $scope.pageSize = 4;
    $scope.allItems = getDummyData();
    $scope.reverse = false;
    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        $scope.newEmpId = '';
        $scope.newName = '';
        $scope.newEmail = '';
        $scope.searchText = '';
        $scope.currentPage = 0;
        $scope.Header = ['', '', ''];
    }

    $scope.add = function () {
        $scope.allItems.push({
            EmpId: $scope.newEmpId,
            name: $scope.newName,
            Email: $scope.newEmail
        });
        $scope.resetAll();
    }
    $scope.search = function () {
        $scope.filteredList = filteredListService.searched($scope.allItems, $scope.searchText);
        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination();
    }
    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListService.paged($scope.filteredList, $scope.pageSize);
    };
 
    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };
    $scope.firstPage = function () {
        $scope.currentPage = 0;

    };
    $scope.lastPage = function () {
        $scope.currentPage = $scope.ItemsByPage.length - 1;
    };
 
    $scope.range = function (input, total) {

        var ret = [];
        if (!total) {
            total = input;
            input = 0;
        }
        for (var i = input; i < total; i++) {
            if (i != 0 && i != total - 1) {
                ret.push(i);
            }
        }
        return ret;
    };
    $scope.sort = function (sortBy) {
        $scope.resetAll();
        $scope.columnToOrder = sortBy;
        //$Filter - Standard Service
        $scope.filteredList = $filter('orderBy')($scope.filteredList, $scope.columnToOrder, $scope.reverse);
        if ($scope.reverse) iconName = 'glyphicon glyphicon-chevron-up';
        else iconName = 'glyphicon glyphicon-chevron-down';
        if (sortBy === 'EmpId') {
            $scope.Header[0] = iconName;
        } else if (sortBy === 'name') {
            $scope.Header[1] = iconName;
        } else {
            $scope.Header[2] = iconName;
        }
        $scope.reverse = !$scope.reverse;
        $scope.pagination();

    };
 
    //By Default sort ny Name
    $scope.sort('name');
});
 
function searchUtil(item, toSearch) {
    /* Search Text in all 3 fields */
    return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.Email.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.EmpId == toSearch) ? true : false;
}

function getDummyData() {
    return [{
        EmpId: 2,
        name: 'Jay',
        Email: 'jay@gmail.com'
    }, {
        EmpId: 1,
        name: 'rajvi',
        Email: 'rajvi@gmail.com'

    }, {
        EmpId: 3,
        name: 'saanvi',
        Email: 'saanvi@yahoo.com'
    }, {

        EmpId: 21,
        name: 'Isha',
        Email: 'isha@gmail.com'
    }, {

        EmpId: 11,
        name: 'Dhruvi',
        Email: 'dhruvi@gmail.com'
    }, {
        EmpId: 31,
        name: 'Naisargi',
        Email: 'naisu@gmail.com'
    }, {

        EmpId: 22,
        name: 'Jeet',
        Email: 'jeet@gmail.com'
    }, {
        EmpId: 12,
        name: 'Minal2',
        Email: 'amz@gmail.com'

    }, {
        EmpId: 32,
        name: 'trupti',
        Email: 'tru65@gmail.com'
    }, {
        EmpId: 23,
        name: 'john',
        Email: 'john123@gmail.com'
    }, {
        EmpId: 13,
        name: 'Minal3',
        Email: 'amz@gmail.com'
    }, {
        EmpId: 33,
        name: 'saanvi',
        Email: 'saanvi@gmail.com'
    }];
}
