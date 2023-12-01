<!DOCTYPE html>
<html lang="en, us">
<head>
	<!-- Simon Partners Website -->

	<?php
		require 'head.php';
	?>
</head>

<body>
	<header id="home">
		<?php
			include 'include/main/_header.php';
		?>
	</header>

	<main role="main" class="fixed_bg">
		<content>

			<?php
				// include 'include/components/_coming-soon.php';
				include 'include/components/_products.php';
				include 'include/components/_overview.php';
				// include 'include/components/_commitment.php';

				// include 'include/components/_team.php';
				// include 'include/components/_lightbox.php';
				// include 'include/components/_partners.php';
				// include 'include/components/_investment.php';
				// include 'include/components/_offices.php';
				include 'include/components/_contact.php';
				// include 'include/components/_copyright.php';
			?>

		</content>
	</main>

	<?php
		include 'script.php';
	?>
</body>
</html>
