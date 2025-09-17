
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/polyfills.i4n1wfLs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/app.COZ_xXYV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/en.YWhv_wyg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/page-OnePage.BYn9iUvQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.CD_wSZPo.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.DdiG6vk5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/VaultedPayment.BBOqRu3v.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.2X1T4JkJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.D6UW8dHY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.U_StIpv-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CxMxHZd9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.Bqxv-NYx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/PayButtonSection.CKTNcNrn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.BEVBndsO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.p4vQcg6L.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/index.Bi1g21tO.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/app.R89fRMfD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.Dvkv4byz.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0098/3374/2436/files/2000-1000_x320.png?v=1690382474"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  