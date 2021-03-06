/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed should have a defined and not empty URL', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed should have a name defined and not empty', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function () {
        /* This test ensures that the menu element is
         * hidden by default. 
         */
        it('sould be hidden by default', function () {
            expect($('body')[0].classList[0]).toBe('menu-hidden');
        });


        /* This test ensures that the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should change visibility when menu icon is clicked', function () {
            $('.menu-icon-link')[0].click();
            expect($('body')[0].classList[0]).not.toBe('menu-hidden');

            $('.menu-icon-link')[0].click();
            expect($('body')[0].classList[0]).toBe('menu-hidden');
        });

    });



    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Enteries', function () {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('should has at leat one .entry element', function (done) {
            expect($('.feed').find('.entry').length).not.toBe(0);
            done();
        });


    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {
        /* This test ensures taht when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initialContent;
        beforeEach(function (done) {
            initialContent = $('.feed')[0].innerText
            loadFeed(1, function () {
                done();
            });
        });

        it('should change the content', function () {
            expect($('.feed')[0].innerText).not.toBe(initialContent);
            
        });
    });

}());