<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="artworkInfo">

		<h1 class="artworkInfo_title"><?php echo get_field('title') ?></h1>
		<?php
		if (get_field('date_completed')) { ?>
			<h5 class="artworkInfo_date"><?php echo substr((get_field('date_completed')), 0, 4) ?></h5>
		<?php } ?>
		<?php
		if (get_field('artwork_type')) {
			$types = (get_field('artwork_type')); ?>
			<div class="artworkInfo__types">

				<?php

				foreach ($types as $type) {
				?>
					<h3><?php print_r($type) ?></h3> <?php } ?>
			</div>
		<?php } ?>
		<?php

		if (get_field('related_series')) {
		?>
			<?php $permalink = (get_field('related_series')[0]->guid) ?>

			<a href="<?php echo $permalink ?>">
				<h5 class="artworkInfo_related"><?php echo get_field('related_series')[0]->post_title ?></h5>
			</a>
		<?php } ?>

		<h4 class="artworkInfo_subtitle"><?php echo get_field('subtitle') ?></h4>
		<p class="artworkInfo__materials"><?php echo substr((get_field('date_completed')), 0, 4) ?>, <span><?php echo get_field('height') ?></span>" &times; <span><?php echo get_field('width') ?></span>", <?php echo get_field('materials') ?></p>
	</div>

</div>