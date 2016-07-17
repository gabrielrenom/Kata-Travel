angular
    .module('app')
    .component('footerComponent', {
    templateUrl: 'app/components/Footer.html',
    controller: FooterController,
    bindings: {
        completedCount: '<',
        activeCount: '<',
        selectedFilter: '<filter',
        onClearCompleted: '&',
        onShow: '&'
    }
});
//# sourceMappingURL=Footer.js.map