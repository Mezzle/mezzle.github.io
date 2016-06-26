$(function () {

    var postURLs;
    var isFetchingPosts = false;
    var shouldFetchPosts = true;
    var postsToLoad = $(".posts").children().length;
    var loadNewPostsThreshold = 3000;

    // Load the JSON file containing all URLs
    $.getJSON('/all_posts.json', function (data) {
        postURLs = data["posts"];

        // If there aren't any more posts available to load than already visible, disable fetching
        if (postURLs.length <= postsToLoad)
            disableFetching();
    });

    // If there's no spinner, it's not a page where posts should be fetched
    if ($(".infinite-spinner").length < 1)
        shouldFetchPosts = false;

    // Are we close to the end of the page? If we are, load more posts
    $(window).scroll(function (e) {
        console.log(isFetchingPosts, shouldFetchPosts);
        if (!shouldFetchPosts || isFetchingPosts) return;

        var windowHeight = $(window).height();
        var windowScrollPosition = $(window).scrollTop();
        var bottomScrollPosition = windowHeight + windowScrollPosition;
        var documentHeight = $(document).height();

        // If we've scrolled past the loadNewPostsThreshold, fetch posts
        if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
            fetchPosts();
        }
    });

    // Fetch a chunk of posts
    var fetchPosts = function () {
        // Exit if postURLs haven't been loaded
        if (!postURLs) return;

        isFetchingPosts = true;

        // Load as many posts as there were present on the page when it loaded
        // After successfully loading a post, load the next one
        var loadedPosts = 0;
        var postCount = $(".posts").children().length;
        var callback = function () {
            loadedPosts++;
            var postIndex = postCount + loadedPosts;

            if (postIndex > postURLs.length - 1) {
                disableFetching();
                return;
            }

            if (loadedPosts < postsToLoad) {
                fetchPostWithIndex(postIndex, callback);
            } else {
                isFetchingPosts = false;
            }
        };

        fetchPostWithIndex(postCount + loadedPosts, callback);
    };

    var fetchPostWithIndex = function (index, callback) {
        var postURL = postURLs[index];

        $.get(postURL, function (data) {
            $(data).find(".post").appendTo(".posts");
            callback();
        });
    };

    var disableFetching = function () {
        shouldFetchPosts = false;
        isFetchingPosts = false;
        $(".infinite-spinner").fadeOut();
    }

});
