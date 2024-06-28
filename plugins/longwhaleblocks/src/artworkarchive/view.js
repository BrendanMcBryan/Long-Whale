/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

/* eslint-disable no-console */
console.log("Hello World! (from longwhaleblocks-longwhaleblocks block)");
/* eslint-enable no-console */

var elem = document.querySelector(".grid");
console.log(elem);
var msnry = new Masonry(elem, {
	// options
	itemSelector: ".grid-item",
	columnWidth: 80,
});
console.log(msnry);

// // layout Masonry after each image loads
// var $grid = $(".grid").masonry({
// 	// options...
// });

// $grid.imagesLoaded().progress(function () {
// 	$grid.masonry("layout");
// });

// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry(".grid", {
// 	// options
// 	columnWidth: 80,
// });
