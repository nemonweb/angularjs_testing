describe("Unit testing plus minus", function(){

    var $compile,
        $rootScope;

    beforeEach(module('testApp'));
    beforeEach(module('templates'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));



    it('should be 1 after dec', function(){
        var element = $compile("<item-count count='2' />")($rootScope);
        $rootScope.$digest();
        $rootScope.dec();
        var count = parseInt($rootScope.count);
        expect(count).toEqual(1);
    });

    it('should be not less 1', function(){
        var element = $compile("<item-count count='1' />")($rootScope);
        $rootScope.$digest();
        $rootScope.dec();
        var count = parseInt($rootScope.count);
        expect(count).toEqual(1);
    });

    it('should be 2 after inc', function(){
        var element = $compile("<item-count count='1' />")($rootScope);
        $rootScope.$digest();
        $rootScope.inc();
        var count = parseInt($rootScope.count);
        expect(count).toEqual(2);
    });

    it('should be not bit 10', function(){
        var element = $compile("<item-count count='10' />")($rootScope);
        $rootScope.$digest();
        $rootScope.inc();
        var count = parseInt($rootScope.count);
        expect(count).toEqual(10);
    });

    it('should be 1 if not count', function(){
        var element = $compile("<item-count />")($rootScope);
        $rootScope.$digest();
        var count = parseInt($rootScope.count);
        expect(count).toEqual(1);
    });


});
