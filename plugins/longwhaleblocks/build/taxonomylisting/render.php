<section class="taxonomy__listing">


	<?php



	$categories = get_terms(array(
		'taxonomy' => 'artwork-type',
		'hide_empty' => false
	));

	$separator = ' ';
	$output = '';

	foreach ($categories as $category) {
		// if ($category) {
		// 	$icon = get_field('cat_icon', $category);
		// }
		// echo $icon;
		// echo 'hello from taxonomy';
	?>
		<div class="taxonomy__frame">

			<a href="<?php echo esc_url(get_category_link($category->term_id))  ?>">
				<h2 class="taxonomy__frame--title"><?php echo esc_html($category->name) ?></h2>
			</a>

		</div>
	<?php

		// $output .= '<a href="' . esc_url(get_category_link($category->term_id)) . '" alt="' . esc_attr(sprintf(__('View all posts in %s', 'textdomain'), $category->name)) . '">' . esc_html($category->name) . '</a>' . $separator;

		// echo $output;
	}
	// echo trim($output, $separator);

	?>
</section>