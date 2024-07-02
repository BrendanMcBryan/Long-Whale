<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<!-- <section class="artwork__container has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" > -->
<section class="artwork__container grid" <?php echo get_block_wrapper_attributes(); ?>>


	<?php
	$artwork = new WP_Query(array(
		'post_type' => 'artwork',
		'order' => 'ASC',

	));


	while ($artwork->have_posts()) {
		$artwork->the_post();
	?>
		<div class="grid-item artwork__frame">
			<img src="<?php echo get_field('hero_image') ?>" alt="">
			<div class="artwork__frame__info">
				<h5><?php echo get_field('title') ?></h5>
				<h6><?php echo get_field('date_completed') ?></h6>
			</div>

		</div>

	<?php
	}


	?>


</section>