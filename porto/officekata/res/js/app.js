
window.boutiek = {
    /**
     * URI of requested Product Search Results
     *
     * @var string
     */
    productsURL: 'res/js/products.json',
    /**
     * List of fields used in the search filter; case insensitive on the search,
     * but how they are type-cased here is how they will they will appear in the
     * Graphical User Interface (e.g. web page).
     *
     * Note: Category is stored as 'Product Type' (an assumption)
     *
     * @var array
     */
    filterableFields: [
      'Product Type', 'Colour', 'Size', 'Price'
    ],
    filterListings: {
      categories:[],
      prices: [],
      sizes: [],
      colors: []
    },
    /**
     * jQuery selector string for where product search results will be injected
     * into the document's DOM.
     *
     * @var string
     */
    targetDiv: '#productz',
    /**
     * Listing of Products and related data returned from the server
     *
     * @var array
     */
    products: [],
    /**
     * Contents of shopping cart
     *
     * @var array
     */
    cartContents: [],
    /**
     * Clear the filter select fields, sort filter arrays by alpha numeric, fill the filter select fields
     *
     * @return void
     */
    loadFilters: function() {
      var self = this,
          selectname = '';
      // clear contents
      $('#filter-categories > option, #filter-colors > option, #filter-sizes > option, #filter-prices > option').each(function() {
        if(this.value != '') {
          this.remove();
        }
      });

      // fill filter-interface with sorted options
      $.each(this.filterListings, function(key, items){
        selectname = '#filter-' + key;
        // sort items
        items.sort(function(a,b){
          if(a.key == b.key) return 0;
          return (a.key > b.key)? 1: -1;
        });
        $.each(items, function(key, vals) {
          $(selectname).append('<option value="' + this.key + '" data-value="' + key + '">' + this.key + '</option>')
        });
        $(selectname).change(function(e) {
          self.applyProductFilters();
        });
      });
    },
    applyProductFilters: function() {
      var self = this,
        selectname = '',
        applicable = [];

      $.each(this.filterListings, function(key, items){
        selectname = '#filter-' + key;
        var selectlist = $(selectname);
        if(selectlist.val() == '') {
          return true;
        } else {
          option = selectlist[0].options[selectlist[0].selectedIndex];
          filter = self.filterListings[key][$(option).attr('data-value')];
          $.each(filter.products, function(k, v) {
            applicable.push(v);
          });
        }
      });

      $.each($('.w3l_main_grid'), function() {
        if(applicable.length < 1) {
          $(this).show();
          return true;
        }
        if($.inArray($(this).attr('id'), applicable) > -1) {
          $(this).show();
          return true;
        }
        $(this).hide();
      });
    },
    /**
     * Get total number of Units currently in shopping cart, not
     * the number of unique items
     *
     * @return integer
    */
    getCartQuantityCount: function() {
      var total = 0;
      $.each(this.cartContents, function(){
        total = total + this.quantity;
      });
      return total;
    },
  /**
   * Get total costs for
   *
   * @returns {number}
   */
    getCartTotal: function() {
      var total = 0;
      $.each(this.cartContents, function(){
        total = total + (this.price * this.quantity);
      });
      return total;
    },
    /**
     * Fast and dirty add item to cart
     *
     * @param string SKU or Unique Item code
     * @param integer Quantity of Units to add to the existing
     */
    addToCart: function(sku, quantity) {
      // check if item is already in the the cartContents
      var listings = $.map(this.cartContents, function(obj, ordinal) {
        if(obj.productId == sku) {
          return ordinal;
        }
      });
      // update quantity of existing item
      if(listings.length === 1) {
        item = this.cartContents[listings[0]];
        item.quantity = item.quantity + quantity;
        return item;
      } else if(listings.length === 0) {

      }
      // find product information
      var product = $.map(this.products, function(obj, ordinal) {
        if(obj.vikingLegacySKU == sku) {
          return obj;
        }
      });
      item = this.cartContents.push({
        productId: sku,
        quantity: quantity,
        unit: product[0].unitOfMeasure,
        price: product[0].filtered.price,
        symbol: product[0].price.currencySymbol,
        category: product[0].filtered.category,
        size: product[0].filtered.size,
        color: product[0].filtered.color,
        description: product[0].title
      });
      return item;
    },
    renderCart: function() {
      var listingOut = ''
          formOut = '',
          listingTarget = $('tbody.cart-item-listings'),
          formTarget = $('#cart-item-array'),
          subtotal = 0,
          total = 0,
          today = new Date();


      // TODO clear items listing
      listingTarget.empty();
      $.each(this.cartContents, function() {
        subtotal = this.quantity * this.price;
        listingOut = listingOut + '<tr>' +
            '<td>' + this.quantity + '</td><td>' + this.description + '</td><td>' + this.productId + '</td>' +
            '<td>' + this.category + '</td><td>' + this.size + '</td>' +
            '<td>' + this.price + '</td>' +
            '<td>' + subtotal + '</td></tr>';
        formOut = formOut + '<input type="hidden" name="productId" value="' + this.productId + '" form="customer-purchase"/>' +
            '<input type="hidden" name="price" value="' + this.price + '" form="customer-purchase"/>' +
            '<input type="hidden" name="quantity" value="' + this.quantity + '" form="customer-purchase"/>' +
            '<input type="hidden" name="description" value="' + this.description + '" form="customer-purchase"/>';

        total = total + subtotal;
      });
      listingOut = listingOut.replace(/null/g, '-');
      listingOut = listingOut + '<tr><td class="total" colspan="6">Total</td><td>' + total + '</td></tr>';
      formOut = formOut + '<input type="hidden" name="total" value="' + total + '" form="customer-purchase"/>' +
          '<input type="hidden" name="date" value="' + today.toISOString().substring(0, 10) + '" form="customer-purchase"/>';

      formTarget.empty();
      formTarget.append(formOut);
      listingTarget.append(listingOut);
    },
    /**
     * Helper function for managing unique key, values in an object
     *
     * @param array arryOfObj
     * @param mixed keyVal Value sought
     * @param string destKey Name of field containing destination array for val
     * @return mixed object|null
     */
    storeUniqueFilter: function(arryOfObj, keyVal, destVal) {
      var listings = $.map(arryOfObj, function(obj, ordinal) {
        if(obj.key == keyVal) {
          return ordinal;
        }
      });

      if(listings.length === 1 ) {
        idx = listings[0];
        if ($.inArray(destVal, arryOfObj[idx].products) === -1) {
          arryOfObj[idx]['products'].push(destVal);
        }
        return arryOfObj;
      } else if(listings.length === 0) {
        arryOfObj.push({
          key: keyVal,
          products: [destVal]
        });
        return arryOfObj;
      }
      return null;
    },
    /**
     * Product Search and results rendered
     *
     * @returns void
     */
    loadProductSearch: function() {
      var b = this;
      // Product Search
      var jqxhr = $.getJSON(b.productsURL, function(json) {
        products = json;

        // TODO move to boutiek object add search parameter
        if (products) {
          var i = 0,
              seed = '',
              inject = '',
              color = '',
              attribs = [],// holds our filterableFields
              idx = -1,
              currentProduct = null;

          // Clear previous search results
          $(b.targetDiv).empty();

          $.each(products, function () {
            inject = '';
            attribs = [];
            seed = (i == 0) ? '' : i;
            currentProduct = this;
            b.products.push(currentProduct);

            // TODO Refactor & error handling on passed variable
            // Filterable fields outside of attributes section
            passed = b.storeUniqueFilter(b.filterListings.prices, this.price.value, this.vikingLegacySKU);
            this.filtered = {
              price: this.price.value,
              category: null,
              color: null,
              size: null
            }
            // Filterable fields within a attributes section
            $.each(this.attributes, function() {
              for (k = 0; k < b.filterableFields.length; k++) {
                idx = -1;
                if (this.key.toLowerCase().indexOf(b.filterableFields[k].toLocaleLowerCase()) >= 0) {
                  // FIXME hack due to time constraints
                  switch (b.filterableFields[k]) {
                    case 'Product Type':
                      passed = b.storeUniqueFilter(b.filterListings.categories,this.value,currentProduct.vikingLegacySKU);
                      currentProduct.filtered.category = this.value;
                      break;
                    case 'Colour':
                      passed = b.storeUniqueFilter(b.filterListings.colors,this.value,currentProduct.vikingLegacySKU);
                      currentProduct.filtered.color = this.value;
                      break;
                    case 'Size':
                      passed = b.storeUniqueFilter(b.filterListings.sizes,this.value,currentProduct.vikingLegacySKU);
                      currentProduct.filtered.size = this.value;
                      break;
                  }
                  attribs.push([b.filterableFields[k], this.displayName + ': ' + this.value]);
                }
              }
              return true; // continue to next attribute
            });

            // build and inject product item template
            inject = inject + '<div id="' + this.vikingLegacySKU + '" class="w3l_main_grid">' +
                '<div class="w3l_main_grid_top w3l_main_grid_top' + seed + '">' +
                '<h3>' + this.title + '</h3>' +
                '<figure>' +
                '<img src="http:' + this.imageUrl + '" alt="' + this.brandDescription + '" />' +
                '</figure>' +
                '</div>' +
                '<div class="w3l_main_grid_middle w3l_main_grid_middle' + seed + '">' +
                '<ul>';
            // brief product details
            $.each(attribs, function (ai) {
              inject = inject + '<li class="' + attribs[ai][0] + '">' + attribs[ai][1] + '</li>';
            });
            inject = inject + '</ul>' +
                '</div>' +
                '<div class="w3ls_order w3ls_order' + seed + '">' +
                '<h3>' + this.price.currencySymbol + this.price.seoFormattedValue + '</h3>' +
                '<span class="' + this.vikingLegacySKU +'"><a class="product-detail-request" href="products/' + this.vikingLegacySKU + '" data-value="' + this.vikingLegacySKU + '">Bestellung</a></span>' +
                '</div>' +
                '</div>';
            i++;
            if (i > 2) {
              //inject = inject + '<div class="clear">&nbsp;</div>';
              i = 0;
            }
            $(b.targetDiv).append(inject);
            // attach order click handler TODO refactor
            $('span.' + this.vikingLegacySKU + ' a').click(function(e){
              e.preventDefault();
              // animate shopping-cart-count bubble from mouse to origin
              var bubble = $('#shopping-cart-count');
              var bubPos = bubble.offset();
              var startX = e.clientX;
              var startY = e.clientY;

              // add unit
              var sku = $(this).attr('data-value');
              b.addToCart(sku, 1);
              bubble.text(b.getCartQuantityCount());
            });
          });
        }
      }).done(function() {
        // refresh filters
        b.loadFilters();
      });
    },
    /**
     * Central starting place for application's event listeners.
     * This is a project specific function, and should be customized
     * accordingly as this is not a library persay.
     *
     * @returns void
     */
    initHooks: function () {
      var self = this;
      this.loadProductSearch();

      // Hook into scroll events for speedy return to top
      $(window).scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() > 100) {
          $('.returnToTop').fadeIn();
        } else {
          $('.returnToTop').fadeOut();
        }
      });

      // Animate the body back down so user is at top
      // TODO upwards-chevrons animation
      $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
      });

      // User Login
      // TODO STUB FUNCTION check if user is logged in
