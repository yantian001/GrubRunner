

var isOverlap = true;
var isTest = false;
var mobid ={};
if (/(android)/i.test(navigator.userAgent)) {
	//alert('android');
mobid={
	bannerAdUnit:"ca-app-pub-1395662679269229/8971085591",
	intersititalAdUnit:"ca-app-pub-1395662679269229/1447818792"
  };
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
//  alert('iOS');
mobid={
		bannerAdUnit:"ca-app-pub-1395662679269229/4401285190",
		intersititalAdUnit:"ca-app-pub-1395662679269229/5878018393"
  };
}

function admob_init(){
	window.admob.setUp(mobid.bannerAdUnit,mobid.intersititalAdUnit,isOverlap,isTest);
	window.admob.onBannerAdPreloaded = bannerPreloaded;
	window.admob.onInterstitialAdPreloaded = intersitialPreloaded;
	window.admob.preloadBannerAd();
	//bannerPreloaded();
	//window.admob.preloadInterstitialAd();
	//alert('msg');
}

function bannerPreloaded()
{
	//admob_showBanner(bannerLocation.)
	//alert('banner loaded!');
	//window.admob.showBannerAd('top-center', 'SMART_BANNER');
}

function hideBanner()
{
	window.admob.hideBannerAd();
}

function admob_showBanner(location)
{
	//window.admob.hideBanner();
	//alert(location);
	//hideBanner();
	window.admob.showBannerAd(location, 'BANNER');
}

function intersitialPreloaded () {
	// body...
	//alert('intersitial preloaded');
	 window.admob.showInterstitialAd();
}

var bannerLocation={
	//position: 'top-left', 'top-center', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-center', 'bottom-right'
	TOPLEFT:'top-left',
	TOPCENTER:'top-center',
	TOPRIGHT:'top-right',
	LEFT:'left',
	CENTER:'center',
	RIGHT:'right',
	BOTTOMLEFT:'bottom-left',
	BOTTOMCENTER:'bottom-center',
  BOTTOMRIGHT:'bottom-right'
};
