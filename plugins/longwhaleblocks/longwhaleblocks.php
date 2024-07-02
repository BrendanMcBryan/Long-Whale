<?php

/**
 * Plugin Name:       Long Whale Blocks
 * Description:       Custom Blocks for Lond Whale Website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Brendan McBryan
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       longwhaleblocks
 *
 * @package Longwhaleblocks
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function longwhaleblocks_longwhaleblocks_block_init()
{
	register_block_type(__DIR__ . '/build/firstblock');
	register_block_type(__DIR__ . '/build/secondblock');
	register_block_type(__DIR__ . '/build/header');
	register_block_type(__DIR__ . '/build/artworkarchive');
	register_block_type(__DIR__ . '/build/taxonomylisting');
	register_block_type(__DIR__ . '/build/slideshow');
	register_block_type(__DIR__ . '/build/slide');
}
add_action('init', 'longwhaleblocks_longwhaleblocks_block_init');
