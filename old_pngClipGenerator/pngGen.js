function abc() {
src="//connect.facebook.net/en_US/all.js"

if (typeof window !== "undefined") {
window.fbAsyncInit = function () {
    FB.init({
        appId      : '456955245760231',
        status     : true,
        cookie     : true,
        xfbml      : true  
    });
    console.log("Ddsds");
}
}

FB.api(
    '/',
    'POST',
    {"scrape":"true","id":"https://twitter.com/AltcoinDailyio/status/1456242323545755650"},
    function(response) {
        // Insert your code here
    }
  );

}
abc();