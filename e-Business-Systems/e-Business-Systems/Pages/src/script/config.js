requirejs.config({
    baseUrl: '/pages/dist/script',
    paths: {
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angularjs/angular'
    },
    skim: {
        angular: { exports: 'angular' }
    }
});