//      $('.logged-in').hide();
//      $('.logged-out').show();
      $('.login-out-btn').click(function(e) {
        e.preventDefault();
        $('.logged-out').fadeOut(1000);
        $('.logged-in').fadeIn(1000);
      });

      $('span.logged-in a.shopping-cart, span.close-right').click(function(e){
        e.preventDefault();
        console.log($('#shopping-cart').css('display'));
        if($('#shopping-cart').css('display') != 'block') {
          self.renderCart();
        }
        $('#shopping-cart').toggle();
      });

      // FORM SUBMISSION CRIPPLED DUE TO PRIVATE POST ADDRESS
      $('.order-btn').click(function(e) {
        e.preventDefault();
        var formData = $('#customer-purchase').serialize();
        var serverAddress = $('#server-url').val();
        var self = this;

        if (serverAddress !== '') {
          $.ajax({
            type: "post",
            url: serverAddress,
            data: formData,
            contentType: "application/x-www-form-urlencoded",
            success: function(responseData, textStatus, jqXHR) {
              self.clearCart();
              alert("Thank you for your order");
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(errorThrown);
            }
          });
        } else {
          alert('FOR SECURITY Data can not be posted without a given Server Address');
        }
      });
    },
  clearCart: function() {
    // FIXME this is a fast and dirty stub function for lack of time
    if($('#shopping-cart').css('display') != 'none') {
      this.cartContents = [];
      this.renderCart();
      $('#shopping-cart-count').text(this.getCartQuantityCount());
      $('#shopping-cart').fadeOut(1000);
    }
  }
}

$(document).ready(function() {
  b = window.boutiek;//();
  b.initHooks();
});