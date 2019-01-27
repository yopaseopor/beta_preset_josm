// ***** jqreq *****
var Req = window.Req;
Req.localPath = Req.localPath || '/skin/basicpe/';
Req(
  'eutils',
  'fontsizer',
  'autovalidate',
  'anchortags',
  'equalizeheights',
  'sharebtns',
  'getmodal',
  'q-paginghack',

  function(){
    'use strict';

    var $ = window.jQuery;
    var body = $('body');
    var article = $('.article');
    // var msie = 9>parseInt((/MSIE ([w.]+)/.exec(navigator.userAgent)||[])[1],10); // or: $('html').is('.msie')
    var isAdmin = window.EPLICA_loggedin;

    !body.is('.home, .onecol') && $('.pgmain .wrap, .pgextra2 .wrap, .pgextra1 .wrap').equalizeHeights();



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Search box related

    var $searchBox = body.find('.rsearch');

    // always put pointer to search field
    // $searchBox.find('#v_search').select(); // no need as the input has autofocus attribute
    $searchBox.not('.rsearch--is-detailed')
        .find('.rsearch__detailed')
            .hide()
            .each(function () {
                var detailedFieldset = $(this);
                $('<a class="rsearch__show-detailed" href="#"></a>')
                    .text( detailedFieldset.attr('data-label') )
                    .on('click', function (e) {
                        e.preventDefault();
                        $(this).remove();
                        detailedFieldset.show();
                        setTimeout(function(){
                           detailedFieldset.setFocus();
                          }, 0);
                      })
                    .insertAfter( $searchBox.find('.fi_btn, .rsearch__clear').last() );
              });

    $searchBox.find('form')
        // Suppress (disable) all empty fields on submit
        .on('submit', function (/*e*/) {
            $(this).find('.fi_txt > input, select')
                .filter(function(){ return !$(this).val(); })
                    .prop('disabled', true);
          });

    $searchBox.find('.rsearch__clear')
        .on('click', function (e) {
            e.preventDefault();
            $searchBox.find('.fi_txt > input, select').val('');
          });





    if ( !isAdmin )
    {
      //zebra tables
      $('tbody tr:nth-child(2n-1)').addClass('odd');

      article.find('a.videolink').Req(
          'q-videolinks',
          function() {
            $(this).videoLinks(); //{ vidWidth:'auto',vidHeight:'auto',aspect4x3:false }  Set width and height (default auto) and aspect 4x3 autocalc (default 16x9)
          }
        );

      $('<ul class="share-widgets" />')
        .sharebtns({
          wrap: 'li',
          // countNone: true,
          twitter:   1,
          // gplus:     2,
          // pinterest: 3,
          //fbshare2:   4,
          facebook:  5
        })
        .end()
        .appendTo( article.find('.boxbody') );

      // tag external urls
      var link, text, useappend, match;
      $('.pgmain').find('a')
          .anchorTags({
              usePatterns:  ['doc', 'pdf', 'xls']
            })
          .filter('.external, .file_pdf, .file_doc, .file_xls')
              .each(function() {
                  link = $(this);
                  text = '';
                  useappend = false;
                  match = this.className.match(/(^| )file_([a-z]+)( |$)/);
                  if ( match ) {
                    text = match[2].toUpperCase() +' skjal';
                  }
                  else if ( $(this).is('.external') ) {
                    text = 'Opnast í nýjum vafraglugga';
                    useappend = true;
                  }
                  if (text) {
                    link
                        .attr('target', '_blank')
                        .attr('title', (link.attr('title')||link.text()) +' ('+ text+')')
                        .not(':has(img)')
                            [useappend ? 'append' : 'prepend'](' <span class="icon">('+ text +')</span>');
                  }
                });



      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

      $('.rinfo ul').each(function () {
          var lis = $(this).find('li');
          if (lis.length > 4) {
            var $hiddenItems = lis.slice(4);
            $hiddenItems.hide();

            $(this).after(
              $('<a class="showall" href="#">Sjá allar</a>').bind('click', function (e) {
                e.preventDefault();
                $hiddenItems.toggle();
                $(this).html($(this).html() === 'Sýna færri' ? 'Sjá allar' : 'Sýna færri');
              })
            );
          }
        });



      // Insert Ivona player into articles
      if ( !body.is('.ekkilestur') )
      { // use .ekkilestur to exclude page
        var toRead = article/*.add( '.pgmain .articlelist' )*/.not('.ekkilestur').filter(':first');

        toRead
            .addClass('webreader')
            .prepend('<div id="webreaderContainer">'+
                       '<div class="stream">Veflestur er þjónusta ætluð þeim sem einhverra hluta vegna eiga erfitt með að lesa texta af skjá</div>'+
                     '</div>'+
                     '<div id="webreader-root"/>')
            .each(function() {
                window.WebreaderAsyncInit = function() {
                    var voiceID = 35;
                    var voiceRate = 100;
                    var voiceVolume = 100;
                    var options = {
                      shadow:0,
                      playerMode:0,
                      scrollMode:1,
                      lang:'is',
                      bgColor:'#000000',
                      btnColor:'#FFFFFF',
                      borColor:'#666666',
                      alpha:100,
                      download:0,
                      parentId:'webreaderContainer',
                      soundUrl:escape('http://www.ivona.com/online/fileWebRead.php'+
                              '?v='+voiceID+
                              '&pv='+voiceVolume+
                              '&pr='+voiceRate+
                              '&i=1Z21Smit7T9Oejpz'+
                              '&dc=article,articlelist'+
                              '&sdc=boxhead,ekkilestur,stream,senda,img,imagebox'+ // use .ekkilestur to exclude (page or element)
                              '&u='+escape(document.location.href))
                      };
                    window.Webreader.create(options, 24 /* Height */);
                };

                (function(){
                  //Please Do NOT change or modify this function
                  var ts=new Date().getTime();
                  window.WebreaderAutoCreate = 0;
                  var elm = document.createElement('script');
                  elm.async = true;
                  elm.src = (('https:'===document.location.protocol) ? 'https://secure.iwebreader.com/static' : 'http://static.iwebreader.com/wr' ) + '/scripts/webreaderPlayer2.js?timestamp='+ts;
                  document.getElementById('webreader-root').appendChild(elm);
                }());
              });
      } // end insert Ivona player


    } // end loggedin





    $(document)
        .on('click', '.rsearch__helplink', function (e) {
            e.preventDefault();
            var link = this;
            var $link = $(link);
            var modal = $link.data('helpModal');
            if ( !modal )
            {
              modal = $.getModal({
                      opener:  link,
                      content: '<p>...loading...</p>',
                      fickle: {
                          fadein:  800,
                          fadeout: 500,
                          onClosed: function(){
                              modal.detach();
                            }
                        }
                    });
              $link.data('helpModal', modal);
            }
            modal.fickle('open');
            $.get(link.href, { justPicPos:'pgmain'}, function (res) {
                var article = $.getResultBody(res).find('.article');
                article.find('.buttons').detach();
                modal.data('popbody')
                    .empty()
                    .append( article )
                    .focusHere();
              });
          });






    if($('.stjornbord')[0]) {
      Req(
        '/dwr/interface/StjornbordAjax.js',
        '/dwr/engine.js',
        '/dwr/util.js',
        '/bitar/stjornbord/js/stjornbord-new.js'
      );
    }

    /**
     * Remove unwanted vidhengi image and link at bottom of some reglugerðir. occurs in about 1500 old reglugerdir
     */
    $('.reglugerd a[href^="/media/vidhengi"]').each(function() {
      // don't delete the one in the rinfo box at the top
      if($(this).closest('.rinfo').length === 0){
        $(this).remove();
      }
    });


    /**
     * custom validation for reglugerd number in custom search
     */
    $.extend($.av.lang.is, {
      fi_regnr: {inline: 'Verður að byrja á núllum. Dæmi: 0165',  alert: 'Bara tölustafir og verður að byrja á núllum, t.d. 0165'}
    });
    $.av.type.fi_regnr = function (value, wrapper, lang) {
      if(value) {
        // legal input?
        if(!value.match(/^\d+/)) {
          return $.av.getError( 'fi_regnr', lang );
        }
        // all ok, send to search
        if(value.length >= 4) {
          return true;
        }
        // prepend zeros
        while(value.length < 4) {
          value = 0 + value;
        }
        //set field to updated value
        $(this).val(value);
      }
      return true;
    };


    //sitemap collapser
    $('.sitemap').Req('treecollapse', function() {
        $(this).treeCollapse({
            branch: 'li:has(ul)',
            doTogglers: 1,
            toggler: '> a.expand',
            startOpen: 'ul.level1 > li:has(ul)'
          });
        });

    $('.pagestyle').fontsizer();
    $('form').autoValidate();

    $('html').removeClass('beforejsinit');

    Req.loadPageScripts({ folder:'' });


    var paging = $('.paging .jump span');
    if (paging && paging.find('a').length > 9)
    {
      paging.pagingHack();
    }


    // jira issue collector https://jira.hugsmidjan.is/secure/ViewCollector!default.jspa?projectKey=INN&collectorId=61f0613f
    if ( window.EPLICA_deploymentMode && window.EPLICA_deploymentMode !== 'prod') {
      $.ajax({
        url: 'https://jira.hugsmidjan.is/s/d41d8cd98f00b204e9800998ecf8427e/en_UK-sj8kdk-1988229788/6265/5/1.4.7/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=61f0613f',
        type: 'get',
        cache: true,
        dataType: 'script'
      });
    }



  }
);
// **** /jqreq *****
