var cbid ={};
//alert(navigator.userAgent);
if (/(android)/i.test(navigator.userAgent)) {
//  alert('android');
  cbid={
    appid:"5728c08404b0161c4f1a7cc7",
    appSignature:"3cb08aa1c0f680d10fd6b72062abafa493694f0e"
  };
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
//  alert('iOS');
  cbid={
    appid:"5728bfaa43150f208255d8a5",
    appSignature:"66b035a9332dd34529a815054407a34946df6132"
  };
}

function cb_init()
{
  window.chartboost.setUp(cbid.appid,cbid.appSignature);
  window.chartboost.preloadInterstitialAd('Default');
  window.chartboost.preloadInterstitialAd('Menu');
  window.chartboost.preloadMoreAppsAd('Default');
  //window.chartboost.onInterstitialAdPreloaded = function(location){alert(location)};
  //alert('init chartboost');
}

function cb_show(location)
{
  window.chartboost.showInterstitialAd(location);
}

function cb_showMoreApp()
{
  window.chartboost.showMoreAppsAd('Default');
}
