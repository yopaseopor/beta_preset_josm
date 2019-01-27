/**
 * Workaround for [[bugzilla:708]] via [[Template:InterProject]].
 * Originally based on code from [[wikt:de:MediaWiki:Common.js]] by [[wikt:de:User:Melancholie]],
 * cleaned up and modified for compatibility with the Vector skin.
 *
 * Maintainers: [[User:Krinkle]], [[User:Ilmari Karonen]]
 * Modified by: [[User:Andyrom75]]: modifica i link di quello beta, aggiunge i progetti mancanti, se spcificati nell'interprogetto, senza crearne il menù
 */
/*global mediaWiki, jQuery */

( function ( mw, $ ) {
	'use strict';

	function updateOtherProjectsFromTemplate() {
		// Aggiorna i link dei progetti presenti su Wikidata
		$( '.wb-otherproject-wikibooks a' ).attr( 'href', $( "#interProject div ul li:contains('Wikibooks') a" ).attr( 'href' ) );
		$( '.wb-otherproject-wikisource a' ).attr( 'href', $( "#interProject div ul li:contains('Wikisource') a" ).attr( 'href' ) );
		$( '.wb-otherproject-wikiquote a' ).attr( 'href', $( "#interProject div ul li:contains('Wikiquote') a" ).attr( 'href' ) );
		$( '.wb-otherproject-wikinews a' ).attr( 'href', $( "#interProject div ul li:contains('Wikinotizie') a" ).attr( 'href' ) );
		$( '.wb-otherproject-commons a' ).attr( 'href', $( "#interProject div ul li:contains('Commons') a" ).attr( 'href' ) );
		$( '.wb-otherproject-wikivoyage a' ).attr( 'href', $( "#interProject div ul li:contains('Wikivoyage') a" ).attr( 'href' ) );
		$( '.wb-otherproject-species a' ).attr( 'href', $( "#interProject div ul li:contains('Wikispecies') a" ).attr( 'href' ) );
		$( '.wb-otherproject-meta a' ).attr( 'href', $( "#interProject div ul li:contains('Meta-Wiki') a" ).attr( 'href' ) );
		$( '.wb-otherproject-mediawiki a' ).attr( 'href', $( "#interProject div ul li:contains('Mediawiki') a" ).attr( 'href' ) );
		$( '.wb-otherproject-wikiversity a' ).attr( 'href', $( "#interProject div ul li:contains('Wikiversità') a" ).attr( 'href' ) );
		$( '.wb-otherproject-wiktionary a' ).attr( 'href', $( "#interProject div ul li:contains('Wikizionario') a" ).attr( 'href' ) );
	}
	
	function buildOtherProjectsFromTemplate() {
		var interPr = document.getElementById( 'interProject' );
		var sisterPr = document.getElementById( 'sisterProjects' );
		var toolBox = document.getElementById( 'p-tb' );
	
		mw.util.addCSS( '#interProject, #sisterProjects { display: none; }' );
	 
		var interProject = document.createElement( 'div' );
		interProject.id = 'p-wikibase-otherprojects' ;
	 
		interProject.className = mw.config.get( 'skin' ) === 'vector' ? 'portal' : 'portlet';
	 
		interProject.innerHTML =
			'<h3>' +
			( sisterPr && sisterPr.firstChild ? sisterPr.firstChild.innerHTML : 'Sister Projects' ) +
			'<\/h3><div class="' + ( mw.config.get( 'skin' ) === 'vector' ? 'body' : 'pBody' ) +'">' +
			interPr.innerHTML + '<\/div>';
	 
		if ( toolBox ) {
			if ( $( toolBox ).next() && $( toolBox ).next().attr( 'id' ) === 'p-coll-print_export' ) {
				 $( toolBox ).next().after( interProject );
			} else {
				$( toolBox ).after( interProject );
			}
		} else {
			$( 'div [role=navigation]' ).parent().last().append( interProject );
		}
	}
 
	$( function () {
		if ( !window.disableInterProjectJS && document.getElementById( 'interProject' ) ) {
			if ( document.getElementById( 'p-wikibase-otherprojects' ) ) {
				updateOtherProjectsFromTemplate();
			} else {
				mw.loader.using( [ 'mediawiki.util' ], function () {
					buildOtherProjectsFromTemplate();
				} );
			}
		}
	} );
}( mediaWiki, jQuery ) );