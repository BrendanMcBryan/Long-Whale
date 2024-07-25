<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="artworkInfo">

		<h1 class="artworkInfo__title"><?php echo get_field('title') ?></h1>


		<?php
		if (get_field('subtitle')) { ?>
			<h2 class="artworkInfo__subtitle"><?php echo get_field('subtitle') ?></h2>
		<?php } ?>


		<?php
		if (get_field('date_completed')) { ?>
			<h4 class="artworkInfo__date"><?php echo substr((get_field('date_completed')), 0, 4) ?></h4>
		<?php } ?>

		<p class="artworkInfo__materials"><span><?php echo get_field('height') ?></span>" &times; <span><?php echo get_field('width') ?></span>" | <span><?php echo get_field('materials') ?></span></p>
		<?php

		if (get_field('related_series')) {
		?>
			<?php $permalink = (get_field('related_series')[0]->guid) ?>

			<a href="<?php echo $permalink ?>">
				<h5 class="artworkInfo__related"><?php echo get_field('related_series')[0]->post_title ?></h5>
			</a>
		<?php } ?>
		<?php
		if (get_field('artwork_type')) {
			$types = (get_field('artwork_type')); ?>
			<div class="artworkInfo__types">

				<?php

				foreach ($types as $type) {
				?>
					<div class="artworkInfo__types__type"><a href="<?php
																													echo get_site_url() . '/artwork-type/' . $type->name;
																													?>
					
					"><?php echo ($type->name) ?></a></div> <?php } ?>
			</div>
		<?php } ?>




	</div>

</div>