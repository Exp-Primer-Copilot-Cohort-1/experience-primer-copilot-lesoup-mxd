function skillsMember() {
    return {
        name: 'skillsMember',
        templateUrl: 'app/components/member/member.html',
        restrict: 'E',
        controller: 'MemberCtrl',
        controllerAs: 'memberCtrl',
        bindToController: true
    };
